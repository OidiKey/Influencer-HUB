import React from "react";
import { Instagram, Youtube } from "lucide-react";
import { Tables } from "@/types/supabase";
import { Button } from "@/components/ui/button";

interface SocialMediaSectionProps {
  accounts: Tables<"social_accounts">[];
}

const SocialMediaSection = ({ accounts }: SocialMediaSectionProps) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      case "youtube":
        return <Youtube className="h-5 w-5" />;
      case "tiktok":
        return <span className="font-bold text-sm">TT</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Social Media Accounts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="p-4 border rounded-lg flex items-start gap-3"
          >
            <div className="p-2 bg-muted rounded-md">
              {getPlatformIcon(account.platform)}
            </div>
            <div className="flex-1">
              <div className="font-medium">{account.platform_username}</div>
              <div className="text-sm text-muted-foreground">
                {account.follower_count.toLocaleString()} followers
              </div>
              <div className="text-sm text-muted-foreground">
                {account.engagement_rate}% engagement
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Last post:{" "}
                {new Date(account.last_post_date).toLocaleDateString()}
              </div>
              <Button
                variant="link"
                className="px-0 h-auto text-sm"
                onClick={() => window.open(account.profile_url, "_blank")}
              >
                View Profile
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSection;
