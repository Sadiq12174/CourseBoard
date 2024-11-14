import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, ChevronDown, ChevronUp, Send } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const HelpSupport = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs: FAQ[] = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on the "Forgot Password" link on the login page. You\'ll receive an email with instructions to create a new password.'
    },
    {
      question: 'Can I download course materials for offline viewing?',
      answer: 'Yes, most course materials can be downloaded for offline viewing. Look for the download icon next to the course content. Note that some video content may be streaming-only.'
    },
    {
      question: 'How do I track my course progress?',
      answer: 'Your course progress is automatically tracked and can be viewed on your dashboard. Each course shows a progress bar indicating your completion percentage.'
    },
    {
      question: 'What should I do if a course video isn\'t playing?',
      answer: 'First, check your internet connection. If the problem persists, try clearing your browser cache or using a different browser. If issues continue, please contact support.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', contactForm);
    // Show success message
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Help & Support</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Get help with your courses and find answers to common questions
        </p>
      </div>

      {/* Quick Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <MessageSquare className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Live Chat</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Available 24/7 for quick help</p>
          <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
            Start Chat
          </button>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <Mail className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Email Support</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Get help via email</p>
          <a href="mailto:support@courseboard.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
            support@courseboard.com
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <Phone className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Phone Support</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Mon-Fri, 9am-5pm EST</p>
          <a href="tel:+1234567890" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
            +1 (234) 567-890
          </a>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-12">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                <button
                  onClick={() => setActiveQuestion(activeQuestion === faq.question ? null : faq.question)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {activeQuestion === faq.question ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {activeQuestion === faq.question && (
                  <div className="pb-4 text-gray-600 dark:text-gray-400 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Contact Support
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;