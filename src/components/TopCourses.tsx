import React from 'react';

const TopCourses = () => {
  const courses = [
    { name: 'Web Development', progress: 85, color: 'bg-blue-600' },
    { name: 'Data Science', progress: 72, color: 'bg-purple-600' },
    { name: 'UI/UX Design', progress: 64, color: 'bg-pink-600' },
    { name: 'Mobile Development', progress: 58, color: 'bg-yellow-600' },
  ];

  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div key={course.name} className="group">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {course.name}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {course.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div 
              className={`h-full ${course.color} transition-all duration-500 group-hover:brightness-110`}
              style={{ 
                width: `${course.progress}%`,
                animation: 'grow-width 1s ease-out'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCourses;