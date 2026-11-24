const backend = process.env.API_INTERNAL_URL || "http://127.0.0.1:8000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: "/api/demo/:path*", destination: `${backend}/api/:path*` }];
  },
};

export default nextConfig;
