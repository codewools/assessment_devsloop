// src/components/molecules/HRContact.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function HRContact({ value, title, department, email, phone, availability }) {
  return (
    <AccordionItem 
      value={value} 
      className="border bg-[#FFFFFF] border-[#E0E0E0] rounded-md mb-2  last:mb-0 last:border-b-1"
    >
      {/* Accordion Header */}
   <AccordionTrigger
  className="flex items-center px-3 py-2 hover:bg-gray-50"
>
  {/* Left Content (Avatar + Text) */}
  <div className="flex items-center gap-3 flex-grow text-left">
    <Avatar className="bg-[#F5F5F5] p-1 w-12 h-12">
      <AvatarFallback>
        <span className="fa-regular text-xl fa-user"></span>
      </AvatarFallback>
    </Avatar>

    <div className="flex flex-col">
      <span className="font-medium">{title}</span>
      <span className="text-[12px] text-gray-400 font-normal">{department}</span>
    </div>
  </div>

   
</AccordionTrigger>


      {/* Accordion Content */}
      <AccordionContent className="px-4 py-4 text-gray-600 ">
        <p className="text-purple-600 mb-3 underline">
          <i className="fa-regular fa-envelope mr-2"></i>{email}
        </p>
        <p className="text-purple-600 underline">
          <i className="fa-solid fa-phone mr-2"></i> {phone}
        </p>
      </AccordionContent>

      <AccordionContent className="px-4 py-2 text-gray-600  text-[12px]  ">
        <p className="font-bold mb-2">AVAILABLE</p>
        <p className="font-light">{availability}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
