// src/components/layout/header/logo.tsx
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  src: string;
}

const Logo = ({ src }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center space-x-2">
        <Image 
          src={src} 
          alt="Srotas Health" 
          width={40} 
          height={40}
          priority // Since this is above the fold
        />
        {/* <span className="text-xl font-semibold text-white">
          SROTAS HEALTH
        </span> */}
      </div>
    </Link>
  );
};

export default Logo;