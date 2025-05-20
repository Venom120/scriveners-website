
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

    // Copy to clipboard first
    navigator.clipboard.writeText(messageText)
      .then(() => {
        toast({
          title: "Copied to clipboard!",
          description: "Invitation copied to clipboard and opening WhatsApp.",
        });
      })
      .catch(err => {
        console.error("Clipboard write failed: ", err);
        toast({
          title: "Could not copy to clipboard",
          description: "Opening WhatsApp directly.",
          variant: "destructive"
        });
      });

    // Check if running on Android
    const isAndroid = /Android/i.test(navigator.userAgent);
    const encodedMessage = encodeURIComponent(messageText);

    // Use intent URL for Android
    if (isAndroid) {
      // Android intent URL for WhatsApp
      window.location.href = `intent://send?text=${encodedMessage}#Intent;package=com.whatsapp;scheme=whatsapp;end`;
    } 
    // Use Web Share API if available - this preserves emoji formatting
    else if (navigator.share) {
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
    } 
    // Fallback to universal WhatsApp URL
    else {
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
