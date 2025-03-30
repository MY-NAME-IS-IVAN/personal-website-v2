import { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import AlienFacePicture from '../../assets/emojis/alien.png';

import { FaMinus, FaPlus } from 'react-icons/fa';

const GoogleMapsLocation = () => {
  const myCoordinates = {
    lat: 35.99192,
    lng: -115.10983,
  };

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const lightMapStyles = [
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          saturation: 36,
        },
        {
          color: '#000000',
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'on',
        },
        {
          color: '#ffffff',
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#d6d6d6',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#c2c2c2',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#d0d0d0',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e6e6e6',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9d6de',
        },
      ],
    },
  ];

  const mapOptions = {
    styles: lightMapStyles,
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false,
    clickableIcons: false,
    draggable: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
  };

  const minZoom = 3;
  const maxZoom = 12;

  const [zoom, setZoom] = useState(9);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 3, maxZoom));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 3, minZoom));

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid-block location'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={myCoordinates}
        zoom={zoom}
        options={mapOptions}
      />
      <div className='face-picture-container'>
        <img src={AlienFacePicture} alt='' className='face-picture' />
      </div>
      <div className='zoom-buttons'>
        <button
          className={`default-button ${zoom == minZoom ? 'hidden' : ''}`}
          onClick={handleZoomOut}
        >
          <FaMinus />
        </button>
        <button
          className={`default-button ${zoom == maxZoom ? 'hidden' : ''}`}
          onClick={handleZoomIn}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default GoogleMapsLocation;
