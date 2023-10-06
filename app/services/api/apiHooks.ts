import { useQuery } from '@tanstack/react-query';
import { delay } from '../../utils/delay';
import {api} from './api';


export interface GenericFetchOptions {
  apiUrl: string
  apiResourceName: "goals" | "challenges" | "newsfeed"
}
const defaultObj = {
  id: "u1u1u1u",
  name: "Goal",
  label: "Goal Label",
  created_at: "time"
}
export interface DataGeneratorProps  {
  obj?: any
  size: number
}
const dataGenerator = (options: DataGeneratorProps) => {
  const obj = options.obj || defaultObj;
  const size = options.size || 10
  
  const finalArr = []
  for (let index = 0; index < size; index++) {
    const newSampleObj = {}
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        newSampleObj[key] = `${element} ${index + 1}`
      }
    }
    finalArr.push(newSampleObj)
    
  }
  return finalArr;
}
const bigDummyObject = {
  goals: dataGenerator({
    obj: {
      id: "uuasdf02312naa-asdfsadfsadf",
      name: "Goal",
      label: "Goal",
      desc: "This is goal description",
      created_at: "time"
    },
    size: 10
  }),
  challenges: dataGenerator({
    obj: {
      id: "uuasdf02312naa-asdfsadfsadf",
      name: "Challenge",
      label: "Challenge",
      desc: "This is challenge description",
      created_at: "time"
    },
    size: 10
  }),
  newsfeed: dataGenerator({
    obj: {
      id: "uuasdf02312naa-asdfsadfsadf",
      name: "feed",
      label: "feed",
      desc: "This is feed description",
      created_at: "time"
    },
    size: 20
  })
}

const genericFetch = (options) => async () => {
  // use api later
  // await logic goes here alongwith error handling
  // dummy code - to be removed
  await delay(1000)

  const response = {
    [options.apiResourceName]: bigDummyObject[options.apiResourceName],
    meta: {
      current_page: 1,
      total_pages: 2,
      per_page: 2,
      total_count: 4
    }
  }
  return response;
}


export const fetchGoals = genericFetch({apiUrl: "/goals", apiResourceName: "goals"});


export const fetchChallenges = genericFetch({apiUrl: "/challenges", apiResourceName: "challenges"});

export const fetchNewsfeed = genericFetch({apiUrl: "/newsfeed", apiResourceName: "newsfeed"});

const fetchObject = {
  goals: fetchGoals,
  challenges: fetchChallenges,
  newsfeed: fetchNewsfeed
}

export interface UseFetchDataProps extends GenericFetchOptions {}

export const useFetchData = (options) => {
  
  const {isLoading, data} = useQuery({
    queryKey: [options.apiResourceName],
    queryFn: fetchObject[options.apiResourceName],
    keepPreviousData: true // this is to keep the pagination
    // for infinite scroll we need to implement something else
  })

  return {isLoading, data, error: !data}
}
