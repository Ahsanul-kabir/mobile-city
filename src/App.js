import { useEffect, useState } from 'react';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Mobile from './component/Mobile/Mobile';
import ShoppingCard from './component/ShoppingCard/ShoppingCard';
import fakeData from './fakeData/fakeData.json'

function App() {
  const [mobiles, setMobiles] = useState([])
  const [mobileCart, setMobileCart] = useState([])

  useEffect(() => {
    setMobiles(fakeData);
  }, [])

  const addMobile = (mobile) => {
    const isExit = mobileCart.find(item => item === mobile)
    if (isExit === undefined) {
      setMobileCart([...mobileCart, mobile])
    }
    else {
      alert('Mobile is already in cart')
    }
  }

  const removeItem = (cartItem) => {
    const newCart = mobileCart.filter(item => item !== cartItem)
    setMobileCart(newCart)
  }

  const randomMobile = () => {
    const random = Math.floor(Math.random() * mobileCart.length)
    setMobileCart([])
    setMobileCart([mobileCart[random]])
  }

  const clearAll = () => {
    setMobileCart([])
  }

  return (
    <div className="">
      <Header />
      <main className='container my-3'>
        <div className="row">
          <div className="col-sm-12 col-md-9 g-4">
            <div className='row row-cols-1 row-cols-md-2 d-flex justify-content-center'>
              {mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile} addMobile={addMobile} />)}
            </div>
          </div>

          <div className='col-sm-12 col-md-3'>
            {
              mobileCart.map((cartItem) => <ShoppingCard key={cartItem.id} cartItem={cartItem} removeItem={removeItem} />)
            }

            <button onClick={() => randomMobile()} className="card-link btn btn-secondary my-5 w-75">
              Select One For Me
            </button>
            <br />
            <button onClick={() => clearAll()} className="card-link btn btn-warning my-2 w-75">
              Clear All
            </button>
          </div>
        </div>
      </main>

      <footer className='container mb-5'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
