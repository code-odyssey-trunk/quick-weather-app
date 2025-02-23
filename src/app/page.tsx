"use client"
import { useState } from 'react';
import WeatherCard from './components/WeatherCard';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const fetchWeather = async () => {
    setError(''); // Reset error message
    setLoading(true); // Set loading to true
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();
    setLoading(false); // Set loading to false

    if (res.ok) {
      setWeather(data);
    } else {
      setError(data.error); // Set error message from API response
      setWeather(null); // Clear previous weather data
    }
  };

  const clearInput = () => {
    setCity('');
    setWeather(null);
    setError('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-400 to-blue-600">
      <h1 className="text-5xl font-bold text-white mb-6">Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border border-white p-3 mb-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white text-black"
      />
      <div className="flex gap-2 mb-4">
        <button 
          onClick={fetchWeather} 
          className="bg-white text-blue-600 p-3 rounded-lg shadow hover:bg-blue-200 transition duration-300"
        >
          Get Weather
        </button>
        <button 
          onClick={clearInput} 
          className="bg-gray-200 text-black p-3 rounded-lg shadow hover:bg-gray-300 transition duration-300"
        >
          Clear
        </button>
      </div>
      {loading && <p className="text-white">Loading...</p>} {/* Loading indicator */}
      {error && <p className="text-red-300">{error}</p>} {/* Display error message */}
      {weather && (
        <div className="mt-6">
          <WeatherCard weather={weather} />
        </div>
      )}
    </div>
  );
}
