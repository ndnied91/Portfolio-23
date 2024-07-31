import React, { useState } from 'react';

import { FaRobot } from 'react-icons/fa';
import ChatUI from './ChatUI';

const ChatBotBtn = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [transcript, setTranscript] = useState([
    {
      user: 'system',
      text: 'Welcome! I am Danny`s virtual assistant and can help you answer any questions you might have!',
    },
  ]);

  return (
    // unhide to show chatbot button
    <section className="fixed bottom-3 right-3">
      <div className="h-fit w-fit bg-info rounded-lg cursor-pointer hover:bg-secondary duration-200 invisible md:visible">
        <p
          className="p-3 text-white text-sm text-center"
          onClick={() => setIsChatVisible(!isChatVisible)}
        >
          <FaRobot className="text-3xl" />
        </p>
      </div>
      {isChatVisible && (
        <div className="fixed bottom-0 md:bottom-3 right-0 md:right-3 rounded-xl">
          <ChatUI
            isChatVisible={isChatVisible}
            setIsChatVisible={setIsChatVisible}
            transcript={transcript}
            setTranscript={setTranscript}
          />
        </div>
      )}
    </section>
  );
};

export default ChatBotBtn;
