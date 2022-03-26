import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Mobile from './component/Mobile/Mobile';
import fakeData from './fakeData/fakeData.json'

function App() {
  const [mobiles, setMobiles] = useState([])

  useEffect(() => {
    setMobiles(fakeData);
  }, [])


  return (
    <div className="">
      <Header />
      <main className='container my-3'>
        <div className="row">
          <div className="col-sm-12 col-md-9 g-4">
            <div className='row row-cols-1 row-cols-md-2 d-flex justify-content-center'>
              {mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile} />)}
            </div>
          </div>

          <div className='col-sm-12 col-md-3'>
            <h1>text</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
