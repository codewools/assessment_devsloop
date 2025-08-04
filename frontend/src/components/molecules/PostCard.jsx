
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function PostCard() {
  return (
    <Card className="gap-0 py-0 shadow-sm border border-gray-200 rounded-2xl w-full max-w-sm">
      <div className="relative">
        <img
          src="/Preview.png"
          alt="Post"
          className="w-full h-[180px] object-cover rounded-t-md"
        />
        <div className="absolute top-2 right-2 r flex gap-1 bg-white px-2 py-1 rounded-md">
           
            <p className="font-bold"><i class="fa fa-star text-purple-600" aria-hidden="true"></i>4.8</p>
            <p className="text-gray-500"> 50k reviews</p>
        </div>
      </div>
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="flex flex-row  p-2">
          <img src="/Frame 81041527.png" alt="User" className=" object-cover rounded-t-md"/>
          <span className="text-xs m-1 text-gray-500">Llama Bites Micro-Learning</span>

</div>
 </CardHeader>
 <CardContent>
<div className="p-2">
    <h1 className="font-bold text-sm ">Catching Google Password <br></br>Harvesting</h1>
    <p className="text-gray-500 text-[12px] mb-10">
        Data breaches can have serious repercussions for an organization, including expensive ...
    </p>
    <p className=" text-[12px] text-gray-500 ">
      <i class="fa fa-clock" aria-hidden="true"></i>  15 minutes
    </p>
</div>
</CardContent>
       
     

   
    </Card>
  );
}
