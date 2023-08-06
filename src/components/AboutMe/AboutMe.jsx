import { motion } from 'framer-motion'
import '../../App.scss';

export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me">
        <motion.span 
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
        >
          &lt;
        </motion.span>
        <motion.h2
          transition={{ duration: 1 }}
          initial={{ opacity: 0, scale: 0.85 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
        >
          Sobre mim
        </motion.h2>
        <motion.span 
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
        >
          &gt;
        </motion.span>
      </div>
      <motion.div 
        className="about-me-text"
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.75 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
      >
        {/* <p>Sou desenvolvedor Front-End buscando minha primeira oportunidade na área.</p>
        <p>Nascido em Belém, tenho 34 anos. Sou apaixonado por tecnologia e tudo que envolve o mundo digital.</p> */}
        <p>Sou alguém que encontra alegria nas pequenas coisas da vida e acredita que as melhores histórias são construídas com as pessoas que amamos.</p>
        <p>Sou casado com a Sofia, e tenho um cachorrinho que se chama Castiel.</p>
        <p>A natureza é meu refúgio, onde encontro paz e inspiração. Por isso prefiro vastos cenários naturais, do que os grandes centros urbanos, e planejo viajar e expandir esses horizontes para outros países.</p>
        <p>Na minha vida cotidiana, tiro algum tempo para jogar RPG com os amigos ou assistir animes, onde as histórias ganham vida.</p>
        <p>Na música eu me sinto conectado ao universo. Enquanto toco violão, me sinto feliz e tranquilo. De forma amadora, cheguei até a tocar em um banda de J-Rock.</p>
        <p>Sou alguém que busca a profundidade nas experiências, que encontra beleza na simplicidade e que está sempre em busca de novas formas de descobrir o mundo e a mim mesmo.
        </p>
      </motion.div>
      <motion.div 
        className="my-photo"
        transition={{ duration: 2 }} 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
      />
    </div>
  )
}
