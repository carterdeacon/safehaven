import React from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import { useState } from 'react'


class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: -37.8136,
      lng: 144.9631
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAzG_OvQF8hcn_wl3mcg4NH6czinvIIHrM"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;