import React, { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'bounceIn';
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
        (animation === 'fadeInUp' || animation === 'slideInUp' ? 'translate-y-10' : 
         animation === 'fadeInDown' || animation === 'slideInDown' ? '-translate-y-10' : 
         animation === 'fadeInLeft' || animation === 'slideInLeft' ? '-translate-x-10' : 
         animation === 'fadeInRight' || animation === 'slideInRight' ? 'translate-x-10' :
         animation === 'bounceIn' ? 'scale-0' : '');
    }
    return `opacity-100 translate-y-0 translate-x-0 scale-100 ${
      animation === 'bounceIn' ? 'animate-bounce-in' :
      animation.startsWith('slideIn') ? `animate-${animation.toLowerCase().replace('slidein', 'slide-in')}` :
      `animate-${animation.toLowerCase().replace('fadein', 'fade-in')}`
    }`;
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