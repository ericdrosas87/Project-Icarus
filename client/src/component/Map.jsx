import React from "react";
import { useLoadScript, GoogleMap, Marker, infoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";


const libraries = ["places"];
const mapConstainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 32.222607,
  lng: -110.974709,
};

function Map() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
      })
    
      if (loadError) return "Error loading maps";
      if(!isLoaded) return "Loading Maps";
    
      return ( <div>
        <GoogleMap 
          mapConstainerStyle={mapConstainerStyle} 
          zoom={8} 
          center={center}
          ></GoogleMap>
        </div>
      )
}

export default Map;
