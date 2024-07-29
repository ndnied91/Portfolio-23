import React, { useState, useRef, useEffect } from 'react';
import { IoCloseSharp, IoSend } from 'react-icons/io5';
import { FaRobot } from 'react-icons/fa';
import { LuMinimize2 } from 'react-icons/lu';
import { BsFillPersonFill } from 'react-icons/bs';
import { customFetch } from '../utils/chatbotMsgFetch';

const ChatUI = ({ setIsChatVisible, transcript, setTranscript }) => {
  const [text, setText] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [transcript]);

  const handleInputChange = (e) => setText(e.target.value);

  const addToTranscript = async () => {
    if (text.trim() !== '') {
      setTranscript((prevTranscript) => [
        ...prevTranscript,
        { user: 'human', text },
      ]);

      // make api call to fast api
      const { data } = await customFetch.post('/chat', {
        question: text,
      });

      setTranscript((prevTranscript) => [
        ...prevTranscript,
        { user: 'robot', text: data.answer },
      ]);

      setText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setText('');
      addToTranscript();
    }
  };

  const closeChat = () => {
    setIsChatVisible(false);
    setTranscript([
      {
        user: 'system',
        text: 'Welcome! I am Danny`s virtual assistant and can help you answer any questions you might have!',
      },
    ]);
  };

  return (
    <div className="h-[100vh] md:h-[24rem] w-full md:w-[16rem] flex flex-col rounded-md overflow-hidden">
      <div className="flex justify-between items-center bg-slate-200 p-3 rounded-t-md">
        <IoCloseSharp
          className="text-3xl text-gray-800 cursor-pointer"
          onClick={closeChat}
        />
        <LuMinimize2
          className="text-2xl text-gray-800 cursor-pointer"
          onClick={() => setIsChatVisible(false)}
        />
      </div>
      <div className="bg-white flex flex-grow flex-col">
        <div
          ref={chatContainerRef}
          className="pl-4 pr-4 md:pl-2 md:pr-2 flex-grow text-gray-800 md:max-h-[17.6rem] overflow-scroll"
        >
          <div className="flex items-center gap-1">
            <div className="overflow-scroll">
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
                          ? 'flex items-center gap-2 mt-3 text-right flex-row-reverse'
                          : 'flex items-center gap-2 mt-3 bg-gray-100 p-2 rounded-md mb-2'
                      } `}
                    >
                      {user === 'human' ? (
                        <BsFillPersonFill className="text-xl" />
                      ) : (
                        <FaRobot className="text-xl" />
                      )}
                      <p className="w-full max-w-20 text-md md:text-sm">
                        {text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex border-t border-gray-300 rounded-b-md">
          <input
            value={text}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="w-full bg-white h-14 md:h-12 border border-gray-300 pl-2 text-md md:text-xs focus:outline-none text-gray-900"
            placeholder="Type your question here..."
          />
          <button
            className="h-14 w-14 md:h-12 md:w-12 bg-gray-200 flex items-center justify-center border-l border-gray-300"
            onClick={addToTranscript}
            disabled={text.length <= 0}
          >
            <IoSend
              className={`text-3xl md:text-xl text-black ${
                text.length > 0 ? 'opacity-100' : 'opacity-50'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
