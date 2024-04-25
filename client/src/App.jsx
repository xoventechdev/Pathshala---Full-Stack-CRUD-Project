import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MasterLayout from './components/MasterLayout';
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
import ListModerator from './pages/ListModerator';
import AddModerator from './pages/AddModerator';
import UpdateModerator from './pages/UpdateModerator';
import SettingPage from './pages/SettingPage';
import UserRequest from './pages/UserRequest';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PasswordResetPage from './pages/PasswordResetPage';

const App = () => {
  const isLoggedIn = true;
  const isAdmin = true; 

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <MasterLayout>
                <Route index element={<HomePage />} />
                <Route path="list-book" element={<ListBook />} />
                <Route path="add-book" element={<AddBook />} />
                <Route path="update-book" element={<UpdateBook />} />
                <Route path="list-category" element={<ListCategory />} />
                <Route path="add-category" element={<AddCategory />} />
                <Route path="update-category" element={<UpdateCategory />} />
                <Route path="list-author" element={<ListAuthor />} />
                <Route path="add-author" element={<AddAuthor />} />
                <Route path="update-author" element={<UpdateAuthor />} />
                <Route path="list-moderator" element={<ListModerator />} />
                <Route path="add-moderator" element={<AddModerator />} />
                <Route path="update-moderator" element={<UpdateModerator />} />
                {isAdmin && (
                  <>
                    <Route path="setting" element={<SettingPage />} />
                    <Route path="user-request" element={<UserRequest />} />
                  </>
                )}
              </MasterLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/register" element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/password-reset" element={!isLoggedIn ? <PasswordResetPage /> : <Navigate to="/" />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
