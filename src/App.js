import './App.css';
import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Info from './components/info/Info';
import Types from './components/typesWorck/Types';
import Price from './components/price/Price';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Promo/>
        <Info/>
        <Types/> 
        <Price/>    
      </main>
    </div>
  );
}

export default App;
