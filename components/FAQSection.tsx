import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of financing options do you offer?",
    answer: "We offer various financing options including traditional auto loans, lease-to-own programs, and special financing for business vehicles. Our rates are competitive and we work with multiple lenders to find the best option for your situation."
  },
  {
    question: "Do you offer nationwide delivery?",
    answer: "Yes, we provide nationwide delivery services. Our professional transport team ensures safe and timely delivery to your location. Delivery costs vary based on distance and specific requirements."
  },
  {
    question: "What is included in your warranty coverage?",
    answer: "Our standard warranty covers major mechanical components for 12 months/12,000 miles. Extended warranty options are available for additional coverage and longer terms."
  },
  {
    question: "Can I trade in my current vehicle?",
    answer: "Yes, we accept trade-ins! We'll evaluate your vehicle and offer a fair market value that can be applied to your purchase."
  },
  {
    question: "What documentation do I need to purchase a van?",
    answer: "You'll need a valid driver's license, proof of insurance, and proof of income if financing. For business purchases, additional documentation may be required."
  }
];

export default function FAQSection() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}