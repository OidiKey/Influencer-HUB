import React from "react";
import MetricsCard from "./MetricsCard";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AnalyticsSectionProps {
  metrics?: {
    followers: { value: number; change: number };
    engagement: { value: number; change: number };
    posts: { value: number; change: number };
  };
  trends?: Array<{
    date: string;
    followers: number;
    engagement: number;
    posts: number;
  }>;
}

const defaultMetrics = {
  followers: { value: 1250000, change: 5.2 },
  engagement: { value: 8.2, change: 2.1 },
  posts: { value: 45, change: -1.5 },
};

const defaultTrends = [
  { date: "Jan", followers: 1000000, engagement: 7.5, posts: 40 },
  { date: "Feb", followers: 1050000, engagement: 7.8, posts: 42 },
  { date: "Mar", followers: 1100000, engagement: 8.0, posts: 38 },
  { date: "Apr", followers: 1150000, engagement: 8.1, posts: 41 },
  { date: "May", followers: 1200000, engagement: 8.2, posts: 43 },
  { date: "Jun", followers: 1250000, engagement: 8.2, posts: 45 },
];

const AnalyticsSection = ({
  metrics = defaultMetrics,
  trends = defaultTrends,
}: AnalyticsSectionProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const FollowerTrendChart = () => (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart
        data={trends}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="followers"
          stroke="#2563eb"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const EngagementTrendChart = () => (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart
        data={trends}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="engagement"
          stroke="#16a34a"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const PostsTrendChart = () => (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart
        data={trends}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="posts"
          stroke="#dc2626"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <Card className="w-full p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Analytics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricsCard
          title="Total Followers"
          value={formatNumber(metrics.followers.value)}
          change={metrics.followers.change}
          chartComponent={<FollowerTrendChart />}
        />
        <MetricsCard
          title="Engagement Rate"
          value={`${metrics.engagement.value}%`}
          change={metrics.engagement.change}
          chartComponent={<EngagementTrendChart />}
        />
        <MetricsCard
          title="Posts This Month"
          value={metrics.posts.value}
          change={metrics.posts.change}
          chartComponent={<PostsTrendChart />}
        />
      </div>
    </Card>
  );
};

export default AnalyticsSection;
