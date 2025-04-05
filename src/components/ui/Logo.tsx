
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'small';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  return (
    <div className={`flex items-center ${variant === 'small' ? 'gap-1' : 'gap-2'}`}>
      <div className={`text-cheese-gold ${variant === 'small' ? 'text-xl' : 'text-3xl'} font-bold`}>Q</div>
      <div className={`font-serif ${variant === 'small' ? 'text-lg' : 'text-2xl'} tracking-wider`}>
        QUESO <span className="text-cheese-gold font-medium">MODERNO</span>
      </div>
    </div>
  );
};

export default Logo;
