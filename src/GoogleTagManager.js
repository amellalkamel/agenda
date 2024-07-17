import { useEffect } from 'react';

const GoogleTagManager = ({ gtmId }) => {
  useEffect(() => {
    // Replace with your Matomo URL and Site ID
    const matomoUrl = 'https://phedre.matomo.cloud/';
    const siteId = '2';

    if (!window._paq) {
      window._paq = [];
    }

    window._paq.push(['trackPageView']);
    window._paq.push(['enableLinkTracking']);
    (function() {
      var u = matomoUrl;
      window._paq.push(['setTrackerUrl', u + 'matomo.php']);
      window._paq.push(['setSiteId', siteId]);
      var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
      g.type = 'text/javascript';
      g.async = true;
      g.defer = true;
      g.src = u + 'matomo.js';
      s.parentNode.insertBefore(g, s);
    })();
  }, []);

  return null;
};

export default GoogleTagManager;