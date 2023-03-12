/*
작성자 서종현
작성일 23.02.20.
웹주소 경로 관리 코드단
*/

// eslint-disable-next-line
import { HashRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

// main 라우터
import Home from "./routes/main/home.js"
import SignUp from "./routes/main/signUp.js"
import LogIn from "./routes/main/logIn.js"
import AboutUs from "./routes/main/aboutUs.js"

// client 라우터
import Coalition from "./routes/client/coalition.js"
import CoalitionPost from "./routes/client/coalitionPost.js"

// provider 라우터
import Request from "./routes/provider/request.js"

import NavBar from "./component/navBar.js"
import FindId from "./routes/main/findId.js"

function App() {

  function Main(){
    return(
      <div>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<LogIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="findid" element={<FindId />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
        </Routes>
      </div>
    )
  }
  
  function Provider(){
    return(
      <div>
        <Routes>
          <Route path="request" element={<Request />}></Route>
        </Routes>
      </div>
    )
  }
  
  function Client(){
    return(
      <div>
        <Routes>
          <Route path="coalition" element={<Coalition />}></Route>
          <Route path="coalition/:postId" element={<CoalitionPost />}></Route>  
        </Routes>
      </div>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/*" element={<Main />}/>
          <Route path="/provider/*" element={<Provider />}/>
          <Route path="/client/*" element={<Client />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
