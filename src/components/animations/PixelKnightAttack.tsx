import knightSprite from "@/assets/knight-pixel-attack.png";

export const PixelKnightAttack = () => {
  return (
    <div className="absolute bottom-20 right-10 md:bottom-32 md:right-20 animate-bounce-slow">
      <div className="relative">
        <img 
          src={knightSprite} 
          alt="Pixel Knight" 
          className="w-32 h-32 md:w-48 md:h-48 pixelated animate-attack"
        />
        {/* Slash effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56">
          <div className="sword-slash-pixel absolute inset-0" />
        </div>
      </div>
    </div>
  );
};
