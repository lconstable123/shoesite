"use client";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; // ✅ correct

export default function MapComponent() {
  const mapDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapDiv.current) return;

    const map = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-122.4, 37.8],
      zoom: 10,
    });

    return () => map.remove();
  }, []);

  return <div ref={mapDiv} className="w-full h-96" />;
}
