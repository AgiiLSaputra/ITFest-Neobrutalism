import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'animate-neo-slam',
  delay = 0,
  threshold = 0.15,
  className = '',
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  if (!isVisible) {
    return <div ref={ref} className={className} style={{ opacity: 0 }} />;
  }

  return (
    <div className={`${className} h-full`}>
      <div
        className={`${animation} h-full`}
        style={delay ? { animationDelay: `${delay}s` } : undefined}
      >
        {children}
      </div>
    </div>
  );
}
