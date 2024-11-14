import React, { useState } from 'react';
import { Bell, Check, Trash2, Clock, Calendar, Award } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'message' | 'reminder' | 'achievement';
  timestamp: string;
  read: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Assignment Due Soon',
      message: 'Your Web Development project is due in 2 days',
      type: 'reminder',
      timestamp: '2024-03-14T10:00:00Z',
      read: false
    },
    {
      id: '2',
      title: 'Achievement Unlocked',
      message: 'Congratulations! You\'ve completed 5 courses',
      type: 'achievement',
      timestamp: '2024-03-13T15:30:00Z',
      read: false
    },
    {
      id: '3',
      title: 'New Course Available',
      message: 'Check out our new Machine Learning course',
      type: 'message',
      timestamp: '2024-03-12T09:15:00Z',
      read: true
    }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <Bell className="w-6 h-6 text-blue-500" />;
      case 'reminder':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case 'achievement':
        return <Award className="w-6 h-6 text-green-500" />;
      default:
        return <Bell className="w-6 h-6 text-gray-500" />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Stay updated with your course activities
          </p>
        </div>
        <button
          onClick={markAllAsRead}
          className="px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
        >
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all duration-200 ${
              !notification.read ? 'border-l-4 border-indigo-500' : ''
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {getIcon(notification.type)}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h2 className={`text-lg font-medium ${
                    notification.read ? 'text-gray-600 dark:text-gray-400' : 'text-gray-900 dark:text-white'
                  }`}>
                    {notification.title}
                  </h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(notification.timestamp).toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
                <p className={`mt-1 ${
                  notification.read ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {notification.message}
                </p>
                <div className="mt-3 flex items-center space-x-4">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700"
                    >
                      <Check className="w-4 h-4 mr-1" />
                      Mark as read
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="flex items-center text-sm text-red-600 dark:text-red-400 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;