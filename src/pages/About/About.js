import { Link } from 'react-router-dom';
import styles from './About.module.css';


const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Photo <span>Grapys</span></h2>
        <p>Esse projeto consiste em um blog feito em React de front-end e firebase de back-end</p>
        <Link to="/posts/create" className='btn'>
          Criar Post
        </Link>
    </div>
  )
}

export default About