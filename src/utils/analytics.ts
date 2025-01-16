import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-703YRY6YVS");
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track button clicks and link clicks
export const trackEvent = (
  name: string,
  parameters?: { [key: string]: any }
) => {
  ReactGA.event(name, parameters);
};

// Track external link clicks
export const trackExternalLinkProjects = (url: string, label?: string) => {
  trackEvent("Projects external_link_click", {
    link_url: url,
    link_name: label || url,
  });
};

export const trackExternalLinkProfiles = (url: string, label?: string) => {
  trackEvent("Profiles external_link_click", {
    link_url: url,
    link_name: label || url,
  });
};

// Track document downloads
export const trackDownload = (documentName: string) => {
  trackEvent("file_download", {
    file_name: documentName,
    file_type: documentName.split(".").pop(),
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent("form_submission", {
    form_name: formName,
    success: success,
  });
};

// Track social media interactions
export const trackSocialInteraction = (network: string, action: string) => {
  trackEvent("social_interaction", {
    network: network,
    action: action,
  });
};
