import Link from 'next/link';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/" className={`text-2xl md:text-3xl font-bold tracking-tight text-primary hover:text-primary/80 transition-colors ${className}`}>
      Ethereal Threads
    </Link>
  );
};

export default Logo;
