import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "./ThemeToggle";
import { 
  Menu, 
  X, 
  Code2, 
  BookOpen, 
  Users, 
  Trophy, 
  Settings,
  LogIn,
  Bot
} from "lucide-react";

const navItems = [
  { label: "Learn", icon: BookOpen, href: "#learn" },
  { label: "Practice", icon: Code2, href: "#practice" },
  { label: "Community", icon: Users, href: "#community" },
  { label: "Achievements", icon: Trophy, href: "#achievements" },
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-jarvis-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center glow">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-glow">JARVIS</h1>
              <p className="text-xs text-muted-foreground -mt-1">Code Academy</p>
            </div>
            <Badge variant="secondary" className="ml-2 text-xs">
              AI-Powered
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-jarvis-cyan transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="glass border-jarvis-border hover:bg-jarvis-surface">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="btn-hero">
              Start Learning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass border-jarvis-border"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-jarvis-border/50">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg glass hover:bg-jarvis-surface transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-jarvis-cyan" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" className="glass border-jarvis-border">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button className="btn-hero">
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};