/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `npm run build` writes the site to ./out
  output: "export",
  // Emit /about/index.html instead of /about.html so plain static hosts resolve clean URLs.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
