import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div class="h-screen w-screen bg-coolGray-900 overflow-x-hidden">
   <Router>
     <Switch>
     <Route exact path="/" component={HomePage} />
     
     </Switch>
   </Router>
    </div>
  );
}

export default App;
