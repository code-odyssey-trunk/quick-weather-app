import React from 'react';
import Image from 'next/image';

interface WeatherCardProps {
  weather: {
    location: {
      name: string;
      region: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  };
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{weather.location.name}</h2>
      <p>{weather.location.region}, {weather.location.country}</p>
      <p className="text-2xl">{weather.current.temp_c}°C</p>
      <p>{weather.current.condition.text}</p>
      <Image 
        src={`https:${weather.current.condition.icon}`}
        alt={weather.current.condition.text} 
        width={50}
        height={50}
      />
    </div>
  );
};

export default WeatherCard; 