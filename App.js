import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Component2 from './Component2';
import ComponentForm from './ComponentForm';
import Header from './Header';
import Footer from './Footer';
import Cars from './Cars';
import MilesAhead from './MilesAhead';
import MyCar from './MyCar';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          My 1st React app
        </h1>
        <p>
          Put whatever text you like here
        </p>
        <p>
          But not here, this is mine
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React like a LEGEND!
        </a>
      </header>
      <div className="Components">
        <MyComponent />
        <Component2 />
        <div className="ComponentForm">
          <ComponentForm />
        </div>
        <Header />
        <Cars make="Tesla" model="Model 3" colour="Red" mileage={100000} />
        <Cars make="Audi" model="Q4 e-tron" colour="Silver" mileage={40000} />
        <Cars make="Hyundai" model="Ioniq 5" colour="Blue" mileage={20000} />

        <MilesAhead/>
        <MyCar/>
        <Details/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
