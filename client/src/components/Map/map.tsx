import React from "react";
import Wrapper from "./map_wrapper";

interface IMap {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
  defaultLocation:any
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false ,defaultLocation}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<GoogleMap>();
  const startMap = (): void => {
    if (!map) {
      defaultMapStart();
    }
  };
  React.useEffect(startMap);

  const defaultMapStart = (): void => {
    const defaultAddress = new google.maps.LatLng(defaultLocation.Y, defaultLocation.X);
    initMap(4, defaultAddress);
  };

  const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
    if (ref.current) {
      setMap(
        new google.maps.Map(ref.current, {
          zoom: zoomLevel,
          center: address,
          mapTypeControl: mapTypeControl,
          streetViewControl: false,
          rotateControl: false,
          scaleControl: true,
          fullscreenControl: false,
          panControl: false,
          zoomControl: true,
          gestureHandling: "cooperative",
          mapTypeId: mapType,
          draggableCursor: "pointer",
        })
      );
    }
  };

  return <Wrapper ref={ref}>hello</Wrapper>;
};

export default Map;
