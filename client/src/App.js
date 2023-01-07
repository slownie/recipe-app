import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Navbar from './components/Navbar';
import MainPage from './screens/MainPage';
import SignupLoginPage from './screens/SignupLoginPage';
import SearchPage from './screens/SearchPage';
import CreatePage from './screens/CreatePage';
import SavedPage from './screens/SavedPage';

function App() {
  const {user} = useAuthContext();

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path="/" exact element={<MainPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
          <Route path="/saved" element={<SavedPage/>}/>
          <Route path="/login" element={user ? <Navigate to="/saved"/> : <SignupLoginPage/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}
export default App;