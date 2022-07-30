/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.URL,
};
