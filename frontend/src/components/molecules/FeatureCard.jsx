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
    <div className="mx-auto w-full max-w-[1231px] py-10 px-4">
      <div className="flex flex-col lg:flex-row gap-6 lg:h-[447px]">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row justify-around border rounded-2xl bg-neutral-50 w-full lg:w-[820px] border-gray-300 p-6">
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
        <div className="border rounded-2xl w-full lg:w-[380px] border-gray-300 flex flex-col items-center justify-center p-4 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Here is your HR Point of Contact
          </h2>

                    <Accordion type="single" collapsible className="w-full sm:w-2/3">
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

      <div className="mt-10">
        <h1 className="text-2xl font-bold">
          Here is your HR Point of Contact
        </h1>
      </div>
    </div>
  );
}
