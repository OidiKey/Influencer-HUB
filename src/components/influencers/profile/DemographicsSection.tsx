import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface DemographicsSectionProps {
  demographics: {
    age_range: { [key: string]: number };
    gender: { [key: string]: number };
    location: { [key: string]: number };
  };
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const DemographicsSection = ({ demographics }: DemographicsSectionProps) => {
  const genderData = Object.entries(demographics.gender || {}).map(
    ([name, value]) => ({
      name,
      value,
    }),
  );

  const ageData = Object.entries(demographics.age_range || {}).map(
    ([name, value]) => ({
      name,
      value,
    }),
  );

  const locationData = Object.entries(demographics.location || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, value]) => ({
      name,
      value,
    }));

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Audience Demographics</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Gender Distribution</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Age Distribution</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {ageData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Top Locations</h3>
          <div className="space-y-2">
            {locationData.map((location) => (
              <div
                key={location.name}
                className="flex items-center justify-between"
              >
                <span className="text-sm">{location.name}</span>
                <span className="text-sm text-muted-foreground">
                  {location.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicsSection;
