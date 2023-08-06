import diegoImg from '../../assets/diego-chibi-sofia-art.png';
import blob1 from '../../assets/blob1.svg';
import { motion } from 'framer-motion'
import '../../App.scss';

export const Hello = () => {

  return (
    <div className="hello-container">
      <motion.section 
        transition={{ duration: 2 }} 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        className="hello-img"
      >
        <img src={blob1} alt="" id="blob1" />
        <img src={diegoImg} alt="diego image" id="diego-img" />
      </motion.section>
      <section className="hello-text">
        <motion.span
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: -10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
        >
          Olá, meu nome é
        </motion.span>
        <div className="my-name" translate='no'>
          <motion.h2
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
          >Diego&nbsp;</motion.h2>
          <motion.h2
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
          >
            Nacif
          </motion.h2>
        </div>
        <motion.span
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
        >
          Desenvolvedor <b>Front-End</b>
        </motion.span>
      </section>
      <section className="hello-buttons">
        <motion.button 
          id="cv-button"
          transition={{ duration: 0.25, delay: 0.9 }}
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
        >
          DOWNLOAD CV
        </motion.button>
        <motion.button 
          id="github-button"
          transition={{ duration: 0.25, delay: 1.1 }}
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
        >
          GITHUB
        </motion.button>
      </section>
    </div>
  )
}
