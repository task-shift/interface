import { useState, useRef, useEffect } from 'react';
import { SiEbox } from "react-icons/si";
import { IoSendSharp } from "react-icons/io5";
import Header from '../components/header/header';
import { Link } from "react-router-dom";

export default function Index() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'agent',
      text: "Hello! welocome to taskshift. i'm An AI agent for managing tasks and product management."
    },
    {
      type: 'agent',
      text: 'Skip the hassle of navigating through multiple interfaces—just chat with me! I can help you assign tasks, create projects, and set up departments effortlessly.'
    },
    {
      type: 'agent',
      text: 'Another amazing thing? I can help you gather feedback, interact with your team, track updates from your team, and streamline product management—all through your communication channels. No extra effort, just seamless collaboration!'
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { type: 'user', text: inputMessage }
    ];
    setMessages(newMessages);
    setInputMessage('');

    // Simulate AI response after a short delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { 
          type: 'agent', 
          text: "Let's get you started! You can sign up or login to get started."
        },
        {
          type: 'agent',
          text: 'Enter into the dragon',
          buttons: [
            { text: 'Sign Up', link: '/signup', variant: 'primary' },
            { text: 'Login', link: '/signin', variant: 'outline-primary' }
          ]
        }
      ]);
    }, 1000);
  };

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .bounce-animation {
            animation: bounce 2s ease-in-out infinite;
          }
        `}
      </style>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div 
          className="card shadow" 
          style={{ 
            width: isFlipped ? "90%" : "200px", 
            height: isFlipped ? "80vh" : "200px", 
            maxWidth: isFlipped ? "800px" : "200px",
            maxHeight: isFlipped ? "600px" : "200px",
            perspective: "1000px", 
            cursor: isFlipped ? "default" : "pointer",
            borderRadius: "15px",
            border: "none",
            transition: "width 0.6s, height 0.6s, max-width 0.6s, max-height 0.6s"
          }}
          onClick={!isFlipped ? handleFlip : undefined}
        >
          <div 
            style={{ 
              position: "relative", 
              width: "100%", 
              height: "100%", 
              transition: "transform 0.6s", 
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
            }}
          >
            <div 
              className="d-flex justify-content-center align-items-center flex-column" 
              style={{ 
                position: "absolute", 
                width: "100%", 
                height: "100%", 
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                borderRadius: "15px"
              }}
            >
              <div className="bounce-animation mb-3">
                <SiEbox color="#2466FF" size={64} />
              </div>
              <button 
                className="btn btn-outline-primary" 
                onClick={handleFlip}
                style={{ borderRadius: "20px", fontSize: "0.9rem" }}
              >
                Get Started
              </button>
            </div>
            <div 
              style={{ 
                position: "absolute", 
                width: "100%", 
                height: "100%", 
                backfaceVisibility: "hidden", 
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                backgroundColor: "#f8f9fa",
                borderRadius: "15px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div className="card-header py-3 d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid #dee2e6", color: "#2466FF", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
                <div className="ms-3">
                  <SiEbox color="#2466FF" size={24} className="me-2" />
                  <span>task</span><span className="fw-bold">shift</span>
                </div>
                <button 
                  className="btn btn-sm text-muted me-2" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFlip();
                  }}
                  style={{ borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  ✕
                </button>
              </div>
              
              <div className="chat-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div className="chat-messages" style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                  {messages.map((message, index) => (
                    message.type === 'agent' ? (
                      <div key={index} className="message agent-message mb-3 d-flex align-items-start">
                        <div className="me-2" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <SiEbox size={20} color="#2466FF" />
                        </div>
                        <div className="bg-white p-3" style={{ maxWidth: '70%', borderRadius: '15px 15px 15px 0' }}>
                          <p className="mb-0">{message.text}</p>
                          {message.buttons && (
                            <div className="mt-3 d-flex flex-wrap gap-2">
                              {message.buttons.map((button, btnIndex) => (
                                <Link key={btnIndex} to={button.link} className={`btn btn-${button.variant} btn-sm`} style={{ borderRadius: '20px' }}>
                                  {button.text}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div key={index} className="message user-message mb-3 d-flex justify-content-end align-items-start">
                        <div className="bg-primary text-white p-3" style={{ maxWidth: '70%', borderRadius: '15px 15px 0 15px' }}>
                          <p className="mb-0">{message.text}</p>
                        </div>
                        <div className="ms-2" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span>👤</span>
                        </div>
                      </div>
                    )
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="chat-input p-3" style={{ borderTop: '1px solid #eee', flexShrink: 0 }}>
                  <form onSubmit={handleSendMessage} className="d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your message..."
                      style={{ borderRadius: '20px 0 0 20px' }}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ borderRadius: '0 20px 20px 0' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <IoSendSharp />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}