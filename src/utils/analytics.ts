import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-703YRY6YVS");
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track button clicks and link clicks
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  console.log("Tracking event", category, action, label, value);
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Custom function to track section visibility
export const trackSectionView = (sectionName: string) => {
  trackEvent("Section Visibility", "view", sectionName);
};

// Track external link clicks
export const trackExternalLink = (url: string, label?: string) => {
  trackEvent("External Link", "click", label || url);
};

// Track document downloads
export const trackDownload = (documentName: string) => {
  trackEvent("Resume Download", "click", documentName);
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent("Form Submission", success ? "success" : "failure", formName);
};

// Track social media interactions
export const trackSocialInteraction = (network: string, action: string) => {
  trackEvent("Social", action, network);
};
