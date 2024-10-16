const useIsMobileView = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    return width < 786;
  }
};

export default useIsMobileView;
