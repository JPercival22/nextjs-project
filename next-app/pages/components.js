import Footer from "../components-list/footer";
import Navbar from "../components-list/navbar";
import styles from '../styles/Home.module.css'

const Components = () => {
    return ( 
        <div className={styles.container}>
            <Navbar />
            <h1>Contact Us</h1>
            <Footer />
        </div>
     );
}
 
export default Components;