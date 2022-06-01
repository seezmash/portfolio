import { writable } from 'svelte/store'

let sidebarEventsList = writable(null)

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
