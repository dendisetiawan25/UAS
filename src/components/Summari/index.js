import styles from "./index.module.css"
import G2 from "../img/G2.PNG"
function Summari() {

    return (
        <div className={styles.Summari}>
            
                <div>
                    <h2 className={styles.Summari__title}>Indonesia Summary</h2>
                    <h3 className={styles.Summari__genre}>Summary Data Indonesia</h3>
                      <div className={styles.Summari_container}>
                          <div className={styles.image}>
                              <div className="card"> 
                                  <div className="container">
                                  <img className={styles.Summari__image}src={G2}alt=""></img>
                                  </div>
                              </div>
                              
                          </div>
                      </div>
                </div>
                
   
             
        </div>
    );
}

 export default Summari;
  