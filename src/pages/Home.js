import Hello from "../components/Hello";
import Global from "../components/Global/Global";
import Summary from "../components/Summary";



function Main() {
  return (
    <main>
   <Hello/>
   <Global/>
   <Summary />

    </main>
  );
}

function Home() {
  return (
 <div>   
     
      <Main />
     
      
      
    </div>
  );


}

export default Home;
