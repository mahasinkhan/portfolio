// src/components/Models/contact/ContactExperience.jsx

const ContactExperience = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 rounded-3xl shadow-2xl p-6 animate-fade-in">
      <div className="relative w-full h-full max-h-[500px] rounded-3xl bg-white bg-opacity-10 backdrop-blur-md overflow-hidden border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 group">
        
        {/* Gradient border animation */}
        <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 animate-border-glow opacity-40 blur-sm"></div>

        {/* Image */}
        <img
          src="/images/Ma_img.jpg"
          alt="Contact Illustration"
          className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
        />

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-3 text-lg font-semibold tracking-wide backdrop-blur-sm">
          <span className="inline-flex items-center gap-2">
            🤝 Let’s Connect & Collaborate
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactExperience;
