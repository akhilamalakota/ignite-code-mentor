import { useState } from "react";
import { Bot, X, Send, Mic, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Message = {
  type: "ai" | "user";
  content: string;
  timestamp: Date;
};

export const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "ai" as const,
      content: "Hello! I'm JARVIS, your AI coding assistant. How can I help you learn today?",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      type: "user" as const,
      content: message,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: "ai" as const,
        content: "I understand you're asking about programming. Let me help you with that! Would you like me to explain a concept, debug some code, or create a practice exercise?",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full btn-hero glow-strong shadow-2xl hover:scale-110 transition-all duration-300"
        >
          {isOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Bot className="w-8 h-8 animate-pulse" />
          )}
        </Button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] max-w-[90vw]">
          <Card className="h-full glass border-jarvis-border shadow-2xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">JARVIS AI</h3>
                    <Badge variant="secondary" className="text-xs">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                      Online
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleVoice}
                  className={isListening ? "text-jarvis-cyan" : ""}
                >
                  <Volume2 className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col h-full p-4">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.type === "user"
                          ? "bg-gradient-primary text-white ml-4"
                          : "jarvis-panel mr-4"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask JARVIS anything..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="glass border-jarvis-border"
                />
                <Button
                  size="icon"
                  onClick={toggleVoice}
                  variant="outline"
                  className={`glass border-jarvis-border ${
                    isListening ? "bg-jarvis-cyan text-white" : ""
                  }`}
                >
                  <Mic className="w-4 h-4" />
                </Button>
                <Button size="icon" onClick={handleSendMessage} className="btn-hero">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};