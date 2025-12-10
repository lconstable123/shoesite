import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

export default function MapComponent() {
  const mapDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapDiv.current) return;

    const map = new mapboxgl.Map({
      container: mapDiv.current, // <-- tell Mapbox to use this div
      style: "mapbox://styles/mapbox/streets-v12",
      center: [0, 0],
      zoom: 2,
    });

    // optional cleanup when component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapDiv} style={{ width: "100%", height: "400px" }} />;
}
