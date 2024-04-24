import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Error404 from './pages/Error404';
import { isAuthenticated } from './Utility/Helper';
import ListBook from './pages/ListBook';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
import ListCategory from './pages/ListCategory';
import AddCategory from './pages/AddCategory';
import UpdateCategory from './pages/UpdateCategory';
import ListAuthor from './pages/ListAuthor';
import AddAuthor from './pages/AddAuthor';
import UpdateAuthor from './pages/UpdateAuthor';
import SettingPage from './pages/SettingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PasswordResetPage from './pages/PasswordResetPage';

const App = () => {
  const isLoggedIn = isAuthenticated();
  const isAdmin = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" /> } />
        <Route path="/list-book" element={isLoggedIn ? <ListBook /> : <Navigate to="/login" /> } />
        <Route path="/add-book" element={isLoggedIn ? <AddBook /> : <Navigate to="/login" /> } />
        <Route path="/update-book" element={isLoggedIn ? <UpdateBook /> : <Navigate to="/login" /> } />
        <Route path="/list-category" element={isLoggedIn ? <ListCategory /> : <Navigate to="/login" /> } />
        <Route path="/add-category" element={isLoggedIn ? <AddCategory /> : <Navigate to="/login" /> } />
        <Route path="/update-category" element={isLoggedIn ? <UpdateCategory /> : <Navigate to="/login" /> } />
        <Route path="/list-author" element={isLoggedIn ? <ListAuthor /> : <Navigate to="/login" /> } />
        <Route path="/add-author" element={isLoggedIn ? <AddAuthor /> : <Navigate to="/login" /> } />
        <Route path="/update-author" element={isLoggedIn ? <UpdateAuthor /> : <Navigate to="/login" /> } />

        <Route path="/setting" element={isLoggedIn && isAdmin ? <SettingPage /> : <Navigate to="/login" /> } />

        <Route path="/register" element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" /> } />
        <Route path="/login" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" /> } />
        <Route path="/password-reset" element={!isLoggedIn ? <PasswordResetPage /> : <Navigate to="/" /> } />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
