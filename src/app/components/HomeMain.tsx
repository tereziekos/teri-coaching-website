import Hero from './Hero';
import Videos from './Videos';
import FirstConversation from './FirstConversation';
import Testimonials from './Testimonials';
import AboutMe from './AboutMe';
import MyApproach from './MyApproach';
import AiNote from './AiNote';
import ContinuingSessions from './ContinuingSessions';
import Photos from './Photos';
import VibeVideo from './VibeVideo';

export default function HomeMain() {
  return (
    <>
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
    </>
  );
}
