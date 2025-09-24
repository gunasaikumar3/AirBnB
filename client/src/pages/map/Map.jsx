import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Map({ lng = 78.5462, lat = 17.3354 }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const zoom = 14;
  maptilersdk.config.apiKey = import.meta.env.VITE_MAP_TILER_KEY;

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lng, lat, zoom]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg"
    />
  );
}
