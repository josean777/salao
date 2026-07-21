const LOGO_URL = "/manus-storage/elias-elis-logo_c334a4b0.jpeg";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[200] bg-[#0A0A0A] flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="animate-fadeIn">
          <img
            src={LOGO_URL}
            alt="Elias Elis Hair | Body | Soul"
            className="h-28 w-auto mx-auto mb-6 object-contain animate-pulse"
          />
        </div>

        {/* Gold line animation */}
        <div className="w-32 h-px mx-auto bg-[#1D1D1D] rounded-full overflow-hidden mb-4">
          <div className="h-full bg-[#C6A15B] animate-loading-bar" />
        </div>

        {/* Brand name */}
        <p className="font-heading text-[#C6A15B] text-sm tracking-[0.25em] uppercase animate-fadeIn">
          Elias Elis Hair
        </p>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          @keyframes loading-bar {
            0% { width: 0; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
          .animate-loading-bar {
            animation: loading-bar 2s ease-in-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
}
