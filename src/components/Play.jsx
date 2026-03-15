import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

const Play = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm Raunak's AI assistant. Ask me anything about his skills or projects!", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = () => {
        if (!input.trim()) return;

        const newUserMsg = { id: Date.now(), text: input, sender: "user" };
        setMessages(prev => [...prev, newUserMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            let replyText = "That's an interesting question! I recommend checking out the About section for more details.";

            const lowerInput = input.toLowerCase();
            if (lowerInput.includes("skill") || lowerInput.includes("tech")) {
                replyText = "Raunak is proficient in React, Node.js, Python, and AI development. He loves building scalable web apps.";
            } else if (lowerInput.includes("contact") || lowerInput.includes("email")) {
                replyText = "You can contact him via the form below or email him directly!";
            } else if (lowerInput.includes("project")) {
                replyText = "He has built several cool projects including an AI Code Assistant and E-Commerce platforms. Check out the Work section!";
            }

            const newBotMsg = { id: Date.now() + 1, text: replyText, sender: "bot" };
            setMessages(prev => [...prev, newBotMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black-100 rounded-2xl border border-gray-800 overflow-hidden shadow-card"
            >
                <div className="bg-tertiary p-4 border-b border-gray-800 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 font-mono text-sm text-gray-400">assistant.exe</span>
                </div>

                <div className="h-[400px] overflow-y-auto p-6 flex flex-col gap-4 scrollbar-thin">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`flex items-start gap-3 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === "user" ? "bg-indigo-600" : "bg-[#915eff]"}`}>
                                    {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className={`p-3 rounded-2xl text-sm ${msg.sender === "user"
                                        ? "bg-indigo-600 text-white rounded-tr-none"
                                        : "bg-[#1d1836] text-gray-200 rounded-tl-none border border-gray-700"
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#915eff] flex items-center justify-center">
                                    <Bot size={16} />
                                </div>
                                <div className="bg-[#1d1836] p-3 rounded-2xl rounded-tl-none border border-gray-700 flex gap-1">
                                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-tertiary border-t border-gray-800 flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 bg-black-200 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#915eff] transition-all"
                    />
                    <button
                        onClick={handleSend}
                        className="bg-[#915eff] p-3 rounded-xl hover:bg-[#7e4bd6] transition-colors"
                    >
                        <Send size={20} color="white" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Play;
