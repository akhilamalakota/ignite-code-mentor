import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Code2, Zap, Brain, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="particles">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Holographic background */}
      <div className="absolute inset-0 hologram-bg opacity-30" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* AI Badge */}
        <Badge variant="secondary" className="mb-6 px-6 py-2 text-lg glass glow">
          <Bot className="w-5 h-5 mr-2 text-jarvis-cyan" />
          AI-Powered Learning Assistant
        </Badge>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            JARVIS
          </span>
          <br />
          <span className="text-4xl md:text-6xl text-foreground">
            Code Academy
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the future of programming education with our AI-powered platform. 
          Learn, practice, and master coding with intelligent assistance from your personal JARVIS.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: Code2, text: "Multi-Language Editor" },
            { icon: Brain, text: "AI Error Detection" },
            { icon: Zap, text: "Real-time Debugging" },
            { icon: Sparkles, text: "Interactive Tutorials" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 glass rounded-full"
            >
              <feature.icon className="w-5 h-5 text-jarvis-cyan" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="btn-hero text-lg px-8 py-6">
            <Bot className="w-6 h-6 mr-2" />
            Start Learning with AI
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass border-jarvis-border hover:bg-jarvis-surface">
            <Code2 className="w-6 h-6 mr-2" />
            Explore Code Editor
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Programming Languages" },
            { number: "1000+", label: "Interactive Exercises" },
            { number: "24/7", label: "AI Assistant" },
            { number: "∞", label: "Learning Possibilities" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-jarvis-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating UI elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="jarvis-panel w-48 h-32 animate-pulse-glow">
          <div className="text-xs text-jarvis-cyan mb-2">SYSTEM STATUS</div>
          <div className="space-y-1">
            <div className="h-2 bg-jarvis-cyan rounded-full w-full"></div>
            <div className="h-2 bg-jarvis-cyan/60 rounded-full w-3/4"></div>
            <div className="h-2 bg-jarvis-cyan/40 rounded-full w-1/2"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 hidden lg:block">
        <div className="jarvis-panel w-40 h-40 flex items-center justify-center">
          <Bot className="w-16 h-16 text-jarvis-cyan animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};