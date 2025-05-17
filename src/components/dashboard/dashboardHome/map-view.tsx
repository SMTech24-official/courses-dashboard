"use client"

import { MapPin } from "lucide-react"
import { useEffect, useRef } from "react"

export default function MapView() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for actual map integration
    // In a real application, you would use a library like Leaflet or Google Maps
    if (mapRef.current) {
      const mapElement = mapRef.current
      mapElement.style.backgroundImage =
        "url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/2.3488,48.8534,11,0/600x400?access_token=pk.placeholder')"
      mapElement.style.backgroundSize = "cover"
      mapElement.style.backgroundPosition = "center"
    }
  }, [])

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-blue-500 rounded-full">
          <MapPin className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-semibold text-gray-700">Live map view</h3>
      </div>

      <div ref={mapRef} className="w-full h-80 rounded-lg bg-gray-200 overflow-hidden">
        {/* Map will be loaded here */}
        {/* For now, using a placeholder */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/map.png"
            alt="Map of Paris"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
