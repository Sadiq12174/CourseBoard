import React from 'react';
import { 
  BarChart3, 
  Clock, 
  Calendar as CalendarIcon,
  BookOpen,
  TrendingUp 
} from 'lucide-react';
import StatsCard from './StatsCard';
import ProgressChart from './ProgressChart';
import UpcomingAssignments from './UpcomingAssignments';
import TopCourses from './TopCourses';

const Dashboard = () => {
  const stats = [
    { 
      title: 'Total Courses', 
      value: '12', 
      change: '+2 this month',
      icon: BookOpen,
      trend: 'up' 
    },
    { 
      title: 'Hours Studied', 
      value: '156', 
      change: '+23 this week',
      icon: Clock,
      trend: 'up' 
    },
    { 
      title: 'Completion Rate', 
      value: '87%', 
      change: '+5% vs last month',
      icon: TrendingUp,
      trend: 'up' 
    },
    { 
      title: 'Upcoming Tests', 
      value: '3', 
      change: 'Next in 2 days',
      icon: CalendarIcon,
      trend: 'neutral' 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, Alex! 👋
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Here's what's happening with your courses today.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
            transition-colors duration-200">
            Add New Course
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Study Progress
            </h2>
            <select className="text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <ProgressChart />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Course Completion
            </h2>
            <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            <TopCourses />
          </div>
        </div>
      </div>

      {/* Upcoming Assignments */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Upcoming Assignments
            </h2>
            <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
              View Calendar
            </button>
          </div>
          <UpcomingAssignments />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;