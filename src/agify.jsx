import Axios from "axios";
import { useState } from "react"




function ApiAgeGeuss () {


    // https://api.agify.io/?name=hasan
    
    const [name , setName] = useState("");
    const [predictedResult , setPredictedResult] = useState({});

    const fetchAge = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            console.log(res.data);
            setPredictedResult(res.data);
        });
    };



          


    return(

        <div className="inputData">
            <input placeholder="ex. ali ..." onChange={(event) => setName(event.target.value)} />
            <button onClick={fetchAge}>Predict Age</button>
            <h1>age is : {predictedResult?.age}</h1>
            <h1>name is : {predictedResult?.name}</h1>
        </div>

    )
}

export default ApiAgeGeuss
