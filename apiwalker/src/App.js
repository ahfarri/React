
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Starwars from './components/Starwars';
import FormSW from './components/FormSW';


function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <h1>Welcome!</h1>
        <Starwars></Starwars>
        <Switch>
          <Route exact path = "/:category/:id">
          <FormSW></FormSW>
          </Route>
        </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
