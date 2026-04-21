import Nav from './components/Nav';
import Hero from './components/Hero';
import Videos from './components/Videos';
import FirstConversation from './components/FirstConversation';
import Testimonials from './components/Testimonials';
import AboutMe from './components/AboutMe';
import MyApproach from './components/MyApproach';
import AiNote from './components/AiNote';
import ContinuingSessions from './components/ContinuingSessions';
import Photos from './components/Photos';
import VibeVideo from './components/VibeVideo';
import Footer from './components/Footer';

export default function MainPage() {
  return (
    <>
      <Nav />
      <Hero />
      <Videos />
      <FirstConversation />
      <Testimonials />
      <VibeVideo src="/images/photos/vibe-landscape.mp4" />
      <AboutMe />
      <MyApproach />
      <AiNote />
      <VibeVideo src="/images/photos/vibe-walking.mp4" />
      <ContinuingSessions />
      <Photos />
      <Footer />
    </>
  );
}
