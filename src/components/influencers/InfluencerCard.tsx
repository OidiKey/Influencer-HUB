import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Instagram, Youtube, Star, Users, BarChart3 } from "lucide-react";

interface InfluencerCardProps {
  name?: string;
  username?: string;
  avatar?: string;
  platforms?: Array<"instagram" | "tiktok" | "youtube">;
  categories?: string[];
  followers?: number;
  engagementRate?: number;
  rating?: number;
  onViewProfile?: () => void;
}

const InfluencerCard = ({
  name = "Sarah Johnson",
  username = "@sarahjcreates",
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  platforms = ["instagram", "tiktok"],
  categories = ["Lifestyle", "Fashion"],
  followers = 125000,
  engagementRate = 4.8,
  rating = 4.5,
  onViewProfile = () => console.log("View profile clicked"),
}: InfluencerCardProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-4 w-4" />;
      case "tiktok":
        // Using a text fallback since TikTok icon isn't available in lucide-react
        return <span className="text-xs font-bold">TT</span>;
      case "youtube":
        return <Youtube className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-[384px] bg-white hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground">{username}</p>
            </div>
          </div>
          <div className="flex gap-1">
            {platforms.map((platform) => (
              <TooltipProvider key={platform}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      {getPlatformIcon(platform)}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{platform}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <Users className="h-5 w-5 text-muted-foreground mb-1" />
            <span className="font-semibold">{formatNumber(followers)}</span>
            <span className="text-xs text-muted-foreground">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <BarChart3 className="h-5 w-5 text-muted-foreground mb-1" />
            <span className="font-semibold">{engagementRate}%</span>
            <span className="text-xs text-muted-foreground">Engagement</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="h-5 w-5 text-muted-foreground mb-1" />
            <span className="font-semibold">{rating}</span>
            <span className="text-xs text-muted-foreground">Rating</span>
          </div>
        </div>
        <Button className="w-full" onClick={onViewProfile}>
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default InfluencerCard;
