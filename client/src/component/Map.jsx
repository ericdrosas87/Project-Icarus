import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import "./style/map.css";

const mapStyles = {
  width: "75VW",
  height: "75VH",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <Map
            className="mapContainer"
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 32.222607,
              lng: -110.974709,
            }}
          >
            <Marker onClick={this.onMarkerClick} name={"Tucson, Arizona"} />
          </Map>
        </div>
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDDPLavyjBmlsZmChJTKgO5T3H5GdBXCrE",
})(MapContainer);
