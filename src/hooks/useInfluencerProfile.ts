import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Tables } from "@/types/supabase";

type InfluencerProfile = Tables<"influencers"> & {
  social_accounts: Tables<"social_accounts">[];
  campaign_applications: Tables<"campaign_applications">[];
  content_items: Tables<"content_items">[];
};

export const useInfluencerProfile = (id?: string) => {
  const [data, setData] = useState<InfluencerProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) return;

      try {
        const { data: influencer, error: influencerError } = await supabase
          .from("influencers")
          .select("*")
          .eq("id", id)
          .single();

        if (influencerError) throw influencerError;

        const [{ data: accounts }, { data: applications }, { data: content }] =
          await Promise.all([
            supabase
              .from("social_accounts")
              .select("*")
              .eq("influencer_id", id),
            supabase
              .from("campaign_applications")
              .select("*")
              .eq("influencer_id", id),
            supabase.from("content_items").select("*").eq("influencer_id", id),
          ]);

        setData({
          ...influencer,
          social_accounts: accounts || [],
          campaign_applications: applications || [],
          content_items: content || [],
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  return { data, isLoading, error };
};
