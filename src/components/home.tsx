import React, { useState } from "react";
import DashboardHeader from "./layout/DashboardHeader";
import Sidebar from "./layout/Sidebar";
import AnalyticsSection from "./dashboard/AnalyticsSection";
import InfluencerGrid from "./influencers/InfluencerGrid";
import CampaignSection from "./campaigns/CampaignSection";

const Home = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          onNavigate={(path) => console.log(`Navigating to ${path}`)}
        />
        <main
          className={`flex-1 p-6 mt-16 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}
        >
          <div className="max-w-7xl mx-auto space-y-6">
            <AnalyticsSection />
            <InfluencerGrid />
            <CampaignSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
