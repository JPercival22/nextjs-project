import Footer from "../components-list/footer"
import Navbar from "../components-list/navbar"
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dignissimos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dignissimos.</p>
            <Footer />
        </div>
      );
}
 
export default About;