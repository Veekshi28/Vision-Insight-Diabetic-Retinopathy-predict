
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export type RetinopathyLevel = 0 | 1 | 2 | 3 | 4;

interface RetinopathyResultProps {
  level: RetinopathyLevel;
  className?: string;
}

const getLevelInfo = (level: RetinopathyLevel) => {
  const levels = [
    {
      title: 'No Diabetic Retinopathy',
      description: 'No abnormalities detected in the retina scan.',
      color: 'bg-severity-no-dr',
      textColor: 'text-severity-no-dr',
      recommendations: [
        'Continue regular annual eye examinations',
        'Maintain good blood sugar control',
        'Follow a healthy diet and exercise routine',
        'Monitor blood pressure regularly'
      ]
    },
    {
      title: 'Mild Diabetic Retinopathy',
      description: "Small areas of balloon-like swelling in the retina's tiny blood vessels.",
      color: 'bg-severity-mild',
      textColor: 'text-severity-mild',
      recommendations: [
        'Schedule follow-up examination in 6-12 months',
        'Optimize blood sugar, blood pressure, and cholesterol levels',
        'Report any vision changes to your doctor immediately',
        'Consider lifestyle modifications to improve overall health'
      ]
    },
    {
      title: 'Moderate Diabetic Retinopathy',
      description: 'Some blood vessels that nourish the retina are blocked, causing decreased blood supply to parts of the retina.',
      color: 'bg-severity-moderate',
      textColor: 'text-severity-moderate',
      recommendations: [
        'Schedule follow-up examination in 3-6 months',
        'Stricter control of blood sugar, blood pressure, and cholesterol',
        'Consult with an ophthalmologist for specialized care',
        'Be vigilant about any changes in vision and report immediately'
      ]
    },
    {
      title: 'Severe Diabetic Retinopathy',
      description: 'Many more blood vessels are blocked, depriving several areas of the retina of their blood supply.',
      color: 'bg-severity-severe',
      textColor: 'text-severity-severe',
      recommendations: [
        'Immediate consultation with an ophthalmologist',
        'Possible need for specialized diagnostic tests',
        'Discuss treatment options to prevent vision loss',
        'Strict adherence to diabetes management plan',
        'Prepare for possible interventions like laser treatment'
      ]
    },
    {
      title: 'Proliferative Diabetic Retinopathy',
      description: 'The most advanced stage where signals sent by the retina trigger the growth of new blood vessels that are fragile and can leak blood.',
      color: 'bg-severity-proliferate',
      textColor: 'text-severity-proliferate',
      recommendations: [
        'Urgent treatment required - contact ophthalmologist immediately',
        'Laser treatment or surgery may be necessary',
        'Aggressive management of diabetes with endocrinologist',
        'Close monitoring and frequent follow-ups',
        'Discuss vision rehabilitation options if vision loss has occurred'
      ]
    }
  ];
  
  return levels[level];
};

const RetinopathyResult = ({ level, className }: RetinopathyResultProps) => {
  const info = getLevelInfo(level);
  
  return (
    <Card className={cn("w-full overflow-hidden", className)}>
      <div className={cn("h-2", info.color)} />
      <CardHeader>
        <CardTitle className={cn("text-2xl font-bold", info.textColor)}>
          {info.title}
        </CardTitle>
        <CardDescription>
          {info.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Severity Level</span>
            <span>{level}/4</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className={cn("h-full rounded-full transition-all duration-700", info.color)} 
              style={{ width: `${(level / 4) * 100}%` }} 
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium">Recommendations:</h4>
          <ul className="space-y-2">
            {info.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("shrink-0 mt-0.5", info.textColor)}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RetinopathyResult;
