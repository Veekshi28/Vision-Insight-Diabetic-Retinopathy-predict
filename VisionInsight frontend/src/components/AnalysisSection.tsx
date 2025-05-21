import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ImageUploader from './ImageUploader';
import RetinopathyResult, { RetinopathyLevel } from './RetinopathyResult';
import { toast } from '@/components/ui/sonner';
import { Card, CardContent } from '@/components/ui/card';

const AnalysisSection = () => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<RetinopathyLevel | null>(null);

  const handleImageSelected = (data: string, file: File | null) => {
    setImageData(data);
    setUploadedFile(file);
    setResult(null); // Reset result when new image is uploaded
  };

  useEffect(() => {
    const handlePrediction = (event: any) => {
      const predictionMap: Record<string, RetinopathyLevel> = {
        No_DR: 0,
        Mild: 1,
        Moderate: 2,
        Severe: 3,
        Proliferative_DR: 4,
      };
      const label = event.detail;
      const level = predictionMap[label];
      if (level !== undefined) {
        setResult(level);
        toast.success('Analysis completed successfully');
      } else {
        console.error('Unknown prediction received:', label);
      }
      setIsAnalyzing(false);
    };

    window.addEventListener("retinaPrediction", handlePrediction);
    return () => window.removeEventListener("retinaPrediction", handlePrediction);
  }, []);

  const handleAnalyze = async () => {
    if (!uploadedFile) {
      toast.error('Please upload a retina scan image first.');
      return;
    }

    setIsAnalyzing(true);

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const response = await fetch("https://diabeticretnopathypredictionapi.victoriousrock-e0a80fc6.eastus2.azurecontainerapps.io/predict", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log("Prediction result:", data);

      if (data?.prediction && typeof window !== "undefined") {
        const event = new CustomEvent("retinaPrediction", { detail: data.prediction });
        window.dispatchEvent(event);
      }
    } catch (err) {
      toast.error("Prediction failed");
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setImageData(null);
    setUploadedFile(null);
    setResult(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-display font-bold mb-4">Upload Retina Scan</h2>
          <p className="text-muted-foreground mb-6">
            Upload a clear image of your retina scan to get an assessment of diabetic retinopathy severity.
          </p>
          <ImageUploader onImageSelected={handleImageSelected} isAnalyzing={isAnalyzing} />

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <Button 
              onClick={handleAnalyze} 
              disabled={!imageData || isAnalyzing}
              className="w-full sm:w-auto"
            >
              {isAnalyzing ? (
                <>
                  <div className="mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
                  Analyzing...
                </>
              ) : 'Analyze Scan'}
            </Button>

            {imageData && (
              <Button 
                variant="outline" 
                onClick={handleReset}
                disabled={isAnalyzing}
                className="w-full sm:w-auto"
              >
                Reset
              </Button>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display font-bold mb-4">Analysis Result</h2>
          <p className="text-muted-foreground mb-6">
            View your diabetic retinopathy assessment results and recommended actions.
          </p>

          {isAnalyzing ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-16">
                <div className="loader mb-4"></div>
                <p className="text-center">Analyzing your retina scan...</p>
                <p className="text-xs text-muted-foreground mt-2">This may take a few moments</p>
              </CardContent>
            </Card>
          ) : result !== null ? (
            <RetinopathyResult level={result} className="animate-fade-in" />
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-50">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <p>Upload a retina scan and click "Analyze" to see results</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisSection;
