import React, { useState, useRef, useEffect } from 'react';
import { IoCloseSharp, IoSend } from 'react-icons/io5';
import { FaRobot } from 'react-icons/fa';
import { LuMinimize2 } from 'react-icons/lu';
import { BsFillPersonFill } from 'react-icons/bs';
import { customFetch } from '../utils/chatbotMsgFetch';
import { FiGithub } from 'react-icons/fi';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

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
      // Make API call to FastAPI
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
    <div className="h-screen md:h-[30rem] md:w-[20rem] flex flex-col rounded-lg shadow-lg">
      <div className="flex justify-between items-center bg-gray-500 text-accent-content p-3 rounded-t-lg">
        <div className="relative">
          <Tippy
            animation={'fade'}
            placement={'right'}
            duration={300}
            content={
              <p className="text-xs italic">
                Click here to check <br /> out the source code
              </p>
            }
          >
            <div>
              <a
                href="https://github.com/ndnied91/Chatbot-GPT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="text-3xl cursor-pointer text-error hover:scale-[1.05] duration-100" />
              </a>
            </div>
          </Tippy>
        </div>
        <div className="flex items-center gap-2">
          <IoCloseSharp
            className="text-3xl cursor-pointer text-gray-100 hover:scale-[1.05] duration-100"
            onClick={closeChat}
          />
          <LuMinimize2
            className="text-2xl text-gray-100 cursor-pointer hover:scale-[1.05] duration-100"
            onClick={() => setIsChatVisible(false)}
          />
        </div>
      </div>

      <div className="bg-slate-100 flex flex-grow flex-col h-max rounded-b-lg pb-18 md:mb-0">
        <div
          ref={chatContainerRef}
          className="pl-4 pr-4 md:pl-2 md:pr-2 flex-grow text-gray-800 h-0 md:max-h-[24rem] overflow-scroll mb-2"
        >
          {transcript.map(({ user, text }, index) => {
            if (index === 0) {
              return (
                <div key={index} className="flex items-center gap-2">
                  <div>
                    <FaRobot className="text-3xl text-red-800" />
                  </div>
                  <div className="italic text-lg md:text-xs mt-2 text-red-800">
                    {text}
                  </div>
                </div>
              );
            }
            return (
              <div key={index}>
                <div
                  className={` ${
                    user === 'human'
                      ? 'flex items-center gap-2 mt-3 text-right text-gray-900 flex-row-reverse'
                      : 'flex items-center gap-2 mt-3 text-gray-600 p-2 rounded-md'
                  } `}
                >
                  {user === 'human' ? (
                    <BsFillPersonFill className="text-xl" />
                  ) : (
                    <FaRobot className="text-xl" />
                  )}
                  <p className="w-full max-w-20 text-md md:text-sm ">{text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full flex border-t-2 border-gray-300 rounded-b-md bg-slate-100">
          <div className="absolute bottom-14 md:bottom-12 rounded-br-lg italic text-gray-400 pl-2 pb-0.5 md:text-sm">
            {isTyping && <p>Virtual assistant is typing..</p>}
          </div>
          <div className="flex w-full">
            <input
              value={text}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="w-full bg-slate-100 h-14 md:h-12 font-semibold pl-3 flex-1 text-md md:text-xs rounded-b-lg focus:outline-none text-gray-900"
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
