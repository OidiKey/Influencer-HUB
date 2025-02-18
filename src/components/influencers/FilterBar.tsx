import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Instagram, Youtube, Search } from "lucide-react";

interface FilterBarProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  platform: string;
  category: string;
  followerRange: [number, number];
  engagementRate: [number, number];
  search: string;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const defaultFilters: FilterState = {
    platform: "all",
    category: "all",
    followerRange: [0, 1000000],
    engagementRate: [0, 100],
    search: "",
  };

  const categories = [
    "All",
    "Fashion",
    "Beauty",
    "Lifestyle",
    "Tech",
    "Gaming",
    "Food",
    "Travel",
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative flex-1">
            <Input
              placeholder="Search influencers..."
              className="pl-10"
              defaultValue={defaultFilters.search}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:flex-nowrap">
          <Select defaultValue={defaultFilters.platform}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                <span className="flex items-center gap-2">All Platforms</span>
              </SelectItem>
              <SelectItem value="instagram">
                <span className="flex items-center gap-2">
                  <Instagram className="h-4 w-4" /> Instagram
                </span>
              </SelectItem>
              <SelectItem value="youtube">
                <span className="flex items-center gap-2">
                  <Youtube className="h-4 w-4" /> YouTube
                </span>
              </SelectItem>
              <SelectItem value="tiktok">
                <span className="flex items-center gap-2">TikTok</span>
              </SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue={defaultFilters.category}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem
                  key={category.toLowerCase()}
                  value={category.toLowerCase()}
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" className="w-[140px]">
            More Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
