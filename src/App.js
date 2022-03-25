import './App.css';
import fakeData from './fakeData/fakeData.json';
import { useEffect, useState } from 'react';
function App() {

  const [mobiles, setMobiles] = useState([]);
  useEffect(() => {
    setMobiles(fakeData);
  }, [])


  return (
    <div className="">
      <h1>{mobiles.length}</h1>
    </div>
  );
}

export default App;
