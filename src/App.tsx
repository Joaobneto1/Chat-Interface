import React, { useState } from 'react';
import {
  Search,
  Moon,
  Sun,
  Send,
  Sparkles,
  Music,
  Image as ImageIcon,
  Smile,
  ArrowLeft,
  Heart,
  MessageCircle,
  Users,
  Compass,
  Settings,
  Plus,
  X,
  Bell,
  Lock,
  Palette,
  HelpCircle,
  UserPlus,
  Hash,
  Zap,
  AtSign,
  Globe,
  Bookmark
} from 'lucide-react';

function App() {
  const [message, setMessage] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('messages');
  const [showMoodPicker, setShowMoodPicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  
  const contacts = [
    {
      id: 1,
      name: 'Alex Winter',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
      mood: '🎵 Listening to Jazz',
      lastMessage: 'Check out this new track!',
      time: 'now',
      unread: 2,
      status: 'creative'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      mood: '🎨 Creating art',
      lastMessage: 'Here\'s my latest design',
      time: '2m',
      unread: 0,
      status: 'busy'
    },
    {
      id: 3,
      name: 'Marcus Ray',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
      mood: '🏃‍♂️ Morning run',
      lastMessage: 'Almost at my goal!',
      time: '15m',
      unread: 1,
      status: 'active'
    }
  ];

  const discoverChannels = [
    {
      id: 1,
      name: 'Design Community',
      avatar: 'https://images.unsplash.com/photo-1557683316-973673baf926',
      members: '2.4k',
      description: 'A space for designers to share and inspire'
    },
    {
      id: 2,
      name: 'Music Producers',
      avatar: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
      members: '1.8k',
      description: 'Connect with music creators worldwide'
    },
    {
      id: 3,
      name: 'Tech Innovators',
      avatar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      members: '3.2k',
      description: 'Latest in tech and development'
    }
  ];

  const moods = ['🎵', '🎮', '🎨', '📚', '🏃‍♂️', '☕️', '🍜', '💻'];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-400',
      busy: 'bg-red-400',
      creative: 'bg-purple-400'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-400';
  };

  const SettingsScreen = () => (
    <div className={`flex flex-col h-full ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Settings</h2>
      </div>
      <div className="flex-1 p-4 space-y-4">
        <div className={`rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
          <button className={`w-full flex items-center space-x-3 p-4 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
            <Bell className={isDark ? 'text-purple-400' : 'text-purple-500'} />
            <span className={isDark ? 'text-white' : 'text-gray-800'}>Notifications</span>
          </button>
          <button className={`w-full flex items-center space-x-3 p-4 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
            <Lock className={isDark ? 'text-purple-400' : 'text-purple-500'} />
            <span className={isDark ? 'text-white' : 'text-gray-800'}>Privacy</span>
          </button>
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`w-full flex items-center space-x-3 p-4 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <Palette className={isDark ? 'text-purple-400' : 'text-purple-500'} />
            <span className={isDark ? 'text-white' : 'text-gray-800'}>Theme</span>
          </button>
          <button className={`w-full flex items-center space-x-3 p-4 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
            <HelpCircle className={isDark ? 'text-purple-400' : 'text-purple-500'} />
            <span className={isDark ? 'text-white' : 'text-gray-800'}>Help & Support</span>
          </button>
        </div>
      </div>
    </div>
  );

  const ContactsScreen = () => (
    <div className={`flex flex-col h-full ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="flex items-center justify-between">
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Contacts</h2>
          <button className={`p-2 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <UserPlus className={isDark ? 'text-purple-400' : 'text-purple-500'} size={20} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {contacts.map(contact => (
          <div
            key={contact.id}
            onClick={() => {
              setSelectedChat(contact.id);
              setActiveTab('messages');
            }}
            className={`p-4 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} cursor-pointer`}
          >
            <div className="flex items-center space-x-3">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-12 h-12 rounded-2xl object-cover"
              />
              <div>
                <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {contact.name}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {contact.mood}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DiscoverScreen = () => (
    <div className={`flex flex-col h-full ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm space-y-3`}>
        <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Discover</h2>
        <div className={`flex space-x-2 overflow-x-auto py-2`}>
          {['Trending', 'Music', 'Art', 'Tech', 'Gaming'].map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-xl ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              } whitespace-nowrap`}
            >
              <Hash className="inline-block w-4 h-4 mr-1" />
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {discoverChannels.map(channel => (
          <div
            key={channel.id}
            className={`p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
          >
            <div className="flex items-start space-x-3">
              <img
                src={channel.avatar}
                alt={channel.name}
                className="w-16 h-16 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {channel.name}
                  </h3>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Users className="inline-block w-4 h-4 mr-1" />
                    {channel.members}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {channel.description}
                </p>
                <div className="flex space-x-2 mt-3">
                  <button className={`px-3 py-1.5 rounded-xl text-sm ${
                    isDark ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'
                  }`}>
                    Join Channel
                  </button>
                  <button className={`px-3 py-1.5 rounded-xl text-sm ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MainScreen = () => (
    <div className={`flex flex-col h-full ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="flex items-center justify-between">
          <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Bubble
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${isDark ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}
            >
              <Search className={isDark ? 'text-gray-300' : 'text-gray-600'} size={20} />
            </button>
          </div>
        </div>
        {showSearch && (
          <div className="mt-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search messages..."
              className={`w-full p-2 rounded-xl ${
                isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-800 placeholder-gray-500'
              }`}
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className={`flex justify-around py-3 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        {[
          { id: 'messages', icon: MessageCircle },
          { id: 'groups', icon: Users },
          { id: 'discover', icon: Compass },
          { id: 'settings', icon: Settings }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 rounded-xl transition-all ${
              activeTab === tab.id
                ? `${isDark ? 'bg-purple-600' : 'bg-purple-500'} text-white`
                : `${isDark ? 'text-gray-400' : 'text-gray-500'}`
            }`}
          >
            <tab.icon size={24} />
          </button>
        ))}
      </div>

      {/* Mood Picker */}
      {showMoodPicker && (
        <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              How are you feeling?
            </span>
            <button
              onClick={() => setShowMoodPicker(false)}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              <X size={16} />
            </button>
          </div>
          <div className="flex space-x-2 overflow-x-auto py-2">
            {moods.map((mood) => (
              <button
                key={mood}
                className={`p-3 text-xl rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'messages' && (
          <div>
            {contacts.map(contact => (
              <div
                key={contact.id}
                onClick={() => setSelectedChat(contact.id)}
                className={`p-4 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} cursor-pointer transition-colors`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-12 h-12 rounded-2xl object-cover"
                    />
                    <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 ${isDark ? 'border-gray-900' : 'border-white'} ${getStatusColor(contact.status)}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {contact.name}
                      </h3>
                      <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {contact.time}
                      </span>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {contact.mood}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} truncate`}>
                        {contact.lastMessage}
                      </p>
                      {contact.unread > 0 && (
                        <span className="bg-purple-500 text-white text-xs rounded-full px-2 py-0.5">
                          {contact.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'groups' && <ContactsScreen />}
        {activeTab === 'discover' && <DiscoverScreen />}
        {activeTab === 'settings' && <SettingsScreen />}
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => setShowMoodPicker(true)}
        className="fixed bottom-4 right-4 bg-purple-500 text-white rounded-full p-4 shadow-lg active:bg-purple-600 transition-all active:scale-95"
      >
        <Sparkles className="w-6 h-6" />
      </button>
    </div>
  );

  const ChatScreen = () => {
    const contact = contacts.find(c => c.id === selectedChat);
    
    return (
      <div className={`flex flex-col h-full ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Chat Header */}
        <div className={`p-3 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm flex items-center space-x-3`}>
          <button 
            onClick={() => setSelectedChat(null)}
            className={`p-2 rounded-xl ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            <ArrowLeft className={isDark ? 'text-white' : 'text-gray-800'} />
          </button>
          <img
            src={contact?.avatar}
            alt={contact?.name}
            className="w-10 h-10 rounded-2xl object-cover"
          />
          <div className="flex-1">
            <h2 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {contact?.name}
            </h2>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {contact?.mood}
            </p>
          </div>
          <button className={`p-2 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <Heart className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
          </button>
        </div>

        {/* Messages */}
        <div className={`flex-1 p-4 overflow-y-auto ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="space-y-4">
            <div className="flex justify-start">
              <div className={`max-w-[80%] rounded-2xl rounded-tl-none p-3 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-sm`}>
                <p>Hey! How's your creative project going? 🎨</p>
                <span className={`text-xs mt-1 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  09:30
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-purple-500 text-white rounded-2xl rounded-tr-none p-3 shadow-sm">
                <p>Making great progress! Check this out ✨</p>
                <span className="text-xs text-purple-200 mt-1 block">09:31</span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className={`p-3 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`flex items-center space-x-2 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-2xl p-2`}>
            <button className={`p-2 rounded-xl ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>
              <Plus className={isDark ? 'text-gray-300' : 'text-gray-600'} size={20} />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className={`flex-1 bg-transparent outline-none ${isDark ? 'text-white placeholder-gray-400' : 'text-gray-800 placeholder-gray-500'}`}
            />
            <div className="flex items-center space-x-1">
              <button className={`p-2 rounded-xl ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>
                <ImageIcon className={isDark ? 'text-gray-300' : 'text-gray-600'} size={20} />
              </button>
              <button className={`p-2 rounded-xl ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>
                <Music className={isDark ? 'text-gray-300' : 'text-gray-600'} size={20} />
              </button>
              <button className={`p-2 rounded-xl ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>
                <Smile className={isDark ? 'text-gray-300' : 'text-gray-600'} size={20} />
              </button>
              {message.trim() && (
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600"
                >
                  <Send size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen max-w-md mx-auto overflow-hidden">
      {selectedChat ? <ChatScreen /> : <MainScreen />}
    </div>
  );
}

export default App;