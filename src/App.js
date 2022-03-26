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
  // load data

  const addMobile = (mobile) => {
    const isExit = mobileCart.find(item => item === mobile)
    if (isExit === undefined) {
      if (mobileCart.length > 3) {
        return alert('you can add more then 4')
      }
      else {
        setMobileCart([...mobileCart, mobile])
      }
    }
    else {
      alert('Mobile is already in cart')
    }
  }
  // add mobiles

  const removeItem = (cartItem) => {
    const newCart = mobileCart.filter(item => item !== cartItem)
    setMobileCart(newCart)
  }
  // remove mobiles

  const randomMobile = () => {
    const random = Math.floor(Math.random() * mobileCart.length)
    setMobileCart([])
    setMobileCart([mobileCart[random]])
  }
  // choose one mobile

  const clearAll = () => {
    setMobileCart([])
  }
  // clearAll mobile from cart

  return (
    <div className="">
      <Header />
      <main className='container my-3'>
        <h1 className='text-center fw-bold'>Mobile City</h1>
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className='row row-cols-sm-1 row-cols-md-2 d-flex justify-content-center'>
              {/* add mobiles */}
              {
                mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile} addMobile={addMobile} />)
              }
            </div>
          </div>

          <div className='col-sm-12 col-md-4'>
            {/* remove mobiles */}
            <p className="text-center fw-bold">Total Items : {mobileCart.length}</p>
            {
              mobileCart.map((cartItem) => <ShoppingCard key={cartItem.id} cartItem={cartItem} removeItem={removeItem} />)
            }

            {/* choose one mobile button*/}
            <button onClick={() => randomMobile()} className="card-link btn btn-secondary mt-5 w-50 d-grid gap-2 col-6 mx-auto">
              Select One For Me
            </button>
            <br />

            {/* clear all mobiles button*/}
            <button onClick={() => clearAll()} className="card-link btn btn-warning mt-3 w-50 d-grid gap-2 col-6 mx-auto">
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
