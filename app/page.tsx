import DiscoverFeatures from "./_components/homePage/DiscoverFeatures";
import FaqSection from "./_components/homePage/FaqSection";
import Statistics from "./_components/homePage/Statistics";
import TrustYourself from "./_components/homePage/TrustYourself";


export default function Page(){
  return (
    <>
      {/* First section */}
      <TrustYourself/>   

      {/* Second section */}
      <DiscoverFeatures/>

      {/* Third section */}
      <Statistics/>
      
      {/* Fourth section */}
      <FaqSection/>
    </>
  )
}