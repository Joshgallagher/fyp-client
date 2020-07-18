module.exports = {
  pages: {
    app: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      excludeChunks: ["silent-renew-oidc"]
    },
    silentRenewCallback: {
      entry: "src/silent-renew-callback.js",
      template: "public/silent-renew-callback.html",
      filename: "silent-renew-callback.html",
      excludeChunks: ["app"]
    }
  }
};
