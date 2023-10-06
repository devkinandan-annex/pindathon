/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import {
  ApiResponse,
  ApisauceInstance,
  create,
} from "apisauce"
import axios from "axios";
import Config from "../../config"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem"
import type {
  ApiConfig,
  ApiGoalsResponse,
  ApiFeedResponse,
  GoalItem,
} from "./api.types"
import type { EpisodeSnapshotIn } from "../../models/Episode" // @demo remove-current-line

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */

 export interface ApiGenericOptions  {
    itemName: string
    apiAction?: "index" | "get"
    apiResourceName: string
    apiUrl: string
  }
// export interface ApiFetcherConfig  {
//   itemName: string
//   apiResourceName: string
//   apisauce: any
// }
// const apiFetcherCreator = (config: ApiFetcherConfig) => {

//   const apiFetcher =  async function () {
//     const response: ApiResponse<any> = await config.apisauce.get(
//       `${config.apiResourceName}.json`,
//     )
//     if (!response.ok) {
//       const problem = getGeneralApiProblem(response)
//       if (problem) return problem
//     }
//     try {
//       const rawData = response.data;
//       return { kind: "ok", [config.apiResourceName]: rawData.responseData};
//     } catch (e) {
//       if (__DEV__) {
//         console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
//       }
//       return { kind: "bad-data" }
//     }
//   }
//   return apiFetcher;
// }
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async getItems(options: ApiGenericOptions) {
    const response: ApiResponse<any> = await this.apisauce.get(
      options.apiUrl || `${options.apiResourceName}.json`,
    )
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    try {
      const rawData = response.data;
      return { kind: "ok", [options.apiResourceName]: rawData.responseData};
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }

  async getGoals(): Promise<{ kind: "ok"; goals: GoalItem[]} | GeneralApiProblem> {
    const response: ApiResponse<ApiGoalsResponse> = await this.apisauce.get(
      `goals.json`,
    )
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    try{ 
      const rawData = response.data;

      // This is where we transform the data into the shape we expect for our MST model.
      const goals: GoalItem[] = rawData.goals.map((raw) => ({
        ...raw,
      }))
      return { kind: "ok", goals }
    } catch(e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }

    
  }
  
  // @demo remove-block-start
  /**
   * Gets a list of recent React Native Radio episodes.
   */
  async getEpisodes(): Promise<{ kind: "ok"; episodes: EpisodeSnapshotIn[] } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<ApiFeedResponse> = await this.apisauce.get(
      `api.json?rss_url=https%3A%2F%2Ffeeds.simplecast.com%2FhEI_f9Dx`,
    )

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data

      // This is where we transform the data into the shape we expect for our MST model.
      const episodes: EpisodeSnapshotIn[] = rawData.items.map((raw) => ({
        ...raw,
      }))

      return { kind: "ok", episodes }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
  // @demo remove-block-end
}

// Singleton instance of the API for convenience
export const api = new Api()

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    "Content-type": "application/json"
  }
});
