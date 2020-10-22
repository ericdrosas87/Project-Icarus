import React from "react";
//import { useLoadScript, withScriptjs, withGoogleMap, Marker, InfoWindow, GoogleMap, Polygon } from "react-google-maps";
import { GoogleMap, DrawingManager, useLoadScript, Marker, InfoWindow, Polygon } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, } from "@reach/combobox";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import mapStyles from "./mapstyles.jsx";

const libraries = ["places"];
const mapContainerStyle = {
  height: "80vh",
  width: "80vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};
const center = {
  lat: 34.048927,
  lng: -111.093735,
};

//Pre-Blackout Coordinates
const coords = [
  { lat: 32.214176, lng: -110.926567 },
  { lat: 32.207069, lng: -110.926557 },
  { lat: 32.207187, lng: -110.924571 },
  { lat: 32.207227, lng: -110.922353 },
  { lat: 32.207200, lng: -110.920344 },
  { lat: 32.207187, lng: -110.918106 },
  { lat: 32.207177, lng: -110.916305 },
  { lat: 32.207182, lng: -110.913555 },
  { lat: 32.207209, lng: -110.912443 },
  { lat: 32.207486, lng: -110.912448 },
  { lat: 32.207590, lng: -110.912234 },
  { lat: 32.207659, lng: -110.912078 },
  { lat: 32.208217, lng: -110.912180 },
  { lat: 32.208870, lng: -110.911746 },
  { lat: 32.209161, lng: -110.911515 },
  { lat: 32.209252, lng: -110.911348 },
  { lat: 32.209379, lng: -110.911144 },
  { lat: 32.209270, lng: -110.910865 },
  { lat: 32.209247, lng: -110.909829 },
  { lat: 32.216051, lng: -110.909743 },
  { lat: 32.221297, lng: -110.909789 },
  { lat: 32.221424, lng: -110.917988 },
  { lat: 32.214312, lng: -110.918086 },
  { lat: 32.214181, lng: -110.922248 },
  { lat: 32.214176, lng: -110.926567 }];

const blackout = coords.map( ll => {
  return { lat: ll.lng, lng: ll.lat }
});

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h1>
        Icarus{" "}
      </h1>

      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `./maplock.png`,
              origin: new window.google.maps.Point(30, 30),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        <Polygon
            path={blackout}
            //key={1}
            options={{
                fillColor: "#000",
                fillOpacity: 0.4,
                strokeColor: "#000",
                strokeOpacity: 1,
                strokeWeight: 1
            }} 
        />

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                {" "}
                Alert
              </h2>
              <p>Location marked {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      Find my current location!
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 32.222607, lng: () => -110.974709 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
