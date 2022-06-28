import { useEffect, useState} from "react";

function Counter(){


  const [angka,setAngka]= useState(0);

    function addAngka(){
        
        setAngka(angka+1);
        console.log(angka);
    }
    //use effec
   
   function updateDOM(){
    

   }
   useEffect(
    function(){
    console.log("Lifecycle:Dimount");
    
    //uji side effect
    document.title= 'Hasil:${angka}';
    
});

   


        console.log("Lifecycle:Dirender");

    return(
        <div>
            <p>hasil:{angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}

export default Counter;