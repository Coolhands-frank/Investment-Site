/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    reactStrictMode: true,
    swcMinify: true, // Enable SWC minification for better performance
    compiler: {
      removeConsole: process.env.NODE_ENV === "production", // Remove console logs in production
    },
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
};

export default nextConfig;
