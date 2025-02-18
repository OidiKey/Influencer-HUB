import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MetricsCardProps {
  title?: string;
  value?: string | number;
  change?: number;
  chartComponent?: React.ReactNode;
}

const MetricsCard = ({
  title = "Engagement Rate",
  value = "8.2%",
  change = 2.1,
  chartComponent = <div className="h-24 w-full bg-gray-100 rounded-md" />,
}: MetricsCardProps) => {
  const getTrendIcon = (change: number) => {
    if (change > 0) return <ArrowUpRight className="w-4 h-4 text-green-500" />;
    if (change < 0) return <ArrowDownRight className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return "text-green-500";
    if (change < 0) return "text-red-500";
    return "text-gray-500";
  };

  return (
    <Card className="w-full bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">
          {title}
        </CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">{value}</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center gap-1">
                <div className={`flex items-center ${getTrendColor(change)}`}>
                  {getTrendIcon(change)}
                  <span className="text-sm">{Math.abs(change)}%</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{change >= 0 ? "Increase" : "Decrease"} from last period</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>{chartComponent}</CardContent>
    </Card>
  );
};

export default MetricsCard;
