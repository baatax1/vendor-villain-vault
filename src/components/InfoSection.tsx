
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const InfoSection = () => {
  return (
    <div className="max-w-4xl mx-auto mb-8 px-4">
      <Accordion type="single" collapsible className="brimstone-bg rounded-lg p-4">
        <AccordionItem value="what-is-baa" className="border-b-hellfire-800">
          <AccordionTrigger className="text-xl text-hellfire-300 hover:text-hellfire-200">
            What is a BAA?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            <p className="mb-2">
              A Business Associate Agreement (BAA) is a legal contract required by HIPAA (Health Insurance Portability and Accountability Act) 
              that must be executed between a covered entity and a vendor (business associate) that handles protected health information (PHI).
            </p>
            <p>
              BAAs are a <span className="text-hellfire-300 font-semibold">basic compliance requirement</span> for any service provider working with healthcare organizations, 
              not a premium feature that should come with exorbitant costs.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="why-this-exists" className="border-b-hellfire-800">
          <AccordionTrigger className="text-xl text-hellfire-300 hover:text-hellfire-200">
            Why does this exist?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            <p className="mb-2">
              Many vendors have turned BAAs into profit centers by:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Requiring enterprise plans for basic BAA support</li>
              <li>Charging exorbitant fees for simply signing a document</li>
              <li>Setting artificial minimum spend requirements</li>
              <li>Making BAAs only available through "special pricing"</li>
            </ul>
            <p className="mt-3">
              This wall of shame exposes these practices to pressure vendors to treat BAAs as what they are: 
              a basic legal requirement, not a premium feature.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default InfoSection;
