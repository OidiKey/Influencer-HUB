import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PerformanceSectionProps {
  influencerId: string;
}

const PerformanceSection = ({ influencerId }: PerformanceSectionProps) => {
  const [timeRange, setTimeRange] = useState("7");

  // Mock data - replace with actual API call
  const data = [
    { date: "Week 1", followers: 100000, engagement: 4.5, posts: 5 },
    { date: "Week 2", followers: 102000, engagement: 4.7, posts: 6 },
    { date: "Week 3", followers: 105000, engagement: 4.2, posts: 4 },
    { date: "Week 4", followers: 108000, engagement: 4.8, posts: 7 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Performance Metrics</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 3 months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="followers"
              stroke="#8884d8"
              name="Followers"
            />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="#82ca9d"
              name="Engagement Rate"
            />
            <Line
              type="monotone"
              dataKey="posts"
              stroke="#ffc658"
              name="Posts"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceSection;
