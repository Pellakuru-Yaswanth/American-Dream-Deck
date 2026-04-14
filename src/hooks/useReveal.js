import { useEffect } from 'react';

const useReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15 // Trigger when 15% is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add class when scrolling IN
          entry.target.classList.add('reveal-active');
        } else {
          // Remove class when scrolling OUT
          // This allows the animation to play again next time
          entry.target.classList.remove('reveal-active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useReveal;