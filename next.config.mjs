/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns: [
      {
        protocol: "https",
        hostname: "**.pexels.com",
        port: "",
      },
    ]
    }//I updtaeted this to accept images form pexel.com - Less go to Tailwind config file
};

export default nextConfig;
