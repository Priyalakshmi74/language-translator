import Menu from './components/Menu';
import MyTranslator from './components/MyTranslator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/translator" element={<MyTranslator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
