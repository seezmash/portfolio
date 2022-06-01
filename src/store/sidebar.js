import { writable } from 'svelte/store'

let sidebarEventsList = writable(null)
let sidebarGroupsList = writable(null)
let sidebarArticlesList = writable(null)

// temp
import tempCategories from '../temp/games'
let randomeSidebarCategories = Array.from(tempCategories).sort(
  () => Math.random() - 0.5
)

import tempArticles from '../temp/blogs'
let randomSidebarArticles = Array.from(tempArticles).sort(
  () => Math.random() - 0.5
)

import tempGroups from '../temp/groups'
let randomSidebarGroups = Array.from(tempGroups)
randomSidebarGroups.sort(() => Math.random() - 0.5)

// sidebar
let tempState_SidebarArticles = null

export const getSidebarArticles = async () => {
  if (tempState_SidebarArticles) {
    return tempState_SidebarArticles
  } else {
    const res = await fetch(
      'https://playground-strapi.herokuapp.com/api/articles?populate=*'
    )
    if (res) {
      let data = await res.json()
      tempState_SidebarArticles = data
        ? data.data.sort(() => Math.random() - 0.5)
        : null
      return tempState_SidebarArticles
    }
    return null
  }
}

export const getSidebarCategories = () => {
  return randomeSidebarCategories
}

export const getSidebarGroups = () => {
  return randomSidebarGroups
}
