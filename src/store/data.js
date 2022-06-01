import { writable } from 'svelte/store'

let homeEventsList = writable(null)
let homeGroupsList = writable(null)
let homeArticlesList = writable(null)

// games
import tempCategories from '../temp/games'
let randomeCategories = Array.from(tempCategories)
randomeCategories.sort(() => Math.random() - 0.5)
let randomeSidebarCategories = Array.from(tempCategories)
randomeSidebarCategories.sort(() => Math.random() - 0.5)

// articles
import tempArticles from '../temp/blogs'
let randomSidebarArticles = Array.from(tempArticles)
randomSidebarArticles.sort(() => Math.random() - 0.5)
let randomHomePageArticles = Array.from(tempArticles)
randomHomePageArticles.sort(() => Math.random() - 0.5)
let randomArticlesPageArticles = Array.from(tempArticles)
randomArticlesPageArticles.sort(() => Math.random() - 0.5)
let randomGroupsPageArticles = Array.from(tempArticles)
randomGroupsPageArticles.sort(() => Math.random() - 0.5)
let randomStreamersPageArticles = Array.from(tempArticles)
randomStreamersPageArticles.sort(() => Math.random() - 0.5)

// events
import tempEvents from '../temp/events'
let randomHomePageEvents = Array.from(tempEvents)
randomHomePageEvents.sort(() => Math.random() - 0.5)
let randomEventsPageEvents = Array.from(tempEvents)
randomEventsPageEvents.sort(() => Math.random() - 0.5)

// groups
import tempGroups from '../temp/groups'
let randomHomePageGroups = Array.from(tempGroups)
randomHomePageGroups.sort(() => Math.random() - 0.5)
let randomGroupsPageGroups = Array.from(tempGroups)
randomGroupsPageGroups.sort(() => Math.random() - 0.5)

// streamers
import tempStreamers from '../temp/streamers.js'
let randomHomeStreamers = Array.from(tempStreamers)
randomHomeStreamers.sort(() => Math.random() - 0.5)
let randomStreamersPageStreamers = Array.from(tempStreamers)
randomStreamersPageStreamers.sort(() => Math.random() - 0.5)

// shared
let tempState_TrendingBarCategories

export const getTrendingCategories = async () => {
  if (tempState_TrendingBarCategories) {
    return tempState_TrendingBarCategories
  } else {
    const res = await fetch(
      'https://playground-strapi.herokuapp.com/api/categories?populate=*'
    )
    if (res) {
      let data = await res.json()
      tempState_TrendingBarCategories = data
        ? data.data.sort(() => Math.random() - 0.5)
        : null
      return tempState_TrendingBarCategories
    }
    return null
  }
}

// home page
export const getHomePageArticles = () => {
  return randomHomePageArticles
}

export const getHomePageEvents = () => {
  return randomHomePageEvents
}

export const getHomePageGroups = () => {
  return randomHomePageGroups
}

// events page
export const getEventsPageEvents = () => {
  return randomEventsPageEvents
}

// streamers
export const getStreamersPageArticles = () => {
  return randomStreamersPageArticles
}

export const getStreamersPageStreamers = () => {
  return randomStreamersPageStreamers
}

// groups page
export const getGroupsPageGroups = () => {
  return randomGroupsPageGroups
}

export const getGroupsPageArticles = () => {
  return randomGroupsPageArticles
}

export const getSidebarCategories = () => {
  return randomeSidebarCategories
}
