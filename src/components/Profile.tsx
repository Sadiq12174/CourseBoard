import React, { useState } from 'react';
import { Camera, Mail, Book, Award, Edit2, Save } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    bio: 'Passionate learner | Web Developer | Data Science Enthusiast',
    coursesCompleted: 8,
    totalHours: 156,
    achievements: 12
  });

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Fast Learner',
      description: 'Completed 5 courses in the first month',
      date: '2024-02-15',
      icon: '🚀'
    },
    {
      id: '2',
      title: 'Perfect Score',
      description: 'Achieved 100% in Web Development Basics',
      date: '2024-03-01',
      icon: '🏆'
    },
    {
      id: '3',
      title: 'Helping Hand',
      description: 'Helped 20+ students in discussion forums',
      date: '2024-03-10',
      icon: '🤝'
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Show save confirmation
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
        <div className="relative h-48 rounded-t-lg bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="absolute -bottom-12 left-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800"
              />
              <button className="absolute bottom-0 right-0 p-1 bg-white dark:bg-gray-800 rounded-full shadow">
                <Camera className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-16 pb-6 px-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-0"
                  />
                ) : (
                  profile.name
                )}
              </h1>
              <p className="mt-1 text-gray-500 dark:text-gray-400 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {profile.email}
              </p>
            </div>
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </>
              ) : (
                <>
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </>
              )}
            </button>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {isEditing ? (
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:border-indigo-500 focus:ring-0"
              />
            ) : (
              profile.bio
            )}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <Book className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
            <div className="ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Courses Completed</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{profile.coursesCompleted}</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <Award className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
            <div className="ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Hours</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{profile.totalHours}</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <Award className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
            <div className="ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Achievements</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{profile.achievements}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <span className="text-2xl mr-4">{achievement.icon}</span>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {new Date(achievement.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;