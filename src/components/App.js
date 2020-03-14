import React from 'react';
import FeaturedMix from './FeaturedMix';
import { Header } from './Header';


function App() {
  return (
    <div>
      <div className="flex-l justify-end">
        <FeaturedMix/>
        <div className="w-50-l relative z-1">
          <Header/>
          {/* Routed page */}
        </div>
      </div>
      <iframe 
        title="AudioPlayer"
        width="100%" 
        height="60" 
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fmmhradio%2Fvivendii-sound-teezee-070320%2F" 
        frameBorder="0"
        className="db fixed bottom-0 z-5"
      />
    </div>
  );
}

export default App;
