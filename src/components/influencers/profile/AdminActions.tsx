import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Send, Shield } from "lucide-react";

interface AdminActionsProps {
  influencerId: string;
  isVerified: boolean;
}

const AdminActions = ({ influencerId, isVerified }: AdminActionsProps) => {
  const handleVerify = async () => {
    // Implement verification logic
  };

  const handleInvite = () => {
    // Implement campaign invitation logic
  };

  const handleDownload = () => {
    // Implement profile download logic
  };

  return (
    <div className="space-y-4">
      <Button className="w-full" onClick={handleInvite}>
        <Send className="mr-2 h-4 w-4" />
        Send Campaign Invitation
      </Button>

      <Button
        variant={isVerified ? "secondary" : "default"}
        className="w-full"
        onClick={handleVerify}
      >
        <Shield className="mr-2 h-4 w-4" />
        {isVerified ? "Verified Profile" : "Mark as Verified"}
      </Button>

      <Button variant="outline" className="w-full" onClick={handleDownload}>
        <Download className="mr-2 h-4 w-4" />
        Download Profile
      </Button>
    </div>
  );
};

export default AdminActions;
