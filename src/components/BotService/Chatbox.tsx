import React, { useState } from 'react';
import Emoji from './Emoji';


const Chatbox = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [emoji, setEmoji] = useState(false);
    const handleSend = () => {
        if (message.trim()) {
            setMessages([...messages, message]);
            setMessage('');
        }
    };
    const handleEmojiClick = (emoji) => {
        setMessage((prev) => prev + emoji);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 w-96 h-[600px]">
            <div className="bg-white shadow-md p-4">

                <div className="box-header">
                    <div className="w-[55px] pull-right avatar">
                        <span title="" data-container="body" rel="tooltip" data-placement="auto left" data-original-title="PSDFILE1988">
                            <img src="https://cdn.goftino.com/static/assets/img/profile.png" alt="avatar" width="40" height="40" />
                        </span>
                    </div>
                    <div className="pull-right box-title">
                        <div className="title-name">
                            Support
                        </div>
                        <div className="title-text">
                            Please ask you any question
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto relative">
                {messages.map((msg, index) => (
                    <div key={index} className="flex items-start mb-4">
                        <div className="mr-2">
                            <img
                                src="https://via.placeholder.com/40" // Replace with user avatar  
                                alt="User"
                                className="rounded-full"
                            />
                        </div>
                        <div className="bg-green-500 text-white p-3 rounded-lg rounded-br-none">
                            {msg}
                        </div>
                    </div>
                ))}
                <div className='absolute inset-x-0 bottom-0 left-0 bg-white duration-500 ease-in-out data-closed:opacity-0' style={{ display: emoji ? "block" : "none" }}>
                    <Emoji />
                </div>
            </div>
            <div className="p-2 border-t bg-white flex items-center">
                <div className="btn btn-simple btn-file fileinput-new relative overflow-hidden ">
                    <span className="h-10 w-10">
                        <svg fill="#999999" height="24" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path>
                        </svg>
                    </span>
                    <input className='absolute top-0 right-0 w-full h-full m-0 text-[23px] cursor-pointer opacity-0 direction-ltr' id="upload-input" type="file" name="uploads[]" />
                </div>
                <div className='mr-2' onClick={() => setEmoji(!emoji)}>
                    <svg fill="#bababa" height="24" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,21c-4.9,0-9-4.1-9-9c0-5,4.1-9,9-9s9,4.3,9,9 C21,16.7,16.8,21,12,21z M15.5,11c0.8,0,1.5-0.7,1.5-1.5S16.3,8,15.5,8S14,8.7,14,9.5S14.7,11,15.5,11z M8.5,11 c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5S7.7,11,8.5,11z M12,17.5c2.3,0,4.3-1.5,5.1-3.5H6.9C7.7,16,9.7,17.5,12,17.5z"></path>
                    </svg>
                </div>
                <textarea
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border rounded-md p-2 flex-1 h-14 resize-none"
                />
                <button
                    onClick={handleSend}
                    className="bg-green-500 text-white rounded-md p-2 ml-2 hover:bg-green-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbox;  