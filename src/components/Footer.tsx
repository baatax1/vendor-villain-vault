
import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center mb-4">
          <Flame className="w-5 h-5 text-hellfire-500 mr-2" />
          <p className="text-gray-400 text-sm">
            The BAA Wall of Shame | Exposing predatory pricing in healthcare compliance
          </p>
        </div>
        <p className="text-gray-500 text-xs text-center">
          This project was created to raise awareness about the practice of vendors charging 
          exorbitant fees for basic compliance requirements. Information provided here is 
          approximate and may change over time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
