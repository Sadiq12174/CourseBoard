import React, { useState } from 'react';
import { Search, Plus, Tag, Folder, Save, X } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  course: string;
  tags: string[];
  lastModified: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'React Components Overview',
      content: 'Components are the building blocks of React applications. They can be functional or class-based...',
      course: 'Web Development',
      tags: ['react', 'components', 'frontend'],
      lastModified: '2024-03-10'
    },
    {
      id: '2',
      title: 'Data Analysis Methods',
      content: 'Key statistical methods for data analysis include regression, clustering, and hypothesis testing...',
      course: 'Data Science',
      tags: ['statistics', 'analysis', 'methods'],
      lastModified: '2024-03-12'
    }
  ]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSaveNote = () => {
    if (selectedNote) {
      setNotes(notes.map(note => 
        note.id === selectedNote.id ? selectedNote : note
      ));
      // Show save animation here
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Notes</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Organize and manage your course notes
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
          <Plus className="w-5 h-5 mr-2" />
          New Note
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            {/* Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Notes List */}
            <div className="space-y-2">
              {notes.map(note => (
                <button
                  key={note.id}
                  onClick={() => setSelectedNote(note)}
                  className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                    selectedNote?.id === note.id
                      ? 'bg-indigo-50 dark:bg-indigo-900/50'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <h3 className="font-medium text-gray-900 dark:text-white truncate">
                    {note.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {note.course}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {note.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          {selectedNote ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <input
                  type="text"
                  value={selectedNote.title}
                  onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value })}
                  className="text-xl font-bold bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white w-full"
                />
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleSaveNote}
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </button>
                </div>
              </div>
              <textarea
                value={selectedNote.content}
                onChange={(e) => setSelectedNote({ ...selectedNote, content: e.target.value })}
                className="w-full h-[calc(100vh-300px)] p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent resize-none"
              />
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                Select a note to edit or create a new one
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;