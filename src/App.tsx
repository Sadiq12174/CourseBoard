import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  FileText, 
  NotebookPen, 
  User, 
  Bell, 
  HelpCircle, 
  Menu, 
  X
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import CalendarView from './components/Calendar';
import Resources from './components/Resources';
import Notes from './components/Notes';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import HelpSupport from './components/HelpSupport';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
    { name: 'Courses', icon: BookOpen, id: 'courses' },
    { name: 'Calendar', icon: Calendar, id: 'calendar' },
    { name: 'Resources', icon: FileText, id: 'resources' },
    { name: 'Notes', icon: NotebookPen, id: 'notes' },
    { name: 'Profile', icon: User, id: 'profile' },
    { name: 'Notifications', icon: Bell, id: 'notifications' },
    { name: 'Help & Support', icon: HelpCircle, id: 'help' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <Courses />;
      case 'calendar':
        return <CalendarView />;
      case 'resources':
        return <Resources />;
      case 'notes':
        return <Notes />;
      case 'profile':
        return <Profile />;
      case 'notifications':
        return <Notifications />;
      case 'help':
        return <HelpSupport />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <Sidebar 
          navigation={navigation}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Main Content */}
        <div className="lg:ml-64 min-h-screen p-4">
          <div className="animate-fadeIn">
            {renderContent()}
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;