import { useEffect, useRef } from 'react';
import SenderMessage from './SenderMessage';
import ReceiverMessage from './ReceiverMessage';
import { useGetConversation } from '../hooks/useGetConversation';
import { useMsgContext } from '../context/MessageContext';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import the CSS for nprogress

function ChatContainer() {
  const { loading, getConversation } = useGetConversation();
  const { messages } = useMsgContext();
  const lastResponse = useRef(null);
  const scrollAtMount = useRef(null)

  // Configure NProgress for a slower progress bar
  NProgress.configure({
    showSpinner: false,
    speed: 800,       // Slower animation speed
    trickleSpeed: 200 // Slower trickling speed
  });
  useEffect(() => {
    getConversation();
    scrollAtMount.current?.scrollIntoView({ behavior: 'smooth' });
    scrollAtMount.current = null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loading) {
      NProgress.start(); // Start the loading bar when loading is true
    } else {
      NProgress.done(); // Complete the loading bar when loading is false
    }
  }, [loading]);

  useEffect(() => {
    lastResponse.current?.scrollIntoView({ behavior: 'smooth' });
    lastResponse.current = null;
  }, [messages]);
  // console.log(messages)
  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-100 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 ">
      {messages.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-2">Welcome to Our Chat!</h1>
            <p className="text-gray-600">How can we assist you today? Feel free to start a conversation.</p>
          </div>
        </div>
      ) : (
        messages.map((msg, index) =>
          msg.sender === 'user' ? (


            <div key={index} ref={lastResponse} >
              <SenderMessage message={msg.text} />
            </div>
          ) : (
            <div key={index} ref={scrollAtMount}>
              <ReceiverMessage message={msg.text} />
            </div>
          )
        )
      )}
    </div>
  );
}

export default ChatContainer;
