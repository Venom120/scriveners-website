
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Plus, Minus } from "lucide-react";

interface AdminPointsControlsProps {
  username: string;
  onPointsUpdated: () => void;
}

const AdminPointsControls = ({ username, onPointsUpdated }: AdminPointsControlsProps) => {
  const [points, setPoints] = useState(5);
  const { toast } = useToast();

  const updatePoints = async (pointsToAdd: number) => {
    try {
      const response = await fetch("https://scriveners.pythonabc.org/api/update-points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          points: pointsToAdd,
        }),
        credentials: "include", // Important for cookies
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Points updated",
          description: `Updated points for ${username}`,
        });
        onPointsUpdated();
      } else {
        toast({
          title: "Failed to update points",
          description: data.detail || "An error occurred",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to the server",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => updatePoints(-points)}
        className="h-8 w-8"
      >
        <Minus className="h-4 w-4" />
      </Button>
      
      <Input
        type="number"
        value={points}
        onChange={(e) => setPoints(parseInt(e.target.value) || 0)}
        className="w-14 h-8 text-center"
        min="0"
      />
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => updatePoints(points)}
        className="h-8 w-8"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default AdminPointsControls;
