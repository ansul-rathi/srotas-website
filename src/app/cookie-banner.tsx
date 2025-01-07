/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";
// import { CookieIcon } from "@heroicons/react/24/outline";

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

  if (consentGiven !== 'undecided') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[rgba(20,20,20,0.95)] backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          {/* Icon and Text */}
          <div className="flex items-center gap-4 flex-1">
            {/* <CookieIcon className="w-8 h-8 text-purple-600" /> */}
            <p className="text-white/90 text-sm leading-relaxed">
              We use tracking cookies to understand how you use the product and help us improve it.
              Please accept cookies to help us improve your experience.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={handleDeclineCookies}
              className="flex-1 md:flex-initial px-6 py-2 text-sm text-white/70 border border-white/20 rounded-lg
                hover:bg-white/5 hover:border-white/30 transition-colors duration-200"
            >
              Decline
            </button>
            <button
              onClick={handleAcceptCookies}
              className="flex-1 md:flex-initial px-6 py-2 text-sm text-white rounded-lg
                bg-gradient-to-r from-blue-600 to-purple-600
                hover:from-blue-700 hover:to-purple-700
                transition-all duration-200"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}