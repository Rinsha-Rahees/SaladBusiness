import './App.css';
import Hero from './Components/HeroUI/Hero';
import NavigationBar from './Components/NavigationUI/NavigationBar';

function App() {
  return (
    <div className="App w-full flex items-center justify-start flex-col font-mono min-h-screen">
      <NavigationBar/>
      <Hero/>

    </div>
  );
}

export default App;
