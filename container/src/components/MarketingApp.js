import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        // if (nextPathname !== location.pathname) {
        //   navigate(nextPathname, { replace: true });
        // }
        navigate(nextPathname);
      },
    });
  }, []);

  return <div ref={ref} />;
};
