
import { Flame } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-8 px-4 md:px-10 mb-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-4">
            <Flame className="w-10 h-10 mr-2 text-hellfire-500 animate-pulse-fire" />
            <h1 className="text-4xl md:text-6xl font-bold text-white title-glow heading-font">
              The BAA Wall of Shame
            </h1>
            <Flame className="w-10 h-10 ml-2 text-hellfire-500 animate-pulse-fire" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            A list of vendors that treat Business Associate Agreements as a profit center 
            instead of a basic compliance requirement.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
