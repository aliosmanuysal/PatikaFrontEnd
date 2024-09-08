import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [money, setMoney] = useState(100000000000);
  const [products, setProducts] = useState([
    { name: 'Big Mac', price: 3, img: '/images/big-mac.jpg', count: 0 },
    { name: 'Book', price: 15, img: '/images/book.jpg', count: 0 },
    { name: 'Drone', price: 350, img: '/images/drone.jpg', count: 0 },
    { name: 'Boeing 747', price: 2000000, img: '/images/boeing-747.jpg', count: 0 },
    { name: 'Ferrari', price: 1000000, img: '/images/ferrari.jpg', count: 0 },
    { name: 'Cruise Ship', price: 2500000, img: '/images/cruise-ship.jpg', count: 0 },
    { name: 'NBA', price: 450, img: '/images/nba-team.jpg', count: 0 },
    { name: 'Skyscraper', price: 20000000, img: '/images/skyscraper.jpg', count: 0 },
    { name: 'Video Game', price: 25, img: '/images/video-game.jpg', count: 0 },
    { name: 'Yacht', price: 50000000, img: '/images/yacht.jpg', count: 0 },
    { name: 'JetSki', price: 20000, img: '/images/jet-ski.jpg', count: 0 },
    { name: 'Amazon Echo', price:55, img: '/images/amazon-echo.jpg', count: 0 },
    { name: 'Gold', price: 1000, img: '/images/gold-bar.jpg', count: 0 },
    { name: 'Mansion', price: 10000000, img: '/images/mansion.jpg', count: 0 },
    { name: 'Monster Truck', price: 5000000, img: '/images/monster-truck.jpg', count: 0 },
  ]);



  const handleBuy = (index) => {
    const updatedProducts = [...products];
    const productPrice = updatedProducts[index].price;
    if (money >= productPrice) {
      let remainingAmount = productPrice;
      const interval = setInterval(() => {
        setMoney(prev => {
          if (remainingAmount > 0) {
            remainingAmount -= 1;
            return prev - 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, (100/productPrice));
      updatedProducts[index].count += 1;
      setProducts(updatedProducts);
    }
  }

  const handleSell = (index) => {
    const updatedProducts = [...products];
    
    if (updatedProducts[index].count > 0) {
      const productPrice = updatedProducts[index].price;
      let remainingAmount = productPrice;
  
      const interval = setInterval(() => {
        setMoney(prev => {
          if (remainingAmount > 0) {
            remainingAmount -= 1;
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, (100 / productPrice));
  
      updatedProducts[index].count -= 1;
      setProducts(updatedProducts);
    }
  };
  

  return (
    <>
    <div className='container'>
      <div className='bill-gates-container'>
      <img className='bill-gates' src="/images/billgates.jpg" alt="" />
      <h1>Spend Bill Gates' Money</h1>
      </div>
      <h1 className='money'>${money.toLocaleString()}</h1>
      <div className='products'>
        {products.map((product,index) => (
          <div key={index} className='product'>
            <img src={product.img} alt="product.name"/>
            <h2 className='product-name'>{product.name}</h2>
            <h3 className='price'>${product.price.toLocaleString()}</h3>
            <div className='product-controls'>
              <button onClick={() => handleSell(index)} style={{backgroundColor: product.count > 0 ? 'red': 'lightgray',color: product.count > 0 ? 'white': 'black'}}> Sell </button>
              <input type='text' value={product.count} readOnly/>
              <button onClick={() => handleBuy(index)} className='buy'>Buy</button>
            </div>
          </div>
        ))}

      </div>
    </div>
    </>
  )
}

export default App
