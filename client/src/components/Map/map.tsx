import React from "react";
import Wrapper from "./map_wrapper";

interface IMap {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
  defaultLocation: any;
}


type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;
type GoogleMarker = google.maps.Marker;

const Map: React.FC<IMap> = ({
  mapType,
  mapTypeControl = false,
  defaultLocation,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<GoogleMap>();
  const startMap = (): void => {
    if (!map) {
      defaultMapStart();
    } else {
      const locationAdress = new google.maps.LatLng(
        defaultLocation.Y,
        defaultLocation.X
      );
      addLocationMarker(locationAdress);
    }
  };
  React.useEffect(startMap);

  const getIconAttributes = (iconColor: string) => {
    return {
      path: "M11.0639 15.3003L26.3642 2.47559e-05L41.6646 15.3003L26.3638 51.3639L11.0639 15.3003 M22,17.5a4.5,4.5 0 1,0 9,0a4.5,4.5 0 1,0 -9,0Z",
      fillColor: iconColor,
      fillOpacity: 0.8,
      strokeColor: "red",
      strokeWeight: 2,
      anchor: new google.maps.Point(30, 50),
    };
  };

  const addLocationMarker = (location: GoogleLatLng): void => {
    const LocationMarkerConst: GoogleMarker = new google.maps.Marker({
      position: location,
      map: map,
      icon: getIconAttributes("#000000"),
    });
  };

  const defaultMapStart = (): void => {
    const defaultAddress = new google.maps.LatLng(
      defaultLocation.Y,
      defaultLocation.X
    );
    initMap(16, defaultAddress);
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
                gestureHandling: 'cooperative',
                mapTypeId: mapType,
                draggableCursor: 'pointer',
            })
        );
    }
};

  return <Wrapper ref={ref}>hello</Wrapper>;
};

export default Map;
