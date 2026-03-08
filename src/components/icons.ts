import L from 'leaflet'

const iconHtml = (emoji: string) =>
  `<div class="map-pin">${emoji}</div>`

const makeIcon = (emoji: string) =>
  L.divIcon({
    html: iconHtml(emoji),
    className: '', // suppress leaflet's default white box
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  })

export const categoryIcons: Record<string, L.DivIcon> = {
  hiking: makeIcon('⛰️'),
  onsen: makeIcon('♨️'),
  sightseeing: makeIcon('🗺️'),
  food: makeIcon('🍴'),
}

const fallbackIcon = makeIcon('📍')

export const getIcon = (category_key: string): L.DivIcon =>
  categoryIcons[category_key] ?? fallbackIcon
