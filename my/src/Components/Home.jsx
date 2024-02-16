import "../Components/Home.css";
import Image1 from "./imgs/Image.png";
import Image2 from "./imgs/Image2.png";
import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <div className="Home">
           <div className="frame-top">
        <p className="montserrat center"><strong>Как работает DigitalGuard?</strong></p>
        <p className="noto-sans marg"><strong>Основы для нового пользователя</strong></p>
        <p className="montserrat textt">Как новый пользователь, вы можете начать работу с DigitalGuard, не разбираясь в технических деталях. Здесь вы сможете получить доступ к широкому спектру статей и ресурсов, связанных с кибербезопасностью. Будьте в курсе событий и повышайте свою безопасность в Интернете!</p>
        <image className="image1" src={Image1}></image>

      </div>
      <div className='frame-center'>
        <div className='cardos'>
        <image className="image2" src={Image2}></image>
        <p className='montserrat zag2'>DigitalGuard и кибербезопасность</p>
        <p className='montserrat textt2'>DigitalGuard- это ресурс для повышения кибербезопасности. Наша платформа предоставляет ценные рекомендации и ресурсы для защиты вашего присутствия в Интернете. Благодаря нашему удобному интерфейсу вы можете изучать огромное количество информации и опережать развитие киберугроз.</p>
        <Link to="Stati"><button className='btn1'> Приступить</button></Link>
        
        </div>
      </div>
        </div>
  </>
);

