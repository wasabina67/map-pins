export type Category = {
  key: string
  label: string
}

export type Location = {
  id: number
  name: string
  category_key: string
  lat: number
  lng: number
  description: string
  visible: boolean
}

export type MapData = {
  categories: Category[]
  locations: Location[]
}
