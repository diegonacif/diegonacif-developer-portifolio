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
        {/* <Parallax 
          translateY={['120px', '150px']}
          opacity={[0, 0.8]}
          shouldAlwaysCompleteAnimation={true}
          style={{ zIndex: 10 }}
        >
          <div className="gradient-overlay"></div>
        </Parallax> */}
      </section>
      <section className="hello-text">
        <Parallax translateX={[-11, 20]}>
          <span>Olá, meu nome é</span>
        </Parallax>
        <div className="my-name" translate='no'>
          <Parallax translateX={[11, -20]}>
            <h2>Diego&nbsp;</h2>
          </Parallax>
          <Parallax translateX={[-11, 20]}>
            <h2>Nacif</h2>
          </Parallax>
        </div>
        <Parallax translateX={[11, -20]}>
          <span>Desenvolvedor <b>Front-End</b></span>
        </Parallax>
      </section>
      <section className="hello-buttons">
        <button>DOWNLOAD CV</button>
        <button>GITHUB</button>
      </section>
    </div>
  )
}
