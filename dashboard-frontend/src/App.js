import './App.css';
import Nav from './components/Nav';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import ProjectForm from './components/ProjectForm';
import BlogForm from './components/BlogForm';
import {BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserForm from './components/UserForm';
import Users from './components/Users';
import Profile from './components/Profile'
import AdminMail from './components/AdminMail';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Navigate to='/login' />}  index/>
        <Route exact path='/blogs' element={<Blogs/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/projects' element={<Projects/>} />
        <Route exact path='/users' element={<Users/>} />
        <Route exact path='/create-project' element={<ProjectForm/>} />
        <Route exact path='/create-blog' element={<BlogForm/>} />
        <Route exact path='/create-user' element={<UserForm/>} />
        <Route exact path='/mail' element={<AdminMail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
