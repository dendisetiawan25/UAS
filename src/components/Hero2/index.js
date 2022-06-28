import styles from "./index.module.css"

function Hero() {
    return (
  
  <div className={styles.Hero}>
            <section className={styles.Hero}>
                <div>
                    <h2 className={styles.Hero__title}>Provinsi</h2>
                    <h3 className={styles.Hero__genre}>Data Covid  Berdasarkan Provinsi</h3>
                      <div className={styles.indonesia_container}>
                          <div className={styles.table}>
                              <div className="card"> 
                                  <div className="container">
                                  <table><tr>
                                <th>No</th>
                               <th>Provinsi</th> 
                                <th>Positif</th>
                                 <th>Sembuh</th>
                                <th>Dirawat</th>
                               <th>Meninggal</th>
                        </tr>
                        <tbody>
          <tr >
            <td>1</td>
          </tr>
          <tr >
            <td>2</td>
          </tr>
          <tr >
            <td>3</td>
          </tr>
          <tr >
            <td>4</td>
          </tr>
          <tr >
            <td>5</td>
          </tr>
        </tbody>
                          </table>
                                  </div>
                              </div>
                              
                          </div>
                          
                      </div>
                </div>
            </section>

            <h2 className={styles.Hero__title}>Form Covid</h2>
            <form>
         <label>
          Provinsi:
       <input type="text" name="name" />
      </label>
      <label>
          Status :
       <input type="text" name="name" />
      </label>
      <label>
          Jumlah:
       <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />

      
         
         </form>
         
        </div>
    );
}

 export default Hero;
  