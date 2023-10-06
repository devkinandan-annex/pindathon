// This is the entry point if you run `yarn expo:start`
// If you run `yarn ios` or `yarn android`, it'll use ./index.js instead.
import App from "./app/app.tsx"
import React from "react"
import { axiosInstance } from "@abhimanyu24/mr-react-simple-rest";
import { registerRootComponent } from "expo"
import * as SplashScreen from "expo-splash-screen"
import Config from './app/config'

SplashScreen.preventAutoHideAsync()

const requestInterceptor = async (config) => {
  // const token = await storage.loadString(Config.TOKEN_KEY);
  const token = Config.TOKEN_KEY
  config.headers || {};

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  // config.headers["X-Auth-Email"] = "abhi@wellx.ai"
  // config.headers["X-Auth-Token"] = "64ojNRbQAsQ9DJ8H9ZWb"
  return config;
}
axiosInstance.interceptors.request.use(requestInterceptor);

const responseInterceptor = async (response) => {
  if (response.data?.data) {
    response.data = response.data.data;
  }
  return response;
}
axiosInstance.interceptors.response.use(responseInterceptor);

function IgniteApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

registerRootComponent(IgniteApp)
export default IgniteApp
