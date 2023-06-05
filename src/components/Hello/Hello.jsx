import diegoImg from '../../assets/diego-chibi-sofia-art.png';
import blob1 from '../../assets/blob1.svg';
import { Parallax } from 'react-scroll-parallax';

export const Hello = () => {

  return (
    <div className="hello-container">
      <section className="hello-img">
        <img src={blob1} alt="" id="blob1" />
        <img src={diegoImg} alt="diego image" id="diego-img" />
      </section>
      <section className="hello-text">
        <Parallax translateX={[-65, 100]}>
          <span>Olá, meu nome é</span>
        </Parallax>
        <div className="my-name" translate='no'>
          <h2>Diego&nbsp;</h2>
          <h2>Nacif</h2>
        </div>
        <span>Desenvolvedor <b>Front-End</b></span>
      </section>
      <section className="hello-buttons">
        <button>DOWNLOAD CV</button>
        <button>GITHUB</button>
      </section>
    </div>
  )
}
