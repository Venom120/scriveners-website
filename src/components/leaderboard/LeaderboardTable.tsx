
import React from "react";
import AdminPointsControls from "@/components/AdminPointsControls";
import { useAdmin } from "@/contexts/AdminContext";

interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
}

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
  onRefresh: () => Promise<void>;
}

const LeaderboardTable = ({ entries, onRefresh }: LeaderboardTableProps) => {
  const { isAdmin } = useAdmin();

  return (
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
            {entries.map((entry) => (
              <tr key={entry.rank} className="border-b">
                <td className="py-2 px-2">{entry.rank}</td>
                <td className="py-2 px-2">{entry.username}</td>
                <td className="py-2 px-4 md:px-10">{entry.score}</td>
                {isAdmin && (
                  <td className="py-2 px-2">
                    <AdminPointsControls
                      username={entry.username}
                      onPointsUpdated={onRefresh}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
