export const START_IO_CONFIG = {
  enabled: false,

  // Replace this with your real Start.io App ID.
  appId: "YOUR_START_IO_APP_ID",

  showBanner: true,
  showInterstitial: true,
  showRewarded: false
};

export function isStartIoConfigured(): boolean {
  return (
    START_IO_CONFIG.enabled &&
    START_IO_CONFIG.appId !== "" &&
    START_IO_CONFIG.appId !== "YOUR_START_IO_APP_ID"
  );
}
