export const calculateSizes = (isSmall, isMobile, isTablet, isSpecial) => {
    return {
      deskScale: isSmall ? 0.6 : isMobile ? 1.25 : isTablet ? 1.2 : 1.5,
      deskPosition: isSmall ? [-1.5, -12, 35] : isMobile ? [-0.5, -20, 8] : isTablet ? [0, -35, 0] :  isSpecial ? [-2.5, -6, -27] : [-3, -35, 5],
    };
}; 