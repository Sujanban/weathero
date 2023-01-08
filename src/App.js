import './App.css';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Counter } from './pages/Counter';
import { Contact } from './pages/Contact';
import { Favourate } from './pages/Favourate';
import { Route, Routes } from 'react-router-dom';
import { Weather } from './pages/Weather';

function App() {
  return (
    <div className="App flex w-full">
      <Navigation />
      <Routes>
        <Route path='/' element={<Dashboard />} exact />
        <Route path='/favourate' element={<Favourate name='sujan' />} exact />
        <Route path='/counter' element={<Counter />} exact />
        <Route path='/contact' element={<Contact />} exact />
        <Route path='/weather' element={<Weather/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
