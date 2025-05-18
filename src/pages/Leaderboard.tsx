
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AddUserForm from "@/components/AddUserForm";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/layout/Header";
import { useAdmin } from "@/contexts/AdminContext";
import LeaderboardHeader from "@/components/leaderboard/LeaderboardHeader";
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";

const Leaderboard = () => {
  const [leaderboardEntries, setLeaderboardEntries] = React.useState<
    { rank: number; username: string; score: number }[]
  >([]);
  const { isAdmin, checkAuthStatus } = useAdmin();
  const { toast } = useToast();

  const fetchLeaderboardData = React.useCallback(async () => {
    try {
      const response = await fetch("https://scriveners.pythonabc.org/api/poem");
      const data = await response.json();
      setLeaderboardEntries(data.poem);
    } catch (error) {
      console.error("Error fetching poem data:", error);
      toast({
        title: "Error",
        description: "Failed to load leaderboard data",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    fetchLeaderboardData();
    // We'll check auth status when the component mounts to ensure admin state is current
    checkAuthStatus();
  }, [fetchLeaderboardData, checkAuthStatus]);

  return (
    <div className="w-full min-h-screen">
        <div className="flex flex-col">
          {/* Header */}
          <Header />

          {/* Leaderboard header */}
          <LeaderboardHeader />

          {/* Leaderboard table */}
          <LeaderboardTable 
            entries={leaderboardEntries} 
            onRefresh={fetchLeaderboardData} 
          />
        </div>

        {/* Admin controls */}
        {isAdmin && (
          <div className="px-5 py-4 md:px-[90px] bg-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#142F38]">Admin Controls</h2>
            </div>
            <AddUserForm onUserAdded={fetchLeaderboardData} />
          </div>
        )}
    </div>
  );
};

export default Leaderboard;
