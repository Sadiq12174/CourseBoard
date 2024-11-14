import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down' | 'neutral';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon: Icon, trend }) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600 dark:text-green-400';
      case 'down':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
          <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        </div>
      </div>
      <p className={`mt-4 text-sm ${getTrendColor()}`}>
        {change}
      </p>
    </div>
  );
};

export default StatsCard;