import React, { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  animation, 
  delay = 0, 
  duration = 500,
  className = '',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) {
      return 'opacity-0 ' + 
        (animation === 'fadeInUp' ? 'translate-y-10' : 
         animation === 'fadeInLeft' ? '-translate-x-10' : 
         animation === 'fadeInRight' ? 'translate-x-10' : '');
    }
    return 'opacity-100 translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ${getAnimationClass()} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;