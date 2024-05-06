import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import ApiAgeGeuss from './agify';

function App() {

  // fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data)=>{
  //   console.log(data);
  // })


  const [catFact , setCatFact] = useState("");

  useEffect(()=>{
    fetchFact()
  },[]);

  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) =>{
    // console.log(res.data)
    setCatFact(res.data.fact);
  });
    
  }

  





  return (

    <div className="App">
      
      <button onClick={fetchFact}>Fetch Data</button>
      <p>{catFact}</p>


      <ApiAgeGeuss />
      
      



    </div>
  );
}

export default App;
