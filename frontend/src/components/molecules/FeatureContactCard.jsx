// src/components/molecules/HRContact.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function HRContact({ value, title, department, email, phone, availability }) {
  return (
    <AccordionItem 
      value={value} 
      className="border border-gray-200 rounded-md mb-2 overflow-hidden"
    >
      {/* Accordion Header */}
      <AccordionTrigger className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50">
        <Avatar className="bg-gray-200">
          <AvatarImage src="/Icons Stroke.png" alt="HR" />
          <AvatarFallback>HR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-left">
          <span className="font-medium">{title}</span>
          <span className="text-[12px] text-gray-400 font-normal">{department}</span>
        </div>
      </AccordionTrigger>

      {/* Accordion Content */}
      <AccordionContent className="px-4 py-2 text-gray-600 ">
        <p className="text-purple-600 mb-1">
          <i className="fa-regular fa-envelope mr-2"></i>{email}
        </p>
        <p className="text-purple-600">
          <i className="fa-solid fa-phone mr-2"></i> {phone}
        </p>
      </AccordionContent>

      <AccordionContent className="px-4 py-2 text-gray-600  ">
        <p className="font-bold">AVAILABLE</p>
        <p className="font-light">{availability}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
