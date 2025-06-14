import { Map } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

//NOTE: tried to use google maps api but couldn't cuz it requires an google adsense/cloud account its hard to make to account due to payment methods so I used this library of react-map-libre
export const Maps = () => {
  return (
    <div className="w-full h-full relative">
      <Map
        initialViewState={{
          longitude: 7.262, // France coordinates can be of any location :)
          latitude: 44.5,
          zoom: 5,
          pitch: 60, //help in giving a more 3d view makes the experience a bit better if user is using a map
          bearing: 0,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: "0.5rem",
        }}
        mapStyle="https://demotiles.maplibre.org/style.json"
        minZoom={2}
        maxZoom={18}
        reuseMaps
      />
    </div>
  );
};
