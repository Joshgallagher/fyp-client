export default {
  authority: process.env.VUE_APP_OIDC_AUTHORITY,
  clientId: process.env.VUE_APP_OIDC_CLIENT_ID,
  redirectUri: process.env.VUE_APP_OIDC_REDIRECT_URI,
  popupRedirectUri: process.env.VUE_APP_OIDC_POPUP_REDIRECT_URI,
  post_logout_redirect_uri: process.env.VUE_APP_OIDC_POST_LOGOUT_REDIRECT_URI,
  responseType: "code",
  scope: "openid offline",
  automaticSilentRenew: true,
  silentRedirectUri: process.env.VUE_APP_OIDC_SILENT_REDIRECT_URI
};
