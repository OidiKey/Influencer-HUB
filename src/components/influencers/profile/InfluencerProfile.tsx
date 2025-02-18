import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import ProfileHeader from "./ProfileHeader";
import SocialMediaSection from "./SocialMediaSection";
import PerformanceSection from "./PerformanceSection";
import ContentPortfolio from "./ContentPortfolio";
import JobHistory from "./JobHistory";
import DemographicsSection from "./DemographicsSection";
import AdminActions from "./AdminActions";
import { useInfluencerProfile } from "@/hooks/useInfluencerProfile";

const InfluencerProfile = () => {
  const { id } = useParams();
  const { data: profile, isLoading, error } = useInfluencerProfile(id);

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  if (error || !profile) {
    return <div className="p-8">Error loading profile</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 space-y-6">
      <Card className="p-6">
        <ProfileHeader profile={profile} />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <SocialMediaSection accounts={profile.social_accounts} />
          </Card>

          <Card className="p-6">
            <PerformanceSection influencerId={profile.id} />
          </Card>

          <Card className="p-6">
            <ContentPortfolio content={profile.content_items} />
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <DemographicsSection demographics={profile.audience_demographics} />
          </Card>

          <Card className="p-6">
            <JobHistory applications={profile.campaign_applications} />
          </Card>

          <AdminActions
            influencerId={profile.id}
            isVerified={profile.is_verified}
          />
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfile;
