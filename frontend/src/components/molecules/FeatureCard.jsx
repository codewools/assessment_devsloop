import { Button } from "../ui/button";
import PostCard from "./PostCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HRContact from "./FeatureContactCard";

export default function FeatureCard() {
  return (
    <div className="mx-auto w-full max-w-[1231px] mt-8 mb-5 px-4">
      <div className="flex flex-col lg:flex-row gap-6 lg:h-[447px]">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row  border rounded-2xl  w-full lg:w-[820px] bg-[#FFFFFF] border-[#E0E0E0] p-6 md:pr-15 pr-5 ">
          <div className="flex flex-col justify-center max-w-md mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold lg:w-[70%] mt-4 mb-4 leading-snug">
              Launch your short Phishing Awareness Training course.
            </h2>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-fit">
              Get Started
            </Button>
          </div>

          <div className="flex justify-center">
            <PostCard />
          </div>
        </div>

        {/* Right Section */}
        <div className="border bg-[#FFFFFF] border-[#E0E0E0] rounded-2xl w-full lg:w-[380px]  flex flex-col items-center justify-center p-4 ">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Here is your HR Point of Contact
          </h2>

                  <Accordion type="single" collapsible className="w-full md:p-5 p-0 space-y-2">

            <HRContact
              value="item-1"
              title="Contact Details"
              department="IT Services"
              email="Contact@Example.com"
              phone="(123) 456-7890"
              availability="Workdays, 9:00 AM - 5:00 PM"
            />
            <HRContact
              value="item-2"
              title="HR Manager"
              department="Human Resources"
              email="hr@example.com"
              phone="(987) 654-3210"
              availability="Mon-Fri, 8:00 AM - 4:00 PM"
            />
            
          </Accordion>
        </div>
      </div>

     
    </div>
  );
}
