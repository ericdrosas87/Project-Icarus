import React from "react";

import { GoogleMap, useLoadScript, Marker, InfoWindow, DrawingManager, LoadScript } from "@react-google-maps/api";
==
import { formatRelative } from "date-fns";
import mapStyles from "./mapstyles";
import "./style/map.css";
//import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
//import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
//import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "55vw",
  height: "65vh",
};
const center = {
  lat: 32.222607,
  lng: -110.974709,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
    
      <GoogleMap 
      mapContainerStyle={mapContainerStyle} 
      zoom={12} 
      center={center}
      options={options}
      onClick={onMapClick}
      onLoad={onMapLoad}
      > 

        {markers.map((marker => 
          <Marker 
            key={marker.time.toISOString()} 
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
             url: '/images/maplock.png',
             scaledSize: new window.google.maps.Size( 30, 30),
             origin: new window.google.maps.Point( 30, 0 ),
             anchor: new window.google.maps.Point( 15, 15 ),
            }}
            // onClick={() => {
            //   setSelected(marker);
            // }}
          />
        ))}

        
        {selected ? (
          <InfoWindow 
            position={{ lat: selected.lat, lng: selected.lng }} 
            onCloseClick={() => {
              setSelected(null);}}
          >



          {/* <div>
            <h2>Marker Placed</h2>
            <p>Placed at {formatRelative(selected.time, new Date())}</p>
          </div> */}

        </InfoWindow>) : null}
      </GoogleMap>
    </div>
  );
}

/* function Search() {
  const {ready, value, sugggestions: {status, data}, setValue, clearSuggestion} = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 32.222607, lng: () => -110.974709},
      radius: 200 * 1000,
    },
  });

  return (
    <Combobox onSelect={(address) => {
      console.log(address);
    }}>
      <ComboboxInput value={value} onChange={(e) => {
        setValue(e.target.value);
      }} 
      disabled={!ready}
      placeholder="Enter a location"
      />
    </Combobox>
  )

} */
