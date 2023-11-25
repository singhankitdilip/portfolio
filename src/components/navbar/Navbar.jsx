import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
            <motion.span
            initial={{opacity:0 ,scale:0}}
            animate={{opacity:1 ,scale:1}}
            transition={{duration:0.5}}
            >Ankit Singh</motion.span>
            <motion.div className="social">
                <a href="https://github.com/singhankitdilip"><img src="/github.png" alt="github" /></a>
                <a href="https://linkedin.com/in/singhankitdilip"><img src="/linkedin.png" alt="linkedin" /></a>

                
            </motion.div>
        </div>
    </div>
    
  )
}

export default Navbar