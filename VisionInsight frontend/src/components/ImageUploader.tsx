import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';

interface ImageUploaderProps {
  onImageSelected: (imageData: string, file: File | null) => void;
  isAnalyzing: boolean;
}

const ImageUploader = ({ onImageSelected, isAnalyzing }: ImageUploaderProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.includes('image/')) {
      toast.error('Please upload an image file');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageData = event.target?.result as string;
      setPreviewUrl(imageData);
      onImageSelected(imageData, file);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <Card className="border-dashed border-2 hover:border-primary/50 transition-all">
        <CardContent 
          className="flex flex-col items-center justify-center gap-4 p-6 cursor-pointer min-h-[300px]"
          onClick={isAnalyzing ? undefined : triggerFileInput}
          onDragOver={(e) => e.preventDefault()}
          onDrop={isAnalyzing ? undefined : handleDrop}
        >
          {previewUrl ? (
            <div className="relative w-full">
              <img 
                src={previewUrl} 
                alt="Retina scan preview" 
                className="w-full h-auto max-h-[250px] object-contain rounded-md"
              />
              {!isAnalyzing && (
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="absolute bottom-2 right-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerFileInput();
                  }}
                >
                  Change Image
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-muted-foreground">
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                  <line x1="16" y1="5" x2="22" y2="5" />
                  <line x1="19" y1="2" x2="19" y2="8" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-medium text-lg">Upload Retina Scan</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Drag and drop or click to browse
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Supported formats: JPG, PNG, JPEG (Max size: 5MB)
                </p>
              </div>
              <Button variant="outline" className="mt-2">
                Select Image
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageUploader;
