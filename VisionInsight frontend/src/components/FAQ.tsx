
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What is diabetic retinopathy?",
      answer: "Diabetic retinopathy is a diabetes complication that affects the eyes. It's caused by damage to the blood vessels in the retina, the light-sensitive tissue at the back of the eye. Initially, diabetic retinopathy may cause no symptoms or only mild vision problems, but it can eventually lead to blindness if left untreated."
    },
    {
      question: "How accurate is the assessment?",
      answer: "Our AI model has been trained on thousands of retinal images and has achieved over 90% accuracy in clinical testing. However, this tool is designed to be a screening aid and not a replacement for professional medical diagnosis. Always consult with a healthcare professional for definitive diagnosis and treatment."
    },
    {
      question: "What type of image should I upload?",
      answer: "You should upload a clear, well-lit image of your retina scan. These are typically taken by your eye doctor using specialized equipment called a fundus camera or retinal camera. Standard phone camera images of your eye are not suitable for this assessment."
    },
    {
      question: "Is my medical data kept private?",
      answer: "Yes, we take privacy very seriously. Your images and results are encrypted and not stored permanently on our servers. We comply with health data regulations and do not share your information with third parties without your explicit consent."
    },
    {
      question: "What should I do after receiving my results?",
      answer: "Regardless of your results, we recommend regular check-ups with your eye care specialist, especially if you have diabetes. If your results indicate moderate to severe retinopathy, we strongly recommend scheduling an appointment with an ophthalmologist as soon as possible."
    },
    {
      question: "Can this tool detect other eye conditions?",
      answer: "No, this tool is specifically trained to detect and classify diabetic retinopathy. It cannot reliably detect other eye conditions like glaucoma, macular degeneration, or cataracts."
    },
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our service and diabetic retinopathy
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don't see your question here?
          </p>
          <a href="#" className="text-primary hover:underline">Contact our support team</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
