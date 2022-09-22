const withPreact = require("next-plugin-preact");
const path = require("path");

module.exports = withPreact({
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        domains: ["cdn.discordapp.com", "i.scdn.co"],
    },
});
