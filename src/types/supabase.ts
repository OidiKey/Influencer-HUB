export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      campaign_applications: {
        Row: {
          applied_date: string
          campaign_name: string
          company_name: string
          created_at: string
          id: string
          influencer_id: string | null
          status: string
          updated_at: string
        }
        Insert: {
          applied_date?: string
          campaign_name: string
          company_name: string
          created_at?: string
          id?: string
          influencer_id?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          applied_date?: string
          campaign_name?: string
          company_name?: string
          created_at?: string
          id?: string
          influencer_id?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_applications_influencer_id_fkey"
            columns: ["influencer_id"]
            isOneToOne: false
            referencedRelation: "influencers"
            referencedColumns: ["id"]
          },
        ]
      }
      content_items: {
        Row: {
          campaign_id: string | null
          created_at: string
          description: string | null
          id: string
          influencer_id: string | null
          media_type: string
          media_url: string
        }
        Insert: {
          campaign_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          influencer_id?: string | null
          media_type: string
          media_url: string
        }
        Update: {
          campaign_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          influencer_id?: string | null
          media_type?: string
          media_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_items_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_items_influencer_id_fkey"
            columns: ["influencer_id"]
            isOneToOne: false
            referencedRelation: "influencers"
            referencedColumns: ["id"]
          },
        ]
      }
      influencers: {
        Row: {
          audience_demographics: Json | null
          avatar_url: string | null
          avg_engagement_rate: number | null
          bio: string | null
          campaigns_completed: number | null
          categories: string[] | null
          created_at: string
          id: string
          is_verified: boolean | null
          name: string
          total_followers: number | null
          updated_at: string
          username: string
        }
        Insert: {
          audience_demographics?: Json | null
          avatar_url?: string | null
          avg_engagement_rate?: number | null
          bio?: string | null
          campaigns_completed?: number | null
          categories?: string[] | null
          created_at?: string
          id?: string
          is_verified?: boolean | null
          name: string
          total_followers?: number | null
          updated_at?: string
          username: string
        }
        Update: {
          audience_demographics?: Json | null
          avatar_url?: string | null
          avg_engagement_rate?: number | null
          bio?: string | null
          campaigns_completed?: number | null
          categories?: string[] | null
          created_at?: string
          id?: string
          is_verified?: boolean | null
          name?: string
          total_followers?: number | null
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      social_accounts: {
        Row: {
          created_at: string
          engagement_rate: number | null
          follower_count: number | null
          id: string
          influencer_id: string | null
          last_post_date: string | null
          platform: string
          platform_username: string
          profile_url: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          engagement_rate?: number | null
          follower_count?: number | null
          id?: string
          influencer_id?: string | null
          last_post_date?: string | null
          platform: string
          platform_username: string
          profile_url?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          engagement_rate?: number | null
          follower_count?: number | null
          id?: string
          influencer_id?: string | null
          last_post_date?: string | null
          platform?: string
          platform_username?: string
          profile_url?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_accounts_influencer_id_fkey"
            columns: ["influencer_id"]
            isOneToOne: false
            referencedRelation: "influencers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
