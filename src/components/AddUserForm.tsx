
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

interface AddUserFormProps {
  onUserAdded: () => void;
}

const AddUserForm = ({ onUserAdded }: AddUserFormProps) => {
  const [username, setUsername] = useState("");
  const [initialPoints, setInitialPoints] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast({
        title: "Error",
        description: "Username cannot be empty",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://scriveners.pythonabc.org/api/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          points: initialPoints,
        }),
        credentials: "include", // Important for cookies
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: `User ${username} added successfully`,
        });
        setUsername("");
        setInitialPoints(0);
        onUserAdded();
      } else {
        toast({
          title: "Failed to add user",
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4 p-4 border rounded-md">
      <h3 className="text-lg font-medium">Add New User</h3>
      
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">Username</Label>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="col-span-3"
          placeholder="Enter username"
          required
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="initial-points" className="text-right">Initial Points</Label>
        <Input
          id="initial-points"
          type="number"
          value={initialPoints}
          onChange={(e) => setInitialPoints(parseInt(e.target.value) || 0)}
          className="col-span-3"
          min="0"
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add User"}
        </Button>
      </div>
    </form>
  );
};

export default AddUserForm;
