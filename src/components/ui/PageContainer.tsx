import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={cn("container py-8 md:py-12", className)}>
      {children}
    </div>
  );
};

export default PageContainer;
