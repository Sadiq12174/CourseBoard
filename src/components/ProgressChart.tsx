import React from 'react';

const ProgressChart = () => {
  // This would typically use a charting library like Chart.js or Recharts
  // For now, we'll create a simple visual representation
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const values = [65, 45, 75, 55, 85, 35, 60];

  const max = Math.max(...values);

  return (
    <div className="relative h-64">
      <div className="flex h-full items-end space-x-2">
        {days.map((day, index) => (
          <div key={day} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-indigo-200 dark:bg-indigo-900/50 rounded-t transition-all duration-500 hover:bg-indigo-300 dark:hover:bg-indigo-800"
              style={{ 
                height: `${(values[index] / max) * 100}%`,
                animation: `grow 1s ease-out ${index * 0.1}s`
              }}
            />
            <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;