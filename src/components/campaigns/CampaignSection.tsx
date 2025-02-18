import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CampaignTable from "./CampaignTable";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";

interface CampaignSectionProps {
  onCreateCampaign?: () => void;
  onFilterCampaigns?: () => void;
}

const CampaignSection = ({
  onCreateCampaign = () => console.log("Create campaign clicked"),
  onFilterCampaigns = () => console.log("Filter campaigns clicked"),
}: CampaignSectionProps) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Campaign Management</CardTitle>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            onClick={onFilterCampaigns}
          >
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button
            size="sm"
            className="flex items-center gap-1"
            onClick={onCreateCampaign}
          >
            <Plus className="h-4 w-4" />
            Create Campaign
          </Button>
        </div>
      </CardHeader>
      <Tabs defaultValue="active" className="p-6">
        <TabsList className="mb-4">
          <TabsTrigger value="active">Active Campaigns</TabsTrigger>
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <CampaignTable
            campaigns={[
              {
                id: "1",
                name: "Summer Collection Launch",
                platform: "Instagram",
                status: "active",
                startDate: "2024-06-01",
                endDate: "2024-06-30",
                budget: 50000,
                influencers: 25,
              },
              {
                id: "2",
                name: "Brand Awareness Campaign",
                platform: "TikTok",
                status: "active",
                startDate: "2024-05-15",
                endDate: "2024-07-15",
                budget: 75000,
                influencers: 30,
              },
            ]}
          />
        </TabsContent>

        <TabsContent value="pending">
          <CampaignTable
            campaigns={[
              {
                id: "3",
                name: "Back to School Campaign",
                platform: "TikTok",
                status: "pending",
                startDate: "2024-08-01",
                endDate: "2024-08-31",
                budget: 35000,
                influencers: 15,
              },
            ]}
          />
        </TabsContent>

        <TabsContent value="completed">
          <CampaignTable
            campaigns={[
              {
                id: "4",
                name: "Holiday Special",
                platform: "YouTube",
                status: "completed",
                startDate: "2023-12-01",
                endDate: "2023-12-31",
                budget: 75000,
                influencers: 10,
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default CampaignSection;
