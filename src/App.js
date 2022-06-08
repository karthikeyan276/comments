import logo from './logo.svg';
import './App.css';
import User from './User';
import Posts from './Posts';
import Comments from './Comments';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
     <Routes>
       <Route path='/' element={<User/>}/>
       <Route path='/User/:id/Posts/' element={<Posts/>}/>
       <Route path='/User/:id/Posts/Comments' element={<Comments/>}/>
     </Routes>
    </div>
  );
}

export default App;
