import './Styles/App.css';
import HomePage from './Containers/HomePageContainer';
import Header from '../src/Containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
