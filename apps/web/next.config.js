/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui", "@repo/github-service"],
  basePath: "/turbo-mono-demo",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};
