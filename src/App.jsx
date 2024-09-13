import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';

import SigmaBale from './assets/NEY.jpg'
import OutroComponent from './components/OutroComponent.jsx';
import ComponentORemake from './components/ComponentORemake.jsx';

function App() {
  const n = 15
const classDiferente = false
 
return (
    <div className='App'>
      {/* <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/> */}

<ComponentORemake/>
      <h1>olha lá</h1>
      <OutroComponent/>

      <p style={{ color: "blue", padding: "25px", backgroundColor: "red", fontSize: "40px" }}>Paragrafodo App.jsx</p>

      <h3 style={n > 10 ? ({color:"green", backgroundColor:"yellow"}) : ({color:"red", backgroundColor:"clack"})}>
      primeiro estilo</h3>

      <h3 style={n > 10 ? ({color:"green", backgroundColor:"yellow"}) : ({color:"red", backgroundColor:"clack"})}>
      segundo estilo</h3>

      <h2 className={classDiferente ? "red-title" : "normal-litle"}>
        TEXTO COM CLASSE DIFERENTE 1
      </h2>

      <img src='.' width={500} height={500}></img>
      <img src={SigmaBale} alt='sigma' width={500} height={400}></img>
    </div>
  );
}

export default App;
