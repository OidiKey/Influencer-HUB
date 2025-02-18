import React from "react";
import { Tables } from "@/types/supabase";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ContentPortfolioProps {
  content: Tables<"content_items">[];
}

const ContentPortfolio = ({ content }: ContentPortfolioProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Content Portfolio</h2>
        <Button variant="outline">View Full Portfolio</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {content.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg"
          >
            <AspectRatio ratio={1}>
              {item.media_type.includes("video") ? (
                <video
                  src={item.media_url}
                  className="object-cover w-full h-full"
                  controls
                />
              ) : (
                <img
                  src={item.media_url}
                  alt={item.description || "Portfolio item"}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              )}
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPortfolio;
