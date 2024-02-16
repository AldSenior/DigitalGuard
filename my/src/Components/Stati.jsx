import Card from './Card';
import imgs from './imgs/secure.jpg';
import pk2 from './imgs/pk2.png';
import shield from './imgs/shiedlint.jpg';
import pk from './imgs/pk.png';
import sql from './imgs/sql inject.png';
import passw from './imgs/passw.png';
import osnovkibbes from './imgs/osnovkiber.png';
import smartShit from './imgs/smartShit.jpg';
import ddos from './imgs/ddos.png';
import './stati.css';
import { Link } from 'react-router-dom';

export const Stati = () => (
    <>
      <div className="content">
        <img className='pk2' src={pk}></img>
        <div className="line"></div>
    <div className="Stati">
      <Link to="/Stati/ShifrDan" ><Card img={imgs} title="Шифрование данных" desc="Защитите свои данные"  /></Link>
      <Link to="/Stati/Fishing" ><Card img={pk2} title="Фишинговые атаки" desc="Будьте бдительны" /></Link>
      <Link to="/Stati/BezopSet" ><Card img={shield} title="Безопасная сеть" desc="Защитите свои данные" /></Link>
      <Link to="/Stati/KibOsnov" ><Card img={pk} title="Основы кибербезопасности" desc="Изучите основы" /></Link>
      <Link to="/Stati/PasswordShit" ><Card img={passw} title="Защищённые пароли" desc="Защитите свои учетные записи" /></Link>
      <Link to="/Stati/SovetiKibBez" ><Card img={osnovkibbes} title="Советы по кибербезопасности" desc="Изучите основы" /></Link>
      <Link to="/Stati/SQLShit" ><Card img={sql} title="SQL-Инъекции и защита от них" desc="Изучите основы" /></Link>
      <Link to="/Stati/DDos" ><Card img={ddos} title="DDoS-атаки и способы защиты от них" desc="Будьте бдительны" /></Link>
      <Link to="/Stati/SmartShit" ><Card img={smartShit} title="Как защитить свои данные на мобильных устройствах" desc="Будьте бдительны" /></Link>


    </div>
    </div>
    </>
  );
  
