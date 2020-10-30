import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Polygon,
  Circle,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import MapStyles from "./MapStyles";
import "./style/map.css";
const libraries = ["places"];
const mapContainerStyle = {
  height: "80vh",
  width: "80vw",
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};
const circle_options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: true,
  draggable: true,
  editable: true,
  visible: true,
  radius: 10,
  zIndex: 1,
};

const center = {
  lat: 34.048927,
  lng: -111.093735,
};
const google = window.google;
//Polygon Coordinates
const zoocoords = [
  // Randolph Park/Zoo
  { lat: 32.21389, lng: -110.92643 },
  { lat: 32.2071, lng: -110.926473 },
  { lat: 32.207209, lng: -110.909801 },
  { lat: 32.221438, lng: -110.909738 },
  { lat: 32.221447, lng: -110.917985 },
  { lat: 32.21424, lng: -110.918156 },
  { lat: 32.21389, lng: -110.92643 },
];
const uofacoords = [
  // University of Arizona Campus
  { lat: 32.23855, lng: -110.956742 },
  { lat: 32.235873, lng: -110.956837 },
  { lat: 32.235818, lng: -110.959403 },
  { lat: 32.227814, lng: -110.959419 },
  { lat: 32.227877, lng: -110.944027 },
  { lat: 32.243786, lng: -110.944224 },
  { lat: 32.243682, lng: -110.949763 },
  { lat: 32.238659, lng: -110.949795 },
  { lat: 32.23855, lng: -110.956742 },
];
const tiacoords = [
  // Tucson International Airport
  { lat: 32.133739, lng: -110.961207 },
  { lat: 32.110878, lng: -110.960164 },
  { lat: 32.110078, lng: -110.941738 },
  { lat: 32.097627, lng: -110.926684 },
  { lat: 32.104025, lng: -110.916014 },
  { lat: 32.115548, lng: -110.927957 },
  { lat: 32.12111, lng: -110.934467 },
  { lat: 32.12558, lng: -110.939296 },
  { lat: 32.133962, lng: -110.93905 },
  { lat: 32.133739, lng: -110.961207 },
];
const udallcoords = [
  // Udall Park
  { lat: 32.250628, lng: -110.840688 },
  { lat: 32.242806, lng: -110.840586 },
  { lat: 32.242851, lng: -110.832453 },
  { lat: 32.250614, lng: -110.832388 },
  { lat: 32.250628, lng: -110.840688 },
];
const pimawcoords = [
  // PCC West Campus
  { lat: 32.232647, lng: -111.02023 },
  { lat: 32.225041, lng: -111.020181 },
  { lat: 32.225059, lng: -111.011749 },
  { lat: 32.232765, lng: -111.01185 },
  { lat: 32.232647, lng: -111.02023 },
];
const himmelcoords = [
  // Himmel Park
  { lat: 32.234897, lng: -110.935242 },
  { lat: 32.232297, lng: -110.935274 },
  { lat: 32.232361, lng: -110.931141 },
  { lat: 32.234934, lng: -110.931168 },
  { lat: 32.234897, lng: -110.935242 },
];
const schscoords = [
  // Salpointe Catholic High School
  { lat: 32.257505, lng: -110.952381 },
  { lat: 32.254021, lng: -110.952467 },
  { lat: 32.254067, lng: -110.948406 },
  { lat: 32.257514, lng: -110.948213 },
  { lat: 32.257505, lng: -110.952381 },
];
const chscoords = [
  // Catalina High School
  { lat: 32.246921, lng: -110.918242 },
  { lat: 32.243409, lng: -110.918231 },
  { lat: 32.24345, lng: -110.914063 },
  { lat: 32.246957, lng: -110.914095 },
  { lat: 32.246921, lng: -110.918242 },
];
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
  const onLoad = (circle) => {
    console.log("Circle onLoad circle: ", circle);
  };
  const onUnmount = (circle) => {
    console.log("Circle onUnmount circle: ", circle);
  };
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return (
    <div>
      <h1>Icharus Fence </h1>
      <Locate panTo={panTo} />
      <Search panTo={panTo} />
      <div className="map">
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={7}
          center={center}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          <Circle
            // required
            center={center}
            // required
            options={circle_options}
          />
          <Polygon
            path={zoocoords}
            //key={1}
            options={{
              fillColor: "#000",
              fillOpacity: 0.4,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1,
            }}
          />
          <Polygon
            path={uofacoords}
            //key={1}
            options={{
              fillColor: "#000",
              fillOpacity: 0.4,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1,
            }}
          />
          <Polygon
            path={udallcoords}
            //key={1}
            options={{
              fillColor: "#000",
              fillOpacity: 0.4,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1,
            }}
          />
          <Polygon
            path={pimawcoords}
            //key={1}
            options={{
              fillColor: "#000",
              fillOpacity: 0.4,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1,
            }}
          />
          <Polygon
            path={himmelcoords}
            //key={1}
            options={{
              fillColor: "#000",
              fillOpacity: 0.4,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1,
            }}
          />
          <Polygon
            path={schscoords}
            //key={1}
            options={{
              fillColor: "#000",
              fillOpacity: 0.4,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1,
            }}
          />
          <Polygon
            path={chscoords}
            //key={1}
            options={{
              fillColor: "#000",
              fillOpacity: 0.4,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1,
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
                <h2> Alert</h2>
                <p>
                  Location marked {formatRelative(selected.time, new Date())}
                </p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
}
function Locate({ panTo }) {
  return (
    <div className="locate">
      <button
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
        Get Current Location
      </button>
    </div>
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
        <div className="search-input">
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search your location"
          />
        </div>
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
