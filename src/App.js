import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </>  
  );
};

export default App;
