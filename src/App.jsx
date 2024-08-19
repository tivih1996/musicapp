import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArtistRegister from './components/ArtistRegister';
import ArtistLogin from './components/ArtistLogin';
import ArtistUploadSong from './components/ArtistUploadSong';
import ArtistUploadAlbum from './components/ArtistUploadAlbum';
import ListenerRegister from './components/ListenerRegister';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element = {<Home/>}></Route>
        <Route path='/artist-register' element = {<ArtistRegister/>}></Route>
        <Route path='/artist-login' element = {<ArtistLogin/>}></Route>
        <Route path='/artist-upload-song' element = {<ArtistUploadSong/>}></Route>
        <Route path='/artist-upload-album' element = {<ArtistUploadAlbum/>}></Route>
        <Route path='/listener-register' element = {<ListenerRegister/>}></Route> */}

      </Routes>
    </BrowserRouter>
    
    </>
    
    
  );
}

export default App;
