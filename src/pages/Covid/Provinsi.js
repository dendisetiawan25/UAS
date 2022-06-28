import axios from"axios";
import { useEffect, useState } from "react";
import Hello from "../../components/Hello";
import Hero2 from "../../components/Hero2";

function Provinsi(){
   
    const API_KEY= process.env.REACT_APP_API_KEY;
    const URL =`https://covid19.mathdro.id/api=${API_KEY}`;
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
    const [Global,setGlobal]=useState("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async()=>{

     const response = await axios(URL);
    console.log(response.data.results);
   
  setGlobal(response.data.results)

},[]);

console.log(Global);
   
    return(
        <div>
            
            <Hello />
            <Hero2 />
           
            
        </div>
        
    );
}

export default Provinsi;