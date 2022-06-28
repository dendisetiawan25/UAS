import axios from"axios";
import { useEffect, useState } from "react";
import Hello from "../../components/Hello";
import Summary from "../../components/Summary";


function global(){
    const API_KEY= process.env.REACT_APP_API_KEY;
    const URL =`https://covid19.mathdro.id/api=${API_KEY}`;
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
    const [global,setIndonesia]=useState("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async()=>{

     const response = await axios(URL);
    console.log(response.data.results);
   
  setglobal(response.data.results)

},[]);

console.log(global);
    
    return(
    <div>
        
        <Hello />
        <Summary />
    
    </div>
    );
}

export default global;