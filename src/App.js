import './index.css';
import { pizzaData } from './data.js';

function App() {
  return (<div className='container'>
  <Header/>
  <Menu/>
  <Footer/>
  </div>);
}
const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return <main className='menu'>
  <h2>Our menu</h2>
  <ul className='pizzas'>
  {numPizzas > 0 ? 
  pizzaData.map(pizza => <Pizza key={pizza.name} name = {pizza.name} image={pizza.photoName} ingredients={pizza.ingredients} soldOut={pizza.soldOut} price={pizza.price}/>) : <p>Sorry, we're working on menu, please visit us later</p>}
  </ul>
  </main>
}
const Pizza = ({name, image, ingredients, soldOut, price}) => {
  return <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
  <img src={image} alt='pizza photo' />
  <div>
  <h3>{name}</h3>
  <p>{ingredients}</p>
  {soldOut ? <span>SOLD OUT</span> : <span>{price}</span>}
  </div>
  </li>
}

const Header = () => {
  return <header className='header'>
    <h1>Fast Pizza Co.</h1>
  </header>
};

const Footer = () => {
  const closeHour = 22;
  const isOpen = new Date().getHours() < closeHour;
  return <footer className='footer'>
    {isOpen ? 
    <div className='order'>
      <p>
        We're open until {closeHour}:00. Please come visit us or order
      </p>
      <button className='btn'>Order</button>
      </div> : <Order/>}
  </footer>
};

const Order = () => {
  return <p>
    We're happy to see you from 12:00 to 22:00
  </p>
}

export default App;
