import React from "react";
import FilterBar from "./FilterBar";
import InfluencerCard from "./InfluencerCard";

interface InfluencerGridProps {
  influencers?: Array<{
    id: string;
    name: string;
    username: string;
    avatar: string;
    platforms: Array<"instagram" | "tiktok" | "youtube">;
    categories: string[];
    followers: number;
    engagementRate: number;
    rating: number;
  }>;
  onFilterChange?: (filters: any) => void;
  onViewProfile?: (id: string) => void;
}

const defaultInfluencers = [
  {
    id: "1",
    name: "Sarah Johnson",
    username: "@sarahjcreates",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    platforms: ["instagram", "tiktok"],
    categories: ["Lifestyle", "Fashion"],
    followers: 125000,
    engagementRate: 4.8,
    rating: 4.5,
  },
  {
    id: "2",
    name: "Mike Chen",
    username: "@mikefoodie",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    platforms: ["youtube", "instagram"],
    categories: ["Food", "Travel"],
    followers: 890000,
    engagementRate: 3.2,
    rating: 4.8,
  },
  {
    id: "3",
    name: "Emma Wilson",
    username: "@emmabeauty",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    platforms: ["instagram", "youtube"],
    categories: ["Beauty", "Lifestyle"],
    followers: 450000,
    engagementRate: 5.1,
    rating: 4.7,
  },
  {
    id: "4",
    name: "Alex Gaming",
    username: "@alexgaming",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    platforms: ["youtube", "tiktok"],
    categories: ["Gaming", "Tech"],
    followers: 2100000,
    engagementRate: 6.5,
    rating: 4.9,
  },
  {
    id: "5",
    name: "Lisa Fashion",
    username: "@lisafashion",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
    platforms: ["instagram", "tiktok"],
    categories: ["Fashion", "Beauty"],
    followers: 750000,
    engagementRate: 4.2,
    rating: 4.6,
  },
  {
    id: "6",
    name: "Tom Tech",
    username: "@tomtech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tom",
    platforms: ["youtube"],
    categories: ["Tech", "Gaming"],
    followers: 1500000,
    engagementRate: 3.8,
    rating: 4.4,
  },
];

const InfluencerGrid = ({
  influencers = defaultInfluencers,
  onFilterChange = () => {},
  onViewProfile = () => {},
}: InfluencerGridProps) => {
  return (
    <div className="w-full bg-gray-50 p-6 rounded-lg">
      <FilterBar onFilterChange={onFilterChange} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {influencers.map((influencer) => (
          <InfluencerCard
            key={influencer.id}
            name={influencer.name}
            username={influencer.username}
            avatar={influencer.avatar}
            platforms={influencer.platforms}
            categories={influencer.categories}
            followers={influencer.followers}
            engagementRate={influencer.engagementRate}
            rating={influencer.rating}
            onViewProfile={() => onViewProfile(influencer.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default InfluencerGrid;
