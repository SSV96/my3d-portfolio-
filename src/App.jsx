import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  // Works,
  Contact,
  StarsCanvas,
  Certifications,
  Achievements,
} from "./components";
import { useEffect } from "react";
import mixpanel from "./lib/mixpanel"
function App() {
  useEffect(() => {
    mixpanel.track('Page Viewed', { page: 'Home' });
//     mixpanel.identify(user.id);
// mixpanel.people.set({
//   $email: user.email,
//   $name: user.name,

  },[])
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          {/* <Works /> */}
          <Certifications />
          <Achievements />
          <div className="relaive z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
