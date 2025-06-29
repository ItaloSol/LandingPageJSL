import { useEffect } from 'react';
import { logEvent, Analytics } from 'firebase/analytics';
import { analytics } from '../lib/firebase';

// Custom hook for Firebase Analytics
export const useAnalytics = () => {
  useEffect(() => {
    // Track page view on mount
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  // Function to track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (analytics) {
      logEvent(analytics, eventName, parameters);
    }
  };

  // Predefined tracking functions for common actions
  const trackWhatsAppClick = (source: string) => {
    trackEvent('whatsapp_click', {
      source,
      contact_method: 'whatsapp',
      phone_number: '554791334961'
    });
  };

  const trackProductView = (productName: string, productType: string) => {
    trackEvent('view_item', {
      item_name: productName,
      item_category: 'expositor',
      item_category2: productType,
      currency: 'BRL'
    });
  };

  const trackVideoPlay = (videoTitle: string, videoSource: string) => {
    trackEvent('video_play', {
      video_title: videoTitle,
      video_source: videoSource,
      content_type: 'video'
    });
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', {
      section_name: sectionName,
      engagement_type: 'scroll'
    });
  };

  const trackPurchaseIntent = (productName?: string) => {
    trackEvent('begin_checkout', {
      item_name: productName || 'expositor_premium',
      currency: 'BRL',
      value: 0,
      source: 'website'
    });
  };

  return {
    trackEvent,
    trackWhatsAppClick,
    trackProductView,
    trackVideoPlay,
    trackSectionView,
    trackPurchaseIntent
  };
};