declare interface IStateUserData {
  data: User[]
}

declare interface IValueLogin {
  email: string
  password: string
}

declare interface IStateForScroll {
  stateForScroll: Planets[]
}

declare interface Planets {
  climate: string
  created: string
  diameter: string
  edited: string
  films: string[]
  gravity: string
  name: string
  orbital_period: string
  population: string
  residents: string[]
  rotation_period: string
  surface_water: string
  terrain: string
  url: string
}

declare interface IStatePage {
  page: number
}

declare interface IStateUser {
  token: string | null
}

declare interface IValueRegister {
  confirm: string
  email: string
  nickname: string
  password: string
}
declare interface IFilm {
  id: string
  title: string
}
declare interface IRouterListFunc {
  key: string
  label: string
  privat: boolean
}
