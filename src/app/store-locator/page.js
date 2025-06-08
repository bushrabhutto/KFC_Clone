'use client'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function store_locator() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="w-full flex justify-center items-center py-4">
      <div className="w-full max-w-3xl h-64 md:h-96">
        <MapContainer center={[24.8607, 67.0011]} zoom={13} className="w-full h-full rounded-lg overflow-hidden" style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[24.8607, 67.0011]}>
            <Popup>Shahbaz</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}
