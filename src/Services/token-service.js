import config from "../config";
// Web token services file
const TokenService = {
  //saves token into local storage.
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  // gathers token from config file.
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  // removes token from local storage.
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  // returns truthy / falsey value of getAuthToken
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  // A basic token creation tool, this was used as a reference.
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
};

export default TokenService;
