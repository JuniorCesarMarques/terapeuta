import './App.css';
import Promise from './Components/promise/Promise';
import Carousel from './Components/Carousel/Carousel';
import HeadlineSection from './Components/HeadlineSection/HeadlineSection';
// import WaButton from './Components/WaButton/WaButton';
import WhatYouWillReceive from './Components/WhatYouWillReceive/WhatYouWillReceive';
import Offer from './Components/Offer/Offer';
import Faq from './Components/Faq/Faq';
import Guarantee from './Components/Guarantee/Guarantee';
import Countdown from './Components/Countdown/Countdown';

function App() {

  return (
    <>
    <HeadlineSection />
    <WhatYouWillReceive />
    {/* <WaButton /> */}
    <Promise />
    <Carousel />
    <Countdown />
    <Offer />
    <Guarantee />
    <Faq />
    </>
  )
}

export default App
