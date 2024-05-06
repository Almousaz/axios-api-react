import axios from "axios";
import { useState } from "react"






function ExcuseGenerator () {

    // https://excuser-three.vercel.app/v1/excuse/party

    // const [excuse , setExcuse] = useState("");
    // const [party , setParty] = useState("");
    // const [family , setFamily] = useState("");
    // const [office , setOffice] = useState("");


    // const fetchParty = () => {
    //     axios.get(`https://excuser-three.vercel.app/v1/excuse/${party}`).then((res) =>{
    //         console.log(res.data.excuse)
    //         setExcuse(res.data.excuse)
    //     })
    // }
    // const fetchFamily = () => {
    //     axios.get(`https://excuser-three.vercel.app/v1/excuse/${family}`).then((res) =>{
    //         console.log(res.data.excuse)
    //         setExcuse(res.data.excuse)
    //     })
    // }
    // const fetchOffice = () => {
    //     axios.get(`https://excuser-three.vercel.app/v1/excuse/${office}`).then((res) =>{
    //         console.log(res.data.excuse)
    //         setExcuse(res.data.excuse)
    //     })
    // }

    const [generateExcuse , setGenerateExcuse] = useState ("")

    const fetchExcuse = (excuse) => {
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) =>{
            setGenerateExcuse(res.data[0].excuse)
        })
    }




    return(
        <div className="excuseClass">
            <h1>Genearate an Excuse</h1>

            <button onClick={()=> fetchExcuse ("party")}>Party</button>
            <button onClick={()=> fetchExcuse ("family")}>Family</button>
            <button onClick={()=> fetchExcuse ("office")}>Office</button>

            <h1>{generateExcuse}</h1>



        </div>

    )
}

export default ExcuseGenerator