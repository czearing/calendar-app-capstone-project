import type { QueryFunctionContext } from "react-query";

type WeatherData = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
  }[];
};

type WeatherQueryKey = [
  _key: string,
  location: { lat: number | null; lng: number | null } | null
];

export async function fetchWeather(
  context: QueryFunctionContext<WeatherQueryKey>
): Promise<WeatherData> {
  const [_key, location] = context.queryKey;

  const res = await fetch(
    `https://api.tomorrow.io/v4/timelines?location=${location?.lat},${location?.lng}&fields=weatherCode&timesteps=1d&units=metric&apikey=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,

    {
      method: "GET",
    }
  );

  const data = await res.json();

  return data;
}
