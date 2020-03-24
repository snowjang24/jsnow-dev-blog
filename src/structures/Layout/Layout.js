import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import * as Styled from "./styled";
import { Head, Navbar, Footer } from "../../components";

export default ({ children, title }) => {
  const [goingUp, setGoingUp] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <Styled.Layout className="main">
      <Head title={title} />
      <Navbar
        className={classNames("header-container", {
          goingUpNav: scrollY > 0 && !goingUp,
          activeNav: scrollY > 0
        })}
      />
      <div className="content-container">{children}</div>
      <div className="footer-container">
        <Footer className="footer _responsive" />
      </div>
    </Styled.Layout>
  );
};
