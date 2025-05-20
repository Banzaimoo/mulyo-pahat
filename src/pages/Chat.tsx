
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Mulyo Pahat Support',
      lastMessage: 'Thank you for your inquiry about the Teak Side Chair.',
      time: '10:30 AM',
      unread: 2,
      avatar: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png'
    },
    {
      id: 2,
      name: 'Custom Order Team',
      lastMessage: 'We can definitely help with your custom dining table request.',
      time: 'Yesterday',
      unread: 0,
      avatar: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png'
    }
  ]);
  
  const [activeConversation, setActiveConversation] = useState(1);
  
  const [messages, setMessages] = useState([
    { id: 1, senderId: 1, text: 'Hello, how can I help you today?', time: '10:25 AM' },
    { id: 2, senderId: 2, text: 'I\'m interested in the Teak Side Chair, but I have a question about the dimensions.', time: '10:27 AM' },
    { id: 3, senderId: 1, text: 'Of course! The Teak Side Chair measures 22" wide, 20" deep, and has a seat height of 18".', time: '10:28 AM' },
    { id: 4, senderId: 1, text: 'Would you like me to send you the full product specifications?', time: '10:30 AM' }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const messageListRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim()) {
      const newId = messages.length + 1;
      const newMsg = {
        id: newId,
        senderId: 2, // user's ID
        text: newMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMsg]);
      setNewMessage('');
      
      // Simulate reply after a delay
      setTimeout(() => {
        const replyMsg = {
          id: newId + 1,
          senderId: 1, // seller's ID
          text: "Thank you for your message. I'll send you the full specifications right away.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(currentMessages => [...currentMessages, replyMsg]);
      }, 2000);
    }
  };
  
  return (
    <div className="min-h-screen bg-sand">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif text-wood-darker mb-8">Messages</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Conversation List */}
            <div className="border-r border-wood-light">
              <div className="p-4 border-b border-wood-light">
                <h2 className="font-medium text-wood-darker">Conversations</h2>
              </div>
              
              <div className="overflow-y-auto h-[70vh]">
                {conversations.map(conversation => (
                  <button
                    key={conversation.id}
                    className={`w-full text-left p-4 border-b border-wood-light flex items-center space-x-4 hover:bg-wood-light/20 transition-colors ${activeConversation === conversation.id ? 'bg-wood-light/30' : ''}`}
                    onClick={() => setActiveConversation(conversation.id)}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={conversation.avatar} 
                          alt={conversation.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {conversation.unread > 0 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-wood-darker truncate">{conversation.name}</h3>
                        <span className="text-xs text-wood-medium whitespace-nowrap ml-2">{conversation.time}</span>
                      </div>
                      <p className={`text-sm truncate ${conversation.unread > 0 ? 'font-medium text-wood-darker' : 'text-wood-medium'}`}>
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Chat Window */}
            <div className="col-span-3 flex flex-col h-[70vh]">
              {/* Chat Header */}
              <div className="px-6 py-4 border-b border-wood-light flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src={conversations.find(c => c.id === activeConversation)?.avatar} 
                      alt={conversations.find(c => c.id === activeConversation)?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-wood-darker">
                    {conversations.find(c => c.id === activeConversation)?.name}
                  </h3>
                </div>
                <div>
                  <Link to="/product/2" className="text-wood-dark hover:text-wood-darker">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Messages */}
              <div ref={messageListRef} className="flex-grow p-6 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderId === 2 ? 'justify-end' : ''}`}
                    >
                      <div
                        className={`max-w-[75%] rounded-lg p-4 ${
                          message.senderId === 2
                            ? 'bg-wood-dark text-white rounded-br-none'
                            : 'bg-wood-light/50 text-wood-darker rounded-bl-none'
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className={`text-xs mt-1 ${message.senderId === 2 ? 'text-white/70' : 'text-wood-medium'}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t border-wood-light">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-grow input-field"
                  />
                  <button
                    type="button"
                    className="p-2 text-wood-dark hover:text-wood-darker"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
