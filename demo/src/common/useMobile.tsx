import React from 'react';

export const useMobile = () => {
  const [isMobile, setIsMobile] = React.useState(
    () => window.matchMedia('(max-width: 768px)').matches,
  );
  React.useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => {
      setIsMobile(mobileMediaQuery.matches);
      console.log('isMobile: ', mobileMediaQuery.matches);
    };
    mobileMediaQuery.addEventListener('change', handleResize);
    return () => {
      mobileMediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return isMobile;
};
