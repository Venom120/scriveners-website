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
    // Original message with emojis
    const messageText = `*You're Invited to Literature Day 2025!*📚

Join us for a celebration of words, wit, and wonder on *31st May from 10:30 AM onwards*!

*Events include:*

* Open Mic 🎤 
* Spelling Bee 🐝 
* Bookish Treasure Hunt 🪙
* Parliamentary Debate 💬 

Show off your literary flair, challenge your mind, and enjoy a day filled with creativity and fun.
*All students are welcome!*

Let the love for literature shine—see you there!
 
To register visit our website : https://scriveners.pythonabc.org/litfest25

*For any queries, please reach out to us:*
Vedant Talankar (8839198566) 📞`;

    // Function to strip emojis from text (simple regex)
    const stripEmojis = `*You're Invited to Literature Day 2025!*

Join us for a celebration of words, wit, and wonder on *31st May from 10:30 AM onwards*!

*Events include:*

* Open Mic
* Spelling Bee 
* Bookish Treasure Hunt
* Parliamentary Debate 
* Poster Making 

Show off your literary flair, challenge your mind, and enjoy a day filled with creativity and fun.
*All students are welcome!*

Let the love for literature shine—see you there!
 
To register visit our website : https://scriveners.pythonabc.org/litfest25

*For any queries, please reach out to us:*
Vedant Talankar (8839198566)`;

    // Copy to clipboard first (always original message with emojis)
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

    const isAndroid = /Android/i.test(navigator.userAgent);
    const encodedMessage = encodeURIComponent(messageText);

    if (isAndroid) {
      // Android: use original message with emojis
      window.location.href = `intent://send?text=${encodedMessage}#Intent;package=com.whatsapp;scheme=whatsapp;end`;
    } else if (navigator.share) {
      // On other platforms with Web Share API, share message without emojis
      const cleanText = stripEmojis;
      navigator.share({
        title: 'LitFest2025 Invitation',
        text: cleanText,
        url: 'https://scriveners.pythonabc.org/litfest25',
      }).catch(err => {
        console.log('Error sharing:', err);
        // fallback to WhatsApp URL without emojis
        window.open(`https://wa.me/?text=${encodeURIComponent(cleanText)}`);
      });
    } else {
      // Fallback WhatsApp link without emojis
      const cleanText = stripEmojis;
      window.open(`https://wa.me/?text=${encodeURIComponent(cleanText)}`);
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