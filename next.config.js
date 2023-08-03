/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
      @import "./src/styles/variables.scss";
      @import "./src/styles/mixins.scss";
      @import "./src/styles/extends.scss";
      `,
  },
};

module.exports = nextConfig;
