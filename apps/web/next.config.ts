/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: 'export',
  // Static export served as its own Vercel site at
  // https://usa-tech-for-good.vercel.app/.
};

export default nextConfig;
