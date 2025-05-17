
import { Link } from "react-router-dom";
import { ArrowDown, User, Search, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import AdminPointsControls from "@/components/AdminPointsControls";
import AddUserForm from "@/components/AddUserForm";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";

const Leaderboard = () => {
  const [leaderboardEntries, setLeaderboardEntries] = React.useState<
    { rank: number; username: string; score: number }[]
  >([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [setLeaderboardEntries, toast]);

  const checkAuthStatus = React.useCallback(async () => {
    try {
      const response = await fetch("https://scriveners.pythonabc.org/api/check-auth", {
        credentials: "include", // Important for cookies
      });
      const data = await response.json();
      setIsAdmin(data.authenticated);
    } catch (error) {
      console.error("Error checking auth status:", error);
      setIsAdmin(false);
    }
  }, [setIsAdmin]);

  useEffect(() => {
    fetchLeaderboardData();
    checkAuthStatus();
  }, [fetchLeaderboardData, checkAuthStatus]);

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex flex-col">
        {/* Header */}
        <Header />

        {/* Leaderboard header */}
        <div className="w-full bg-[#142F38] flex items-center justify-between px-5 py-4 md:px-[90px] md:h-[102px]">
          <div className="text-white font-['Roboto_Condensed'] text-[40px] md:text-[70px] font-bold">
            LEADERBOARD
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="text-white font-['Roboto'] text-[24px] md:text-[40px]">
              Poem
            </div>
            <ArrowDown className="w-4 h-4 md:w-6 md:h-6 text-white opacity-80" />
          </div>
        </div>

        {/* Leaderboard content */}
        <div className="px-5 py-6 md:px-[90px] md:py-10">
          <div className="overflow-x-auto">
            <table className="w-full text-black font-['M_PLUS_1'] text-lg md:text-2xl border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2 px-2">Rank</th>
                  <th className="text-left py-2 px-2">Username</th>
                  <th className="text-left py-2 px-4 md:px-10">Score</th>
                  {isAdmin && <th className="text-left py-2 px-2">Actions</th>}
                </tr>
              </thead>
              <tbody>
                {leaderboardEntries.map((entry) => (
                  <tr key={entry.rank} className="border-b">
                    <td className="py-2 px-2">{entry.rank}</td>
                    <td className="py-2 px-2">{entry.username}</td>
                    <td className="py-2 px-4 md:px-10">{entry.score}</td>
                    {isAdmin && (
                      <td className="py-2 px-2">
                        <AdminPointsControls
                          username={entry.username}
                          onPointsUpdated={fetchLeaderboardData}
                        />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
