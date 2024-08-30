
import ChatContainer from "../components/ChatContainer";
import ChatInput from "../components/ChatInput";

const MentalFitnessChatbot = () => {
    return (
        <div className="flex flex-col h-screen dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 ">
            {/* ChatContainer will take up the available space */}
            <ChatContainer />

            {/* ChatInput will be sticky at the bottom */}
            <div className="sticky bottom-0">
                <ChatInput />
            </div>
        </div>
    );
};

export default MentalFitnessChatbot;
