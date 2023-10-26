
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Notification from './pages/Notification/Notification'
import QuestionForm from './components/QuestionForm/QuestionForm'
import { useState } from 'react'
function App() {
     const [DialogBoxState ,setShowDialogBox] = useState(false);
  return (
    <>
<Router>
  <Navbar dialogBoxState={DialogBoxState} setShowDialogBox={setShowDialogBox}  />
  <Routes>
    <Route path='/'  exact element={ <Home {...{setShowDialogBox}}  />}></Route>
    <Route path='/notification' exact element= {<Notification/>} ></Route>
  </Routes>
     { DialogBoxState && <QuestionForm DialogBoxCom={setShowDialogBox} /> } 
</Router>

 </>
  )
}

export default App
