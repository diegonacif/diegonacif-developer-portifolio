import diegoImg from '../../assets/diego-chibi-sofia-art.png';
import blob1 from '../../assets/blob1.svg';
import { Parallax } from 'react-scroll-parallax';

export const Hello = () => {

  return (
    <div className="hello-container">
      <section className="hello-img">
        <Parallax 
          translateY={['200px', '200px']}
          opacity={[1, 0]}
          shouldAlwaysCompleteAnimation={true}
          style={{ zIndex: 10 }}
        >
          <img src={blob1} alt="" id="blob1" />
          <img src={diegoImg} alt="diego image" id="diego-img" />
        </Parallax>
      </section>
      <section className="hello-text">
        <Parallax 
          translateX={[0, 15]}
          opacity={[1, 0]}
          shouldAlwaysCompleteAnimation={true}
        >
          <span>Olá, meu nome é</span>
        </Parallax>
        <div className="my-name" translate='no'>
          <Parallax 
            translateX={[2, -15]}
            opacity={[1, 0]}
            shouldAlwaysCompleteAnimation={true}
          >
            <h2>Diego&nbsp;</h2>
          </Parallax>
          <Parallax 
            translateX={[-2, 15]}
            opacity={[1, 0]}
            shouldAlwaysCompleteAnimation={true}
          >
            <h2>Nacif</h2>
          </Parallax>
        </div>
        <Parallax 
          translateX={[0, -15]}
          opacity={[1, 0]}
          shouldAlwaysCompleteAnimation={true}
        >
          <span>Desenvolvedor <b>Front-End</b></span>
        </Parallax>
      </section>
      <section className="hello-buttons">
        <Parallax 
          translateX={[0, -10]}
          opacity={[1, 0]}
          shouldAlwaysCompleteAnimation={true}
        >
          <button id="cv-button">DOWNLOAD CV</button>
        </Parallax>
        <Parallax 
          translateX={[0, 10]}
          opacity={[1, 0]}
          shouldAlwaysCompleteAnimation={true}
        >
          <button id="github-button">GITHUB</button>
        </Parallax>
      </section>
    </div>
  )
}
