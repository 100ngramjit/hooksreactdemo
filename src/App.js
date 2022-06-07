
import './App.css';
import hoc from './Components/hoc'
import Counter from './Components/Counter';
import {Link,Routes,Route} from 'react-router-dom'
import About from './Components/About'
import Contacts from './Components/Contacts'
import Private from './Components/Private'
import PrivateRoute from './PrivateRoute'
function App() {
  const EnhancedComp=hoc(Counter)
  return (
    <div className="App">
      <Link to="/about">About</Link> |<Link to="/contacts">Contacts</Link> |<Link to="/private">Private</Link>
       <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route
          path="/private"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        />
    </Routes>
      <EnhancedComp name="Sangram"/>
      
    </div>
  );
}

export default App;
