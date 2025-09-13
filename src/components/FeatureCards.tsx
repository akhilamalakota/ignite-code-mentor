import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Brain, 
  Zap, 
  BookOpen, 
  Target, 
  Users, 
  Shield, 
  Sparkles,
  Bot,
  Gamepad2,
  TrendingUp,
  Award
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Multi-Language Code Editor",
    description: "Advanced IDE with syntax highlighting, auto-completion, and real-time collaboration for 50+ programming languages.",
    badge: "VS Code-like",
    color: "jarvis-cyan"
  },
  {
    icon: Brain,
    title: "AI Error Detection",
    description: "Intelligent code analysis that identifies bugs, suggests fixes, and explains programming concepts in real-time.",
    badge: "AI-Powered",
    color: "jarvis-blue"
  },
  {
    icon: Zap,
    title: "Instant Debugging",
    description: "Lightning-fast debugging with step-by-step explanations and automated solution suggestions.",
    badge: "Real-time",
    color: "jarvis-glow"
  },
  {
    icon: BookOpen,
    title: "Interactive Tutorials",
    description: "Hands-on learning experiences with animated explanations and progressive skill building.",
    badge: "Kid-Friendly",
    color: "jarvis-cyan"
  },
  {
    icon: Gamepad2,
    title: "Gamified Learning",
    description: "Earn points, unlock achievements, and compete with friends while learning to code.",
    badge: "Fun & Engaging",
    color: "jarvis-blue"
  },
  {
    icon: Bot,
    title: "Personal AI Tutor",
    description: "24/7 AI assistant that adapts to your learning style and provides personalized guidance.",
    badge: "Always Available",
    color: "jarvis-glow"
  },
  {
    icon: Target,
    title: "Skill Assessment",
    description: "Regular coding challenges and automated testing to track your progress and identify areas for improvement.",
    badge: "Progress Tracking",
    color: "jarvis-cyan"
  },
  {
    icon: Users,
    title: "Collaborative Coding",
    description: "Team up with other learners, share projects, and learn from the community.",
    badge: "Social Learning",
    color: "jarvis-blue"
  },
  {
    icon: Shield,
    title: "Safe Learning Environment",
    description: "Child-safe platform with content moderation and parental controls for young learners.",
    badge: "Family-Safe",
    color: "jarvis-glow"
  },
  {
    icon: TrendingUp,
    title: "Career Guidance",
    description: "Industry insights, career path recommendations, and job preparation resources.",
    badge: "Career-Ready",
    color: "jarvis-cyan"
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Earn recognized certificates and showcase your skills to potential employers.",
    badge: "Industry-Recognized",
    color: "jarvis-blue"
  },
  {
    icon: Sparkles,
    title: "AI-Generated Exercises",
    description: "Unlimited practice problems created by AI based on your skill level and interests.",
    badge: "Unlimited Content",
    color: "jarvis-glow"
  }
];

export const FeatureCards = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of programming education with cutting-edge AI technology
            and interactive learning tools designed for all skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="jarvis-panel hover:glow-strong transition-all duration-300 cursor-pointer group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs px-2 py-1">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="jarvis-panel max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4 text-glow">Ready to Start Your Coding Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of learners who are already coding with AI assistance.
              Your personal JARVIS is waiting to help you become a programming master.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero px-8 py-3 rounded-lg font-semibold">
                Start Free Trial
              </button>
              <button className="glass border border-jarvis-border px-8 py-3 rounded-lg font-semibold hover:bg-jarvis-surface transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};