import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import UserComponent from './Components/UserComponent';
import ViewComponent from './Components/ViewComponent';
import AddComponent from './Components/AddComponent';
import DeleteComponent from './Components/DeleteComponent';
import EditComponent from './Components/EditComponent';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route exact path="/" element={<UserComponent/>}/>
          <Route exact path="/edit" element={<EditComponent/>}/>
          <Route exact path="/view" element={<ViewComponent/>}/>
          <Route exact path="/add" element={<AddComponent/>}/>
          <Route exact path="/delete" element={<DeleteComponent/>}/>
        </Routes>
     


    </div>
  );
}

export default App;
