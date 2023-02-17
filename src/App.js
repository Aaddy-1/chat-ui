import 'firebase/firestore';
import './App.css'
import SignIn from './auth/signin';
import SignUp from './auth/signup';
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Chat } from './views/chat-window';
import { ChatTest } from './views/chatTest';



function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
        <Routes>
          <Route path='/' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/chat' element={<Chat></Chat>}></Route>
          <Route path='/test' element={<ChatTest></ChatTest>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
