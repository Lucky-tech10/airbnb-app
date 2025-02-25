"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

// Custom marker icon
const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconSize: [20, 30],
});

type LeafletMapProps = {
  location: [number, number];
};

export default function LeafletMapComponent({ location }: LeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Skip initialization if no container
    if (!mapContainerRef.current) return;

    // Clean up any existing map
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Create new map instance
    const map = L.map(mapContainerRef.current, {
      center: location,
      zoom: 7,
      scrollWheelZoom: false,
      zoomControl: false,
    });

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add zoom control
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    // Add marker
    L.marker(location, { icon: markerIcon }).addTo(map);

    // Store map instance for cleanup
    mapInstanceRef.current = map;

    // Force map to redraw
    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 100);

    // Clean up on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [location]); // Re-initialize when location changes

  return (
    <div
      ref={mapContainerRef}
      className="h-[50vh] rounded-lg relative z-0"
      style={{ width: "100%" }}
    />
  );
}
