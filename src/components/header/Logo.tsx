
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-3">
        <img 
          src="/lovable-uploads/a7514caf-247b-475e-9429-8e5837ee4959.png" 
          alt="BYBC Banking" 
          className="h-10 w-10"
        />
        <span className="text-white font-semibold text-xl">BYBC</span>
      </Link>
    </div>
  );
};

export default Logo;
