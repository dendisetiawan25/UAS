import styles from "./index.module.css"
import G1 from "../img/G1.PNG"
function Summary() {

    return (
        <div className={styles.Summary}>
            
                <div>
                    <h2 className={styles.Summary__title}>Global Summary</h2>
                    <h3 className={styles.Summary__genre}>Summary Data Global</h3>
                      <div className={styles.Summary_container}>
                          <div className={styles.image}>
                              <div className="card"> 
                                  <div className="container">
                                  <img className={styles.Summary__image}src={G1}alt=""></img>
                                  </div>
                              </div>
                              
                          </div>
                      </div>
                </div>
                
   
             
        </div>
    );
}

 export default Summary;
  