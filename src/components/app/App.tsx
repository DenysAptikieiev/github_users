import React, { useEffect } from 'react';
import '../../style/app.scss';
import UsersList from '../users/UsersList';
import UserInfo from '../userInfo/UserInfo';
import GitHubServices from '../../services/GitHubServices';

import {useDispatch, useSelector} from 'react-redux';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
const App = () => {
  // const dispatch = useDispatch();
  // console.log(dispatch);
  const gitHubServices = new GitHubServices();

  useEffect(() => {
    gitHubServices.getUsers().then((data: any) => {
      console.log(data);
      
    })
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList/>}/>
        <Route path="/userInfo" element={<UserInfo/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
