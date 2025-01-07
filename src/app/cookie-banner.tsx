'use client';
import { useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";

export const cookieConsentGiven = () => {
  if (!localStorage.getItem('cookie_consent')) {
    return 'undecided';
  }
  return localStorage.getItem('cookie_consent');
}

export default function CookieBanner() {
  const [consentGiven, setConsentGiven] = useState<string | null>('');
  const posthog = usePostHog();

  useEffect(() => {
    // We want this to only run once the client loads
    // or else it causes a hydration error
    setConsentGiven(cookieConsentGiven());
  }, []);

  useEffect(() => {
    if (consentGiven !== '') {
      posthog.set_config({ persistence: consentGiven === 'yes' ? 'localStorage+cookie' : 'memory' });
    }
  }, [consentGiven]);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    setConsentGiven('yes');
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    setConsentGiven('no');
  };

  return (
    <div>
      {consentGiven === 'undecided' && (
        <div>
          <p>
            We use tracking cookies to understand how you use 
            the product and help us improve it.
            Please accept cookies to help us improve.
          </p>
          <button type="button" onClick={handleAcceptCookies}>Accept cookies</button>
          <span> </span>
          <button type="button" onClick={handleDeclineCookies}>Decline cookies</button>
        </div>
      )}
    </div>
  );
}