export const localStoreService = {
  get: (key: string, initValue = 'null') => {
    const res = JSON.parse(localStorage.getItem(key) ?? initValue)

    return res
  },
  set: (key: string, data: string | string[]) => {
    localStorage.setItem(key, JSON.stringify(data))
  },
  remove: (item: string) => {
    localStorage.removeItem(item)
  },
}

export const pallet = (isDarkMode: boolean) => {
  if (isDarkMode) {
    return {
      dark: 'black',
      color: 'white',
      backGround: '#313442',
      backGroundHeader: 'rgb(0 22 40)',
    }
  }
  return {
    dark: 'white',
    color: 'black',
    backGround: '#e2e2e2',
    backGroundHeader: '#8aa1b9',
  }
}
