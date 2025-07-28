import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, X } from "lucide-react";

const FloatingRegister = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="relative">
        <Button
          //variant="accent"
          size="lg"
          className="bg-accent/70 text-accent-foreground hover:bg-accent/60 rounded-full shadow-glow"
          asChild
        >
          <Link to="/register" className="flex items-center gap-3 px-6 py-4">
            <GraduationCap className="w-6 h-6" />
            <span className="font-semibold">Register Now</span>
          </Link>
        </Button>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs hover:bg-destructive/80 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default FloatingRegister;