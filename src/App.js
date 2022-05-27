import './App.css';
import Mensaje from './mensaje.js'

const Description = () => {
  return <p>
    Esta es la app del curso fullstack bootcamp
  </p>
}

const App = () => {
  return (
    <div className="App">
        <Mensaje color='red' message='Estamos trabajando'/>
        <Mensaje color='green' message='En un curso'/>
        <Mensaje color='blue' message='en react'/>
        <Description />
    </div>
  );
}

export default App;
