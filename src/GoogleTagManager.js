import { useEffect } from 'react';

const GoogleTagManager = ({ gtmId }) => {
    useEffect(() => {
      const script = document.createElement('script');
      script.innerHTML = `
      var _mtm = window._mtm = window._mtm || [];
      _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
      (function() {
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src='https://cdn.matomo.cloud/phedre.matomo.cloud/container_dVlRHDco.js'; s.parentNode.insertBefore(g,s);
      })();
      `;
      document.head.appendChild(script);
  
      return () => {
        document.head.removeChild(script);
      };
    }, [gtmId]);
  
    return null;
  };

export default GoogleTagManager;