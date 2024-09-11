import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
function App() {
  return (
   <div className="App">
    <FirstComponent/>
    <TemplateExpressions/>
    <MyComponent/>
    </div>
  );
}

export default App;
