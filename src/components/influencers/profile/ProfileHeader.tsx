import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, BarChart3, CheckCircle2 } from "lucide-react";
import { Tables } from "@/types/supabase";

interface ProfileHeaderProps {
  profile: Tables<"influencers">;
}

const ProfileHeader = ({ profile }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
      <Avatar className="w-24 h-24">
        <AvatarImage src={profile.avatar_url || ""} alt={profile.name} />
        <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          {profile.is_verified && (
            <CheckCircle2 className="h-5 w-5 text-blue-500" />
          )}
        </div>
        <p className="text-muted-foreground">@{profile.username}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {profile.categories?.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="text-center">
          <Users className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
          <div className="font-semibold">
            {profile.total_followers.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">Followers</div>
        </div>
        <div className="text-center">
          <BarChart3 className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
          <div className="font-semibold">{profile.avg_engagement_rate}%</div>
          <div className="text-sm text-muted-foreground">Engagement</div>
        </div>
        <div className="text-center">
          <CheckCircle2 className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
          <div className="font-semibold">{profile.campaigns_completed}</div>
          <div className="text-sm text-muted-foreground">Campaigns</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
