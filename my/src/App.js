import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Stati } from './Components/Stati';
import { ShifrDan } from './Components/SamiStati/ShifrDan';
import { PasswordShit } from './Components/SamiStati/PasswordShit';
import { Fishing } from './Components/SamiStati/Fishing';
import { BezopSet } from './Components/SamiStati/BezopSet';
import { SQLShit } from './Components/SamiStati/SQLShit';
import { SovetiKibBez } from './Components/SamiStati/SovetiKibBez';
import { KibOsnov } from './Components/SamiStati/KibOsnov';
import { DDoS } from './Components/SamiStati/DDoS';
import { SmartShit } from './Components/SamiStati/SmartShit';
import Header from './Components/Header';
import { ScrollTop } from './ScrollTop'

function App() {
  return (
    
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Stati" element={<Stati />} />
        <Route path="/Stati/ShifrDan" element={<ShifrDan />} />
        <Route path="/Stati/PasswordShit" element={<PasswordShit />} />
        <Route path="/Stati/Fishing" element={<Fishing />} />
        <Route path="/Stati/BezopSet" element={<BezopSet />} />
        <Route path="/Stati/SQLShit" element={<SQLShit />} />
        <Route path="/Stati/SovetiKibBez" element={<SovetiKibBez />} />
        <Route path="/Stati/KibOsnov" element={<KibOsnov />} />
        <Route path="/Stati/DDoS" element={<DDoS />} />
        <Route path="/Stati/SmartShit" element={<SmartShit />} />
      </Routes>
      <ScrollTop />

    </BrowserRouter>
    
  );
}

export default App;