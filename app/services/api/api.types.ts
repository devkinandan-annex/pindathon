/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */
 export interface GoalItem {
  name: string
  label: string
  id: string
  uuid: string
  settings: object
  thumbnail: string
  description: string
  content: string
}
export interface BaseApiFetchResponse {
  meta: {
    total_pages: number
    current_page: number
    total_count: number
  }
}

export interface ApiGoalsResponse extends BaseApiFetchResponse {
  goals: GoalItem[]
}

// Extra for reference

export interface EpisodeItem {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: {
    link: string
    type: string
    length: number
    duration: number
    rating: { scheme: string; value: string }
  }
  categories: string[]
}

export interface ApiFeedResponse {
  status: string
  feed: {
    url: string
    title: string
    link: string
    author: string
    description: string
    image: string
  }
  items: EpisodeItem[]
}

/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}
