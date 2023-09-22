import './App.css';
import Menu from './components/Menu';
import UserListPage from './pages/UserListPage.js/UserListPage';
import UserRegisterPage from './pages/UserRegisterPage/UserRegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route index element={<UserRegisterPage/>} />
        <Route path={'/users'} element={<UserListPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
