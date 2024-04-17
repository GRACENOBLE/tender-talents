/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r9kvhfb2qmlqu55z.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  }, //I updtaeted this to accept images form pexel.com - Less go to Tailwind config file
};

export default nextConfig;
{
  /*https://r9kvhfb2qmlqu55z.public.blob.vercel-storage.com/discussion-arqBzOEkjIyVWHpA7igS8RjmGOUJNo.png */
}