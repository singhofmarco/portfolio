import React, { useEffect } from 'react'
import Router from 'next/router'
import * as Fathom from 'fathom-client'
import '../css/tailwind.css'

// Record a pageview when route changes
Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

function App({ Component, pageProps }) {
  // Initialize Fathom when the app loads
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load();
      Fathom.setSiteId('MSVSXYRV');
      Fathom.trackPageview();
    }
  }, []);

  return <Component {...pageProps} />
}

export default App
