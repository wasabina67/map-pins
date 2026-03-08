import { useEffect, useState } from 'react'
import './Map.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { getIcon } from './icons'
import type { Location, MapData } from '../types'

export default function Map() {
  const [locations, setLocations] = useState<Location[]>([])
  const [categoryLabels, setCategoryLabels] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then(r => r.json())
      .then((data: MapData) => {
        setLocations(data.locations)
        setCategoryLabels(Object.fromEntries(data.categories.map(c => [c.key, c.label])))
      })
  }, [])

  return (
    <MapContainer
      center={[36.5, 137.5]}
      zoom={6}
      style={{ width: '100vw', height: '100vh' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.filter(l => l.visible).map(l => (
        <Marker key={l.id} position={[l.lat, l.lng]} icon={getIcon(l.category_key)}>
          <Popup>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '2px' }}>{categoryLabels[l.category_key]}</div>
            <strong>{l.name}</strong>
            <br />
            {l.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
