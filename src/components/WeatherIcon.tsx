// import { weatherCodes } from "./weatherCode";
import {
  WeatherSunny20Regular,
  WeatherPartlyCloudyDay20Regular,
  WeatherCloudy20Regular,
  WeatherRain20Regular,
  WeatherDrizzle20Regular,
  WeatherFog20Regular,
  WeatherRainSnow20Regular,
  WeatherSnowflake20Regular,
  WeatherHailDay20Regular,
  WeatherThunderstorm20Regular,
} from "@fluentui/react-icons";

// export const weatherCode = {
//   "0": "Unknown",
//   "1000": "Clear, Sunny",
//   "1100": "Mostly Clear",
//   "1101": "Partly Cloudy",
//   "1102": "Mostly Cloudy",
//   "1001": "Cloudy",
//   "2000": "Fog",
//   "2100": "Light Fog",
//   "4000": "Drizzle",
//   "4001": "Rain",
//   "4200": "Light Rain",
//   "4201": "Heavy Rain",
//   "5000": "Snow",
//   "5001": "Flurries",
//   "5100": "Light Snow",
//   "5101": "Heavy Snow",
//   "6000": "Freezing Drizzle",
//   "6001": "Freezing Rain",
//   "6200": "Light Freezing Rain",
//   "6201": "Heavy Freezing Rain",
//   "7000": "Ice Pellets",
//   "7101": "Heavy Ice Pellets",
//   "7102": "Light Ice Pellets",
//   "8000": "Thunderstorm",
// };

type WeatherIconProps = { weatherCode?: number };

export const WeatherIcon = (props: WeatherIconProps) => {
  const { weatherCode } = props;

  switch (weatherCode) {
    case 1000:
    case 1100:
      return <WeatherSunny20Regular />;
    case 1101:
      return <WeatherPartlyCloudyDay20Regular />;
    case 1001:
    case 1102:
      return <WeatherCloudy20Regular />;
    case 2000:
    case 2100:
      return <WeatherFog20Regular />;
    case 4000:
      return <WeatherDrizzle20Regular />;
    case 4001:
    case 4200:
    case 4201:
      return <WeatherRain20Regular />;
    case 5000:
    case 5100:
    case 5101:
      return <WeatherSnowflake20Regular />;
    case 5001:
      return <WeatherRainSnow20Regular />;
    case 7000:
    case 7101:
    case 7102:
      return <WeatherHailDay20Regular />;
    case 8000:
      return <WeatherThunderstorm20Regular />;
    default:
      return <span />;
  }
};
