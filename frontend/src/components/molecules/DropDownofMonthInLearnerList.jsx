import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropDownofMonthInLearnerList({ onSelect }) {
  const [selectedMonth, setSelectedMonth] = useState("1 Month");

  const monthOptions = [
    { label: "1 Month", value: 1 },
    { label: "2 Months", value: 2 },
    { label: "3 Months", value: 3 },
    { label: "6 Months", value: 6 },
    { label: "12 Months", value: 12 },
  ];

  const handleSelect = (option) => {
    setSelectedMonth(option.label);
    if (onSelect) onSelect(option.value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 md:w-[200px] w-full bg-neutral-300 text-gray-700 font-bold rounded-md hover:bg-purple-700 hover:text-white ">
        {selectedMonth}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[200px]">
        {monthOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
