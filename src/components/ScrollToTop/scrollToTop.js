import React, { useEffect, useState } from "react";
import "./scrollToTop.css";

import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  const scrollToTop = () => window.scroll({top: 0, behavior: 'smooth'})

  return (
    <div class="scroll-to-top cursor-pointer text-center" onClick={scrollToTop}>
      <i class="icon fas fa-chevron-up"></i>
    </div>
  );
};

export default ScrollToTop;
