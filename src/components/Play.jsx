import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

const Play = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm Raunak's AI assistant. Ask me anything about his skills or projects!", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        // Only auto-scroll if the user has started interacting (more than the 1 initial message) or the bot is typing
        if (messages.length > 1 || isTyping) {
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTo({
                    top: chatContainerRef.current.scrollHeight,
                    behavior: "smooth"
                });
            }
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const newUserMsg = { id: Date.now(), text: input, sender: "user" };
        setMessages(prev => [...prev, newUserMsg]);
        setInput("");
        setIsTyping(true);

        setTimeout(async () => {
            // Use standard environment variable, never hardcode API keys
            const apiKey = import.meta.env.VITE_GROQ_API_KEY;

            if (apiKey) {
                try {
                    const systemPrompt = `You are the AI Assistant for Raunak Shahu's portfolio website. Answer logically, concisely, and professionally in a friendly tone. Use emojis occasionally. Keep responses under 3 sentences.
Here is Raunak's information:
- Full-Stack Developer & AI Engineer based in India.
- Frontend: React.js, Tailwind CSS, HTML, JavaScript. Backend: Node.js, Express, MongoDB. Tools: Figma, Git.
- Built 13+ production-deployed projects: 6 Website Clones (Urban Monkey, Titan, Fellow, Cantabil, Drinkolipop, Razer), 6 Web Games (Tic Tac Toe, Color Guessing, Whack-a-mole, Typing test, etc.), React apps (Meal Explorer).
- Education: B.Tech in Computer Engineering at Swaminarayan University (9.86 SGPA).
- Hackathons: Built ViralPulse AI at CRAFTATHON (3rd Place Team Leader).
- Email: raunakshahu.cg@gmail.com, GitHub: github.com/raunak2015
- Availability: Open to full-time roles, freelance, and internships. Available for hire!`;

                    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${apiKey}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            model: "llama-3.1-8b-instant",
                            messages: [
                                { role: "system", content: systemPrompt },
                                { role: "user", content: input }
                            ]
                        })
                    });

                    const data = await response.json();
                    
                    if (response.ok && data?.choices?.length > 0) {
                        const replyText = data.choices[0].message.content;
                        const newBotMsg = { id: Date.now() + 1, text: replyText, sender: "bot" };
                        setMessages(prev => [...prev, newBotMsg]);
                        setIsTyping(false);
                        return; // Exit early
                    } else {
                        throw new Error(data.error?.message || "Invalid API key or API limit reached.");
                    }
                } catch (error) {
                    console.error("Groq API Error:", error);
                    const newBotMsg = { id: Date.now() + 1, text: `API ERROR: ${error.message}`, sender: "bot" };
                    setMessages(prev => [...prev, newBotMsg]);
                    setIsTyping(false);
                    return; // Prevent fallback
                }
            }

            const lowerInput = input.toLowerCase();
            
            // Comprehensive knowledge base about Raunak (Fallback System)
            const knowledgeBase = [
                {
                    keywords: ["who", "about", "introduce", "tell me about", "yourself", "raunak", "who is"],
                    response: "Raunak Shahu is a passionate Full-Stack Developer & AI Engineer from India. He specializes in building scalable web applications, e-commerce platforms, and interactive web games. He's proficient in React, Node.js, JavaScript, and modern web technologies. He's currently available for hire!"
                },
                {
                    keywords: ["skill", "tech", "technology", "stack", "proficient", "know", "language", "framework"],
                    response: "Raunak's tech stack includes:\n• Frontend: React.js, HTML5, CSS3, JavaScript, Tailwind CSS\n• Backend: Node.js, Express.js\n• Database: MongoDB\n• Tools: Git, Figma, Three.js\n• Other: REST APIs, Responsive Design, AI Integration\nHe's always learning and expanding his skills!"
                },
                {
                    keywords: ["project", "work", "built", "portfolio", "made", "create"],
                    response: "Raunak has built 13+ production-deployed projects across 3 categories:\n\n🛒 Website Clones (6): Urban Monkey, Titan, Fellow, Cantabil, Drinkolipop, Razer\n🎮 Games (6): Tic Tac Toe, Click Counter, Color Guessing, Whack-a-Mole, Typing Speed Test, Memory Flip\n⚛️ React Apps: Meal Explorer\n\nAll projects are live on Netlify! Check the Work section above."
                },
                {
                    keywords: ["contact", "email", "reach", "hire", "connect", "touch"],
                    response: "You can reach Raunak at:\n📧 Email: raunakshahu.cg@gmail.com\n💻 GitHub: github.com/raunak2015\n\nHe's currently available for hire! Use the contact form below or scroll down to the Contact section."
                },
                {
                    keywords: ["clone", "website clone", "e-commerce", "urban", "titan", "fellow", "cantabil", "olipop", "razer"],
                    response: "Raunak has built 6 stunning website clones:\n1. Urban Monkey — Streetwear e-commerce\n2. Titan — Premium watch storefront\n3. Fellow — Coffee gear shop\n4. Cantabil — Fashion retail\n5. Drinkolipop — Olipop soda brand\n6. Razer — Gaming peripherals\n\nEach demonstrates strong CSS, layout, and responsive design skills."
                },
                {
                    keywords: ["game", "play", "tic", "click", "color", "whack", "typing", "memory", "flip"],
                    response: "Raunak has built 6 interactive web games:\n1. 🎯 Tic Tac Toe — Classic strategy game\n2. 🖱️ Click Counter — Reflex speed test\n3. 🎨 Color Guessing — RGB identification challenge\n4. 🔨 Whack-a-Mole — Arcade classic\n5. ⌨️ Typing Speed Test — WPM tracker\n6. 🃏 Memory Flip — Card matching game\n\nAll built with vanilla JS and modern web tech!"
                },
                {
                    keywords: ["react", "meal", "explorer", "food", "recipe"],
                    response: "The Meal Explorer is Raunak's React.js project — a dynamic application that lets users discover, search, and explore meal recipes using a public API. It demonstrates his skills in React, API integration, state management, and responsive UI design."
                },
                {
                    keywords: ["education", "study", "college", "university", "degree", "school", "qualification"],
                    response: "Raunak is a Computer Engineering student with a strong foundation in programming, data structures, algorithms, and web development. He balances academics with hands-on project development, shipping production-grade software alongside his studies."
                },
                {
                    keywords: ["experience", "intern", "job", "work experience", "career"],
                    response: "Raunak has hands-on experience building 13+ production-deployed web projects. He specializes in frontend development, e-commerce clones, and interactive web applications. He's currently looking for opportunities as a Full-Stack Developer or Frontend Engineer."
                },
                {
                    keywords: ["github", "repo", "repository", "code", "source", "open source"],
                    response: "Raunak's GitHub: github.com/raunak2015\n\nHe has public repositories for all his projects including:\n• Individual repos for each website clone\n• A 'Games' monorepo with 5 web games\n• react-meal-explorer for his React project\n\nFeel free to check out his code!"
                },
                {
                    keywords: ["available", "hire", "freelance", "open", "looking", "opportunity", "job"],
                    response: "Yes! ✅ Raunak is currently available for hire. He's open to:\n• Full-time positions (Frontend/Full-Stack Developer)\n• Freelance projects\n• Internship opportunities\n• Collaboration on open-source\n\nReach out at raunakshahu.cg@gmail.com!"
                },
                {
                    keywords: ["resume", "cv", "download"],
                    response: "Raunak's key highlights for his resume:\n• 13+ deployed projects across web clones, games & React apps\n• Proficient in React, Node.js, MongoDB, Tailwind CSS\n• Strong UI/UX design skills\n• Experience with Git, Figma, and modern dev tools\n\nContact him at raunakshahu.cg@gmail.com for his full resume!"
                },
                {
                    keywords: ["frontend", "front-end", "ui", "ux", "design", "css", "tailwind", "html"],
                    response: "Raunak is a skilled frontend developer with expertise in:\n• React.js for building dynamic SPAs\n• Tailwind CSS for utility-first styling\n• Responsive Design across all devices\n• CSS animations and transitions\n• Figma for design prototyping\n\nHis 6 website clones showcase his pixel-perfect implementation abilities."
                },
                {
                    keywords: ["backend", "server", "node", "express", "api", "database", "mongo"],
                    response: "On the backend, Raunak works with:\n• Node.js & Express.js for server development\n• MongoDB for database management\n• REST API design and integration\n• Authentication & data handling\n\nHe builds full-stack applications from frontend to database."
                },
                {
                    keywords: ["hobby", "interest", "fun", "free time", "passion"],
                    response: "Beyond coding, Raunak is passionate about:\n• 🎮 Building web games\n• 🤖 Exploring AI and machine learning\n• 🎨 UI/UX design\n• 💻 Open source contribution\n• 📚 Learning new technologies\n\nHis love for coding shows in his diverse project portfolio!"
                },
                {
                    keywords: ["location", "where", "city", "country", "based", "from", "live"],
                    response: "Raunak is based in India. He's open to both remote and on-site opportunities. He can collaborate across time zones and has experience working independently on deployed projects."
                },
                {
                    keywords: ["hello", "hi", "hey", "sup", "greet", "good morning", "good evening"],
                    response: "Hey there! 👋 Welcome to Raunak's portfolio! I'm his AI assistant. Feel free to ask me about his skills, projects, education, experience, or anything else. I'm here to help!"
                },
                {
                    keywords: ["thank", "thanks", "bye", "goodbye", "see you"],
                    response: "You're welcome! 😊 If you have any more questions about Raunak, feel free to ask. Don't forget to check out his projects in the Work section and reach out via the Contact form if interested!"
                },
                {
                    keywords: ["deploy", "netlify", "host", "live", "website"],
                    response: "All of Raunak's projects are deployed live on Netlify! Each project card in the Work section has a 'Live ↗' button that takes you directly to the deployed version. He follows modern deployment practices with CI/CD."
                },
                {
                    keywords: ["strength", "best", "unique", "special", "stand out"],
                    response: "What makes Raunak stand out:\n• 📦 13+ production-deployed projects (not just tutorials)\n• 🎯 Full-stack capability from UI to database\n• 🚀 Ships real products, not just demos\n• 🎨 Strong eye for design and aesthetics\n• 📈 Constantly learning and growing\n\nHe builds to ship, not just to learn."
                },
            ];

            // Find best matching response
            let bestMatch = null;
            let bestScore = 0;

            for (const entry of knowledgeBase) {
                let score = 0;
                for (const keyword of entry.keywords) {
                    if (lowerInput.includes(keyword)) {
                        score += keyword.length; // Longer keyword matches = more specific
                    }
                }
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = entry.response;
                }
            }

            const replyText = bestMatch || "That's a great question! I don't have a pre-programmed answer for that yet. If you want this assistant to be truly smart, you can plug in a Groq API key!";

            const newBotMsg = { id: Date.now() + 1, text: replyText, sender: "bot" };
            setMessages(prev => [...prev, newBotMsg]);
            setIsTyping(false);
        }, 1200);
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

                <div ref={chatContainerRef} className="h-[400px] overflow-y-auto p-6 flex flex-col gap-4 scrollbar-thin" id="chat-container">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`flex items-start gap-3 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === "user" ? "bg-indigo-600" : "bg-[#915eff]"}`}>
                                    {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className={`p-3 rounded-2xl text-sm whitespace-pre-line ${msg.sender === "user"
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
                    {/* Reference div removed as scrolling handles directly via container now */}
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
