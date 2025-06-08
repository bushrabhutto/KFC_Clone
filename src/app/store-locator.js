'use client'
import { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 24.8607, // Karachi latitude
  lng: 67.0011  // Karachi longitude
};

const locations = [
  { lat: 24.8607, lng: 67.0011, name: "Shahbaz" },
  // ...add more locations here
];

export default function StoreLocatorMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {locations.map((loc, idx) => (
          <Marker key={idx} position={{ lat: loc.lat, lng: loc.lng }} title={loc.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
