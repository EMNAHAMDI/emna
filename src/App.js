
import './App.css';
    
import img from './img.jpg';



function App() {
  return (
    <div className="App">
    <h1 class="title red">emna</h1>
    <img src={img }  alt="message"/>
    <img src="/imageInPublic.jpg" />
    <video src="myVideo.mp4"/>
  
      
    </div>
  );
}

export default App;
