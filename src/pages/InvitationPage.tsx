import React from 'react';
import InvitationCard from '@/invitation/InvitationCard';
import BackgroundAnimation from '@/invitation/BackgroundAnimation';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleRegister = () => {
    // Redirect to registration page
    window.location.href = "https://scriveners.pythonabc.org/litfest25";
  };

  const handleShare = () => {
    // Create text message content with Unicode emojis (directly embedded)
    const messageText = `You're Invited to LitFest 2025! ✨📚

Hey everyone! 🎉
Get ready for a thrilling day of words, wit, and wonder at our annual Literature Day – LitFest 2025! 🖋️🎭

Here's what's waiting for you:
• Parliamentary Debate – Speak your mind, defend your stance! 🗣️
• Treasure Hunt – Solve clues, race time, and claim glory! 🧭
• Spell Bee – Show off your spelling skills, one letter at a time! 🔤
• Open Mic – Poems, stories, or songs – the stage is all yours! 🎙️

Tons of fun, creativity, and exciting prizes await! 🏆🎁

So bring your passion, your team spirit, and your literary flair — and let's make LitFest 2025 a celebration to remember! ✨

Contact us at: 
Vedant Talankar (8839198566) 📞`;

    const encodedMessage = "You're%20Invited%20to%20LitFest%202025!%20%E2%9C%A8%F0%9F%93%9A%0A%0AHey%20everyone!%20%F0%9F%8E%89%0AGet%20ready%20for%20a%20thrilling%20day%20of%20words%2C%20wit%2C%20and%20wonder%20at%20our%20annual%20Literature%20Day%20%E2%80%93%20LitFest%202025!%20%F0%9F%96%8B%EF%B8%8F%F0%9F%8E%AD%0A%0AHere%27s%20what%27s%20waiting%20for%20you%3A%0A%E2%80%A2%20Parliamentary%20Debate%20%E2%80%93%20Speak%20your%20mind%2C%20defend%20your%20stance!%20%F0%9F%97%A3%EF%B8%8F%0A%E2%80%A2%20Treasure%20Hunt%20%E2%80%93%20Solve%20clues%2C%20race%20time%2C%20and%20claim%20glory!%20%F0%9F%A7%AD%0A%E2%80%A2%20Spell%20Bee%20%E2%80%93%20Show%20off%20your%20spelling%20skills%2C%20one%20letter%20at%20a%20time!%20%F0%9F%94%A4%0A%E2%80%A2%20Open%20Mic%20%E2%80%93%20Poems%2C%20stories%2C%20or%20songs%20%E2%80%93%20the%20stage%20is%20all%20yours!%20%F0%9F%8E%99%EF%B8%8F%0A%0ATons%20of%20fun%2C%20creativity%2C%20and%20exciting%20prizes%20await!%20%F0%9F%8F%86%F0%9F%8E%81%0A%0ASo%20bring%20your%20passion%2C%20your%20team%20spirit%2C%20and%20your%20literary%20flair%20%E2%80%94%20and%20let%27s%20make%20LitFest%202025%20a%20celebration%20to%20remember!%20%E2%9C%A8%0A%0AContact%20us%20at%3A%0AVedant%20Talankar%20(8839198566)%20%F0%9F%93%9E";
    // Use Web Share API if available - this preserves emoji formatting
    if (navigator.share) {
      navigator.share({
        title: 'LitFest2025 Invitation',
        text: messageText,
        url: 'https://scriveners.pythonabc.org/litfest25',
      }).catch(err => {
        console.log('Error sharing:', err);
        // Fallback to properly encoded WhatsApp URL
        window.open(`https://wa.me/?text=${encodedMessage}`);
      });
    } else {
      // Properly encode the message for WhatsApp URL
      window.open(`https://wa.me/?text=${encodedMessage}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background with texture and animations */}
      <div className="fixed inset-0 bg-[#F5F5DC] bg-opacity-80"></div>
      
      {/* Animated background elements */}
      <BackgroundAnimation />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-6 z-10">
        <div className="w-full max-w-lg">
          <InvitationCard
            onRegisterClick={handleRegister}
            onShareClick={handleShare}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-[#8B4513]/70 z-10">
        <p>© 2025 LitFest - English Department, GGITS & Scriveners Club</p>
      </footer>
    </div>
  );
};

export default Index;
