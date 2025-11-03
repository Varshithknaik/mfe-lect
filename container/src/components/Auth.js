import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const onParentNavigateRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { onParentNavigateRef } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        navigate(nextPathname);
      },
    });
  }, []);

  useEffect(() => {
    if (onParentNavigateRef.current) {
      onParentNavigateRef.current({ pathname: location.pathname });
    }
  }, [location]);

  return <div ref={ref} />;
};
