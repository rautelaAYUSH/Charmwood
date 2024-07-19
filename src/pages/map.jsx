import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { BorderAllRounded, Margin } from '@mui/icons-material';
import { BiBorderRadius } from 'react-icons/bi';
import { CiTextAlignCenter } from 'react-icons/ci';

const libraries = ['places'];
const mapContainerStyle = {
  width: '50vw',
  height: '60vh',
  BiBorderRadius: '21px',
  margin: 'auto',
};
const center = {
  lat: 30.299248017924743, 
  lng: 78.09208161204957
};
const api_key = 'AIzaSyBoqfDa9MqM6BnJpGJmXrSqxTRLThw_OMo';

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: api_key,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const handleOpenGoogleMaps = () => {
    const url = "https://www.google.com/maps/place/Charmwood+Horse+Riding+Academy+%26+Equestrian/@30.2991878,78.0894638,17z/data=!3m1!4b1!4m6!3m5!1s0x390929b1df679171:0x7836d917c76d697f!8m2!3d30.2991832!4d78.0920387!16s%2Fg%2F11cnn7s2lh?entry=ttu"
    window.open(url, '_blank');
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
      <button onClick={handleOpenGoogleMaps} style={{width: '100%', margin: 'auto'}}>Open in Google Maps</button>
    </div>
  );
};

export default Map;
