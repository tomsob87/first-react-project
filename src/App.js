import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import NotFound from './components/NotFound/NotFound';
import List from './components/List/List';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>  
  );
};

export default App;
