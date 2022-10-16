import './App.css';
import { Favcity } from './components/Favcity';
import { Userinput } from './components/Userinput';
import { TodayOverview } from './components/TodayOverview';
import { Navigation } from './components/Navigation';
import { TemperatureHistory } from './components/TemperatureHistory';
import { WeatherDetails } from './components/WeatherDetails';
import "./api/Weather.js";

function App() {
  return (
    <div className="App flex w-full">
      <div className='w-1/5'>
        <Navigation />
      </div>
      <div className='w-3/5 p-4'>
        <Userinput />
        <TodayOverview />
        <TemperatureHistory />
      </div>
      <div className='w-1/5'>
        <WeatherDetails />
      </div>
    </div>
  );
}

export default App;
