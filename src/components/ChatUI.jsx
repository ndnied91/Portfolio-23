import React, { useState, useRef, useEffect } from 'react';
import { IoCloseSharp, IoSend } from 'react-icons/io5';
import { FaRobot } from 'react-icons/fa';
import { LuMinimize2 } from 'react-icons/lu';
import { BsFillPersonFill } from 'react-icons/bs';
import { customFetch } from '../utils/chatbotMsgFetch';

const ChatUI = ({ setIsChatVisible, transcript, setTranscript }) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [transcript]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const capitalizedValue =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setText(capitalizedValue);
  };

  const addToTranscript = async () => {
    if (text.trim() !== '') {
      setTranscript((prevTranscript) => [
        ...prevTranscript,
        { user: 'human', text },
      ]);

      setIsTyping(true);
      try {
        const { data } = await customFetch.post('/chat', {
          question: text,
        });

        setTranscript((prevTranscript) => [
          ...prevTranscript,
          { user: 'robot', text: data.answer },
        ]);

        setIsTyping(false);
        setText('');
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      addToTranscript();
      setText('');
    }
  };

  const closeChat = () => {
    setIsChatVisible(false);
    setTranscript([
      {
        user: 'system',
        text: "Welcome! I am Danny's virtual assistant and can help you answer any questions you might have!",
      },
    ]);
  };

  return (
    <div className="flex flex-col h-screen md:h-[30rem] w-full md:w-[20rem] rounded-lg shadow-lg">
      <div className="flex justify-between items-center bg-gray-500 text-accent-content p-3 rounded-t-lg">
        <IoCloseSharp
          className="text-3xl cursor-pointer text-gray-100 hover:scale-[1.05] duration-100"
          onClick={closeChat}
        />
        <LuMinimize2
          className="text-2xl text-gray-100 cursor-pointer hover:scale-[1.05] duration-100"
          onClick={() => setIsChatVisible(false)}
        />
      </div>
      <div className="flex flex-col flex-grow bg-slate-100 relative">
        <div
          ref={chatContainerRef}
          className="flex-grow px-4 md:px-2 py-2 overflow-y-auto text-gray-800 mb-14"
        >
          {transcript.map(({ user, text }, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 mt-2 ${
                user === 'human'
                  ? 'text-right text-gray-900 flex-row-reverse'
                  : 'text-red-800'
              }`}
            >
              {user === 'human' ? (
                <BsFillPersonFill className="text-xl" />
              ) : (
                <FaRobot className="text-xl" />
              )}
              <p
                className={`w-full max-w-20 text-md md:text-sm ${
                  user === 'human'
                    ? 'bg-blue-100 p-2 rounded-lg'
                    : 'bg-gray-100 p-2 rounded-lg'
                }`}
              >
                {text}
                <span className="pl-1 italic text-gray-500">
                  <a
                    href="https://github.com/ndnied91/Chatbot-GPT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check out the Github repo here
                  </a>
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full flex border-t-2 border-gray-300 bg-slate-100">
          <div className="absolute bottom-14 md:bottom-12 italic text-gray-700 pl-2 pb-0.5 md:text-sm">
            {isTyping && <p>Virtual assistant is typing..</p>}
          </div>
          <div className="flex w-full">
            <input
              value={text}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="w-full bg-slate-100 h-14 md:h-12 font-semibold pl-3 text-md md:text-xs focus:outline-none text-gray-900"
              placeholder="Type your question here..."
            />
            <button
              className="h-14 w-14 md:h-12 md:w-12 bg-slate-200 flex items-center justify-center border-l-2 border-gray-300"
              onClick={addToTranscript}
              disabled={text.length <= 0}
            >
              <IoSend
                className={`text-3xl md:text-xl text-black ${
                  text.length > 0 ? 'opacity-100' : 'opacity-20'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
