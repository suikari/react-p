import './App.css';

function Header(){
  return (
    <div>
      <div style={{ color:"red", margin:"5px" , fontSize : "30px" }} >나는 헤더다!!!!!!!!!!!!!</div>
    </div>
  );
}

function Footer(){
  return (
    <div>
      <div>나는 푸터다!!!!!!!!!!!!!</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>Hello React</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
