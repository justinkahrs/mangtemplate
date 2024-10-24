import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  env: {
    GOOGLE_ADSENSE_ID: process.env.GOOGLE_ADSENSE_ID,
    AMAZON_AFFILIATE_TAG: process.env.AMAZON_AFFILIATE_TAG,
    DOMAIN_NAME: process.env.DOMAIN_NAME,
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
});

export default nextConfig;
