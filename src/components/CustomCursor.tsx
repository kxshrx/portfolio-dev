import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const moveMousePos = (e: MouseEvent) => {
      if (cursor) {
        // Direct style manipulation for maximum performance
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (cursor) {
        const computedStyle = window.getComputedStyle(target);
        const bgColor = computedStyle.backgroundColor;
        const isAccent = bgColor.includes('123, 58, 237') || // #7C3AED
                        bgColor.includes('purple') ||
                        target.classList.contains('bg-accent');

        if (isAccent) {
          cursor.classList.add('scale-150', 'bg-white', 'dark:bg-black');
        } else if (target.tagName.toLowerCase() === 'a' || 
                  target.tagName.toLowerCase() === 'button' || 
                  target.hasAttribute('role') && target.getAttribute('role') === 'button') {
          cursor.classList.add('scale-150');
        }
      }
    };

    const handleElementLeave = () => {
      if (cursor) {
        cursor.classList.remove('scale-150', 'bg-white', 'dark:bg-black');
      }
    };

    // Hide all cursors
    const hideAllCursors = () => {
      document.documentElement.style.cursor = 'none';
      document.body.style.cursor = 'none';
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        (el as HTMLElement).style.cursor = 'none';
      });
    };
    hideAllCursors();

    // Add event listeners
    document.addEventListener('mousemove', moveMousePos, { passive: true });
    
    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementHover);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    // Handle cursor visibility
    document.addEventListener('mouseleave', () => {
      if (cursor) cursor.style.display = 'none';
    });
    document.addEventListener('mouseenter', () => {
      if (cursor) cursor.style.display = 'block';
    });

    return () => {
      document.removeEventListener('mousemove', moveMousePos);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none w-3 h-3 rounded-full z-[9999] bg-[#1a1a1a] dark:bg-[#4C1D95] transition-transform duration-200"
      style={{
        transform: 'translate(-50%, -50%)',
        willChange: 'left, top',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    />
  );
};

export default CustomCursor;
