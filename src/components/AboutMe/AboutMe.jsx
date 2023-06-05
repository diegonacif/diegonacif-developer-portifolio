import { Parallax } from 'react-scroll-parallax';
import '../../App.scss';

export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me">
        <Parallax 
          translateX={['-100px', '0px']}
          opacity={[0, 1]}
          shouldAlwaysCompleteAnimation={true}
          style={{ zIndex: 10 }}
        >
          <span>&lt;</span>
        </Parallax>
        <Parallax 
          translateY={['50px', '0px']}
          opacity={[0, 1]}
          shouldAlwaysCompleteAnimation={true}
          style={{ zIndex: 10 }}
        >
          <h2>Sobre mim</h2>
        </Parallax>
        <Parallax 
          translateX={['100px', '0px']}
          opacity={[0, 1]}
          shouldAlwaysCompleteAnimation={true}
          style={{ zIndex: 10 }}
        >
          <span>&gt;</span>
        </Parallax>
      </div>
      <div className="about-me-text">
        <Parallax 
          translateX={['0px', '0px']}
          opacity={[0, 1]}
          shouldAlwaysCompleteAnimation={true}
          scaleX={[1.2, 1]}
          style={{ zIndex: 10 }}
        >
          <p>Sou desenvolvedor Front-End buscando minha primeira oportunidade na área.</p>
          <p>Nascido em Belém, tenho 34 anos. Sou apaixonado por tecnologia e tudo que envolve o mundo digital.</p>
        </Parallax>
      </div>
      <Parallax 
        translateY={['200px', '0px']}
        opacity={[0, 1]}
        shouldAlwaysCompleteAnimation={true}
        style={{ zIndex: 10 }}
      >
        <div className="my-photo" />
      </Parallax>
    </div>
  )
}
