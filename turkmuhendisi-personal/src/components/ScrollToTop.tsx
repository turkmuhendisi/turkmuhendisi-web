import { useEffect } from "react";
import * as ReactRouterDom from "react-router-dom";

const routerDom = (Reflect.get(ReactRouterDom as object, "default") ?? ReactRouterDom) as typeof import("react-router-dom");
const { useLocation } = routerDom;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
