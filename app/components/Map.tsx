"use client";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

type Marker = {
  lng: number;
  lat: number;
  popupText?: string;
};

export default function MapComponent({
  type,
  searchText,
  markers,
}: {
  type: "stores" | "orders";
  searchText?: string;
  markers?: Marker[];
}) {
  const mapDiv = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map>();
  const geocoderRef = useRef<MapboxGeocoder>();
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  useEffect(() => {
    if (!mapDiv.current) return;

    const map = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [144.9631, -37.8136], // Melbourne
      zoom: 10,
    });
    mapRef.current = map;

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl,
      marker: true, // Adds a pin at the found location
      placeholder: "Search for a location",
    });

    geocoder.on("result", (e: any) => {
      const [lng, lat] = e.result.center;
      map.flyTo({ center: [lng, lat], zoom: 14 });
    });

    geocoderRef.current = geocoder;
    map.addControl(geocoder, "top-left");
    const container = geocoderRef.current?.container;
    if (container) container.style.display = "none";

    return () => map.remove();
  }, [markers]);

  useEffect(() => {
    if (!mapRef.current) return;

    // Remove old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    // Add new markers
    markers?.forEach((m) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([m.lng, m.lat])
        .addTo(mapRef.current!);

      markersRef.current.push(marker);
    });
  }, [markers]);

  useEffect(() => {
    if (!geocoderRef.current) return;
    if (!searchText) return;

    // Set the input value
    const input = geocoderRef.current.container.querySelector<HTMLInputElement>(
      "input.mapboxgl-ctrl-geocoder--input"
    );

    if (input) {
      input.value = searchText;
    }

    // Optionally trigger a search programmatically
    geocoderRef.current.query(searchText);
  }, [searchText]);

  return <div ref={mapDiv} className="w-full h-full" />;
}
