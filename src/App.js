// import './App.css';
import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Info from './components/info/Info';
import Types from './components/typesWorck/Types';
import Price from './components/price/Price';
import Reviews from './components/reviews/Reviews';
import Examples from './components/examples/Examples';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Promo/>
        <Info/>
        <Types/> 
        <Price/>
        <Reviews/>  
        <Examples/>
      </main>
    </div>
  );
}

export default App;
