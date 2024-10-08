import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom';
import AddSong from './Pages/AddSong';
import AddAlbum from './Pages/AddAlbum';
import ListSong from './Pages/ListSong';
import ListAlbum from './Pages/ListAlbum';
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';

 export const url = 'https://bala-onlinemusic-backend-indh-rek.onrender.com'

const App = () => {
  return (
    <div className=' flex items-start min-h-screen'>
      <ToastContainer />
      <SideBar />

      <div className=' flex-1 h-screen overflow-y-scroll bg-[#f3fff7]'>
          <NavBar/>
          <div className=' pt-8 pl-5 sm:pt-12 sm:pl-12'>
                <Routes>
                  <Route path='/add-song' element= {<AddSong />} />
                  <Route path='/add-album' element= {<AddAlbum />} />
                  <Route path='/list-song' element= {<ListSong />} />
                  <Route path='/list-album' element= {<ListAlbum url={url}/>} />
                </Routes>
          </div>
      </div>
    </div>
  )
}

export default App
