import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export function ScrollToTop(props: { children: any }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return props.children;
}

const App = () => {
  window.addEventListener("load", function () {
    AOS.init();
  });

  const socials = {
    Instagram: "#",
  };

  return (
    <>
      <BrowserRouter>
      <header>
 <Navbar
          StartTransparent
          Logo="#"
          Pages={[
            {
              To: "/#home",
              Text: "Home",
            },
          ]}
          Socials={socials}
        />
      </header>
       <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
               </main>

        <Footer Socials={socials} Links={[]} />
      </BrowserRouter>
    </>
    
  );
};

export default App;
