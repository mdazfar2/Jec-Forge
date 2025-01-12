import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface Player {
  name: string;
  role: string;
}

interface PlayerFieldsProps {
  players: Player[];
  setPlayers: (players: Player[]) => void;
  error?: string;
}

export default function PlayerFields({ players, setPlayers, error }: PlayerFieldsProps) {
  const addPlayer = () => {
    if (players.length < 11) {
      setPlayers([...players, { name: '', role: '' }]);
    }
  };

  const removePlayer = (index: number) => {
    if (players.length > 1) {
      setPlayers(players.filter((_, i) => i !== index));
    }
  };

  const updatePlayer = (index: number, field: keyof Player, value: string) => {
    const updatedPlayers = players.map((player, i) => {
      if (i === index) {
        return { ...player, [field]: value };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  return (
    <div className="space-y-6 mb-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Player Details</h3>
        <button
          type="button"
          onClick={addPlayer}
          disabled={players.length >= 11}
          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Player
        </button>
      </div>

      <div className="space-y-4">
        {players.map((player, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Player Name"
                value={player.name}
                onChange={(e) => updatePlayer(index, 'name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex-1">
              <select
                value={player.role}
                onChange={(e) => updatePlayer(index, 'role', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Role</option>
                <option value="batsman">Batsman</option>
                <option value="bowler">Bowler</option>
                <option value="all-rounder">All-rounder</option>
                <option value="wicket-keeper">Wicket Keeper</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => removePlayer(index)}
              disabled={players.length <= 1}
              className="mt-1 p-2 text-gray-400 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Min: 6 players, Max: 11 players
      </p>
    </div>
  );
}