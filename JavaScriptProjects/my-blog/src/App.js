import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
function App() {
 return (
 <div className="App">
 <Navbar/>
 <div className="content">Welcome to My App</div>
 <Home />
 </div>
 );
}
export default App;