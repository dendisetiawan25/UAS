import axios from"axios";
import { useEffect, useState } from "react";
import Global from "../../components/Global/Global";
import Hello from "../../components/Hello";
import Summari from "../../components/Summari";
import Provinsi from "./Provinsi";

function Indonesia(){
    const API_KEY= process.env.REACT_APP_API_KEY;
    const URL =`https://covid19.mathdro.id/api=${API_KEY}`;
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
    const [Indonesia,setIndonesia]=useState("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async()=>{

     const response = await axios(URL);
    console.log(response.data.results);
   
  setIndonesia(response.data.results)

},[]);

console.log(Indonesia);
    
    return(
    <div>
        
        <Hello />
        <Global />
        <Summari />
    
    </div>
    );
}

export default Indonesia;