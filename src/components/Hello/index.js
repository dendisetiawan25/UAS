import styles from "./Hello.module.css";
import gambar1 from "../img/gambar1.png";


console.log(gambar1);

function Hello(){

  return (
   <div className={styles.container}>
 <section className={styles.Hero}>
  
   <div className={styles.Hero__left}><h2 className={styles.Hello__title}>Covid App</h2>
   <h3 className={styles.Hello_genre} >Monitoring Perkembangan Covid</h3>
   <p className={styles.Hello__description}>Covid App adalah layanan masyarakat yang digunakan untuk memonitoring perkembangan Covid19  di indonesia , dilengkapi dengan sistem yang terhubung dengan layanan kesehatan pemerintah untuk melakukan vaksinasi gratis , Yuk ajak keluargamu Vaksin! </p>
   <button className={styles.Hello__button} >Vaksin</button></div>
   <div className={styles.Hero__right}> 
     <img  className={styles.Hello__image} src={gambar1} alt="" /> </div>
    
   
     </section>
   </div>
   
  );
}

export default Hello;

