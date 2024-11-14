import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const UpcomingAssignments = () => {
  const assignments = [
    {
      title: 'React Components Final Project',
      course: 'Web Development',
      dueDate: '2024-03-15',
      timeLeft: '2 days',
      priority: 'high'
    },
    {
      title: 'Data Analysis Report',
      course: 'Data Science',
      dueDate: '2024-03-18',
      timeLeft: '5 days',
      priority: 'medium'
    },
    {
      title: 'Mobile App Wireframes',
      course: 'UI/UX Design',
      dueDate: '2024-03-20',
      timeLeft: '1 week',
      priority: 'low'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400';
      default:
        return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400';
    }
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {assignments.map((assignment, index) => (
        <div 
          key={index}
          className="py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                {assignment.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {assignment.course}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                {assignment.dueDate}
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="h-4 w-4 mr-1" />
                {assignment.timeLeft}
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(assignment.priority)}`}>
                {assignment.priority}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingAssignments;