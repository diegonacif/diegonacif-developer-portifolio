import diegoImg from '../../assets/diego-chibi-sofia-art.png';
import blob1 from '../../assets/blob1.svg';
import { motion } from 'framer-motion'
import cssImg from '../../assets/techs/css3-logo.png';
import htmlImg from '../../assets/techs/html5-logo.png';
import ReactImg from '../../assets/techs/react.svg';
import JsImg from '../../assets/techs/js.png';
import SassImg from '../../assets/techs/sass-logo-color.svg';
import GithubImg from '../../assets/techs/github-logo.svg';
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
        <div className="animated-techs-wrapper">

          {/* HTML */}
          <motion.div 
            className="tech-ball html"
            transition={{ duration: 1 }} 
            // whileHover={{ scale: 1.1 }}

            whileInView={{ 
              opacity: [0, 1],
              x: ['4rem', '0.75rem'],
              y: ['7rem', '13.5rem']
            }}
          >
            <img src={htmlImg} alt="html logo"/>
          </motion.div>

          {/* CSS */}
          <motion.div 
            className="tech-ball css"
            transition={{ duration: 1 }} 
            whileInView={{ 
              opacity: [0, 1],
              x: ['4rem', '0.75rem'],
              y: ['7rem', '9rem']
            }}
          >
            <img src={cssImg} alt="css logo"/>
          </motion.div>

          

          {/* Github */}
          <motion.div 
            className="tech-ball github"
            transition={{ duration: 1 }} 
            whileInView={{ 
              opacity: [0, 1],
              x: ['4rem', '16.5rem'],
              y: ['8rem', '5.75rem']
            }}
          >
            <img src={GithubImg} alt="github logo" />
          </motion.div>

          {/* Sass */}
          <motion.div 
            className="tech-ball sass"
            transition={{ duration: 1 }} 
            whileInView={{ 
              opacity: [0, 1],
              x: ['4rem', '12.5rem'],
              y: ['8rem', '3rem']
            }}
          >
            <img src={SassImg} alt="sass logo"/>
          </motion.div>

          {/* Javascript */}
          <motion.div 
            className="tech-ball js"
            transition={{ duration: 1 }} 
            whileInView={{ 
              opacity: [0, 1],
              x: ['4rem', '7.75rem'],
              y: ['8rem', '3rem']
            }}
          >
            <img src={JsImg} alt="javascript logo" />
          </motion.div>

          {/* REACT */}
          <motion.div 
            className="tech-ball react"
            transition={{ duration: 1 }} 
            whileInView={{ 
              opacity: [0, 1],
              x: ['4rem', '3.75rem'],
              y: ['8rem', '5.5rem']
            }}
          >
            <img src={ReactImg} alt="react logo"/>
          </motion.div>
        </div>
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
