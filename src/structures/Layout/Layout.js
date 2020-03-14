import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import * as Styled from "./styled";
import { Head, Navbar, Footer } from "../../components";

export default ({ children, title }) => {
  const [goingUp, setGoingUp] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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
          activeNavbar: !goingUp
        })}
      />

      <div className="content-container">{children}</div>

      <Footer className="footer-container" />
    </Styled.Layout>
  );
};
