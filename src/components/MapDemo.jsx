import React, { useState, useEffect } from 'react';
import Map from 'react-map-gl/mapbox';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const MapDemo = ({ city }) => {
  const [viewState, setViewState] = useState({
    latitude: 28.6139,
    longitude: 77.209,
    zoom: 10
  });

  useEffect(() => {
    if (!city) return;

    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)}.json?access_token=${MAPBOX_TOKEN}`
        );
        const data = await response.json();
        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].center;
          setViewState((vs) => ({
            ...vs,
            latitude: lat,
            longitude: lng,
            zoom: 10
          }));
        }
      } catch (error) {
        console.error("Error fetching geocoding data:", error);
      }
    };

    fetchCoordinates();
  }, [city]);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md w-full p-0 transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03]">
      {/* Header: Matches your screenshot, left-aligned city name and icon */}
      <div className="flex items-center px-6 py-4 border-b border-gray-100 rounded-t-2xl bg-gray-50">
        <svg xmlns="http://www.w3.org/3000/svg" className="h-6 w-6 text-[rgb(24,158,199)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
        </svg>
        <span className="font-semibold text-lg">{city}</span>
      </div>
      <div className="w-full h-[400px] rounded-b-2xl overflow-hidden border border-gray-200 shadow-md">
        <Map
          {...viewState}
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          style={{ width: '100%', height: '100%' }}
          onMove={evt => setViewState(evt.viewState)}
        />
      </div>
    </div>
  );
};

export default MapDemo;
