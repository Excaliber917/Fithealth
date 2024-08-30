import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useSendMessage } from '../hooks/useSendMessage';

function ChatInput() {
    const [inputValue, setInputValue] = useState('');


    const { sendMessage } = useSendMessage()
    const handleSend = () => {
        if (inputValue.trim()) {
            //   onSendMessage(inputValue);
            // console.log(inputValue)
            sendMessage(inputValue)
            setInputValue(''); // Clear input after sending
        }
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission if inside a form
            handleSend();
        }
    }

    return (
        <div className='flex flex-col p-3 justify-center bg-gray-100 items-center dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700  '>
            <div className="flex w-full md:px-20 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 ">
                <input
                    type="text"
                    className="flex-1 p-2 border dark:text-white dark:border-pink-500  dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700  shadow-md rounded-l-lg bg-gray-100 focus:outline-none"
                    placeholder="Type your message..."
                    value={inputValue}
                    onKeyDown={handleKey}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    onClick={handleSend}
                    className="p-2 bg-pink-600 flex items-center justify-center  w-12 text-white rounded-r-lg hover:bg-pink-800 focus:outline-none"
                >
                    <FaPaperPlane />
                </button>
            </div>
            <p className='text-slate-600 dark:text-pink-500'>sometimes even Doctors can be wrong !!</p>
        </div>
    );
}

export default ChatInput;
