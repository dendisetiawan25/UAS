import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={styles.container}>
      <nav className={styles.navbar}>
          <div>
              <h1 className={styles.navbar__brand}>Covid App</h1>
          </div>
          <div>
              <ul className={styles.navbar__list}>
                  <li className={styles.navbar__item}>
                      <Link to="/Covid/global">Global</Link></li>
                  <li className={styles.navbar__item}>
                      <Link to="/Covid/Indonesia">Indonesia</Link></li>
                  <li className={styles.navbar__item}>
                      <Link to="/Covid/Provinsi">Provinsi</Link></li>
                  <li className={styles.navbar__item}>
                      <Link to="/Covid/About">About</Link></li>
              </ul>
          </div>
      </nav>
        </div>
    )
}
export default Navbar;