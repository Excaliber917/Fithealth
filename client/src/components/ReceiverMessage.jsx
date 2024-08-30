import  { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function ReceiverMessage({ message }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (index < message?.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 50); // Adjust the delay to control typing speed
      return () => clearTimeout(timeoutId);
    }
  }, [index, message]);

  const formattedText = displayedText.split('\n').map((part, idx) => (
    <span key={idx}>
      {part.includes('##') ? <b>{part.replace('##', '')}</b> : part}
      <br />
    </span>
  ));

  return (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-300 text-black p-3 rounded-lg w-fit">
        {formattedText}
      </div>
    </div>
  );
}

export default ReceiverMessage;
