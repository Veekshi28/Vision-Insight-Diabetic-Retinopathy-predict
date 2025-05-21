
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Diabetic Retinopathy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding the condition and why early detection matters
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">What is Diabetic Retinopathy?</h3>
              <p className="text-muted-foreground">
                Diabetic retinopathy is a diabetes complication that affects the eyes. It's caused by damage to the blood vessels in the retina, the light-sensitive tissue at the back of the eye.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 2 8 8M9 15l8-8M15 9l8 8" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Stages of Progression</h3>
              <p className="text-muted-foreground">
                The condition progresses through stages, from mild to proliferative. Early stages may have no symptoms, while later stages can lead to vision loss if left untreated.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Early Detection is Key</h3>
              <p className="text-muted-foreground">
                Regular eye screenings are vital as early detection can prevent vision loss. Treatment options are most effective when the condition is caught early.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold mb-4">Risk Factors</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Duration of Diabetes",
                description: "The longer you have diabetes, the greater your risk of developing retinopathy."
              },
              {
                title: "Poor Blood Sugar Control",
                description: "Consistently high blood glucose levels increase the risk and progression."
              },
              {
                title: "High Blood Pressure",
                description: "Hypertension can worsen diabetic retinopathy."
              },
              {
                title: "High Cholesterol",
                description: "Elevated levels can increase the risk of vision problems."
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h4 className="font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
