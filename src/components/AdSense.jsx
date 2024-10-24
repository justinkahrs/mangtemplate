"use client";
import { useEffect } from "react";

export default function GoogleAdSense() {
  useEffect(() => {
    // Ensure that ads are loaded only in the client-side environment
    if (typeof window !== "undefined") {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  if (!process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID) {
    // Optionally, return null or a fallback if the env variable is not defined
    console.error("Google AdSense ID is missing.");
    return null;
  }

  return (
    <div className="adsense">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
        data-ad-slot="1234567890" // Replace with your actual AdSense slot ID
        data-ad-format="auto"
      ></ins>
    </div>
  );
}
