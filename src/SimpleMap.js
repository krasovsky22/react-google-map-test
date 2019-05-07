import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const googleMapKey = process.env.REACT_APP_GOOGLE_MAP_KEY;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  state = {
    center: {
      lat: 41.9,
      lng: -87.624
    }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      this.setState({ center: pos });
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: googleMapKey
          }}
          defaultCenter={this.state.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
