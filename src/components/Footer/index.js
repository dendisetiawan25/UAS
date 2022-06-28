import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
function Footer() {
    return (
      
        <div className={styles.container}>
            <footer className={styles.Footer}>
                <h2 className={styles.Footer__title}>Covid APP</h2> 
                <p className={styles.Footer__author}>created by Dendisetiawan</p>
            </footer>
                       <div>
              <ul className={styles.Footer__list}>
                  <li className={styles.Footer__item}>
                      <Link to="/Covid/global">Global</Link></li>
                  <li className={styles.Footer__item}>
                      <Link to="/Covid/Indonesia">Indonesia </Link></li>
                  <li className={styles.Footer__item}>
                      <Link to="/Covid/Provinsi">Provinsi</Link></li>
                  <li className={styles.Footer__item}>
                      <Link to="/Covid/About">About</Link></li>
              </ul>
          </div>
        </div>
    );
  }
  
  export default Footer;
  