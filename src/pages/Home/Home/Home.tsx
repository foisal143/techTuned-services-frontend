import ScrollToTop from '../../../utils/scrollTop';
import AdvertosimgSection from '../AdvertisingSection/AdvertosimgSection';
import Articalse from '../Articales/Articalse';
import CallBackSection from '../CallBackSection/CallBackSection';
import HappyCoustomer from '../HappyCoustomer/HappyCoustomer';
import HeroSection from '../HeroSection/HeroSection';
import HowWeWorks from '../HowWeWorks/HowWeWorks';
import LeadershipSection from '../LeadershipSection/LeadershipSection';
import Milestones from '../Milestones/Milestones';
import OurService from '../OurService/OurService';
import SubscribedSection from '../SubscribedSection/SubscribedSection';
import WhoWeAreSection from '../WhoWeAreSection/WhoWeAreSection';

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <HeroSection />
      <AdvertosimgSection />
      <WhoWeAreSection />
      <Milestones />
      <OurService />
      <HowWeWorks />
      <HappyCoustomer />
      <SubscribedSection />
      <Articalse />
      <CallBackSection />
      <LeadershipSection />
    </>
  );
};

export default Home;
