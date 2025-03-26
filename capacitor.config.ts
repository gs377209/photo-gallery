import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.gerrodSchirtzinger.photoGallery",
  appName: "photo-gallery",
  webDir: "dist",
  plugins: {
    LiveUpdates: {
      appId: "f06de2f0",
      channel: "Production",
      autoUpdateMethod: "background",
      maxVersions: 2,
    },
  },
};

export default config;
