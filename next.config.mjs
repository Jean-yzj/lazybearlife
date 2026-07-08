/** @type {import('next').NextConfig} */
const nextConfig = {
  // 後台上線後改為伺服器模式（原本是 output: "export" 純靜態）
  images: { unoptimized: true },
};

export default nextConfig;
