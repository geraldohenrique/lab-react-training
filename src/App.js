import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';

function App() {
  return (
    <div className='headsApp'>
      <h1 className='titleComps'>IdCard</h1>
      <div className="App">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <h1 className='titleComps'>Greetings</h1>
      <div className="App">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <h1 className='titleComps'>Random</h1>
      <div className="App">
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <h1 className='titleComps'>BoxColor</h1>
      <div className="App">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <h1 className='titleComps'>CreditCard</h1>
      <div className="App cards">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>

    </div>
  );
}

export default App;
