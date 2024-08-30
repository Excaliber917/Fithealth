


// eslint-disable-next-line react/prop-types
function SenderMessage({message}) {
  
  return (
    <div className="flex justify-end mb-4">
    <div className="bg-pink-500 dark:bg-pink-600 text-white font-semibold p-3 rounded-lg max-w-xs">
      {message}
    </div>
  </div>
  )
}

export default SenderMessage
