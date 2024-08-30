import { createContext, useContext, useState } from "react";
const MessageContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useMsgContext = ()=>{
    return useContext(MessageContext)
}

// eslint-disable-next-line react/prop-types
export const MessageContextProvider = ({ children }) => {

    const [messages, setMessages] = useState([])
    return <MessageContext.Provider value={{ messages, setMessages }}>
        {children}
    </MessageContext.Provider>
}