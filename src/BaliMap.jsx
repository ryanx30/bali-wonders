import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -8.409518,
  lng: 115.188916,
};

function BaliMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDc0l7ciVVW6mdVquN_iffU1wF2sUsUL54">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
  );
}

export default BaliMap;
