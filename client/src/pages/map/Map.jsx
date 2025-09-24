// import React, { useRef, useEffect } from "react";
// import { createMap } from "maplibre-gl-js-amplify";
// import "maplibre-gl/dist/maplibre-gl.css";
// import "maplibre-gl-js-amplify/dist/public/amplify-map.css";

// const MyMapComponent = () => {
//   const mapContainerRef = useRef(null);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     // If a map already exists, don't re-initialize
//     if (mapRef.current) return;

//     const initializeMap = async () => {
//       const map = await createMap({
//         container: mapContainerRef.current,
//         center: [-122.483696, 37.833818],
//         zoom: 12,
//       });

//       mapRef.current = map;

//       // You can add markers or other layers after the map loads
//       map.on("load", () => {
//         // Add your drawPoints or other functions here
//       });
//     };

//     initializeMap();

//     // Cleanup function
//     return () => {
//       if (mapRef.current) {
//         mapRef.current.remove();
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={mapContainerRef}
//       style={{
//         height: "100vh",
//         width: "100%",
//       }}
//     />
//   );
// };

// export default MyMapComponent;
