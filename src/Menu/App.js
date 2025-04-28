import '../App.css';
import Header from '../component/Header';
import Body from '../component/Body';
import Footer from '../component/Footer';




function App() {

  let list =[
    {subId : "1", subName : "java"},
    {subId : "2", subName : "html"},
    {subId : "3", subName : "oracle"},
    {subId : "4", subName : "react"},

  ];

  let numList = [1,3,5,2,4];

  return (
    <div className="App">
      <Header title="헤더" content="과목을 보여줍니다." fnHeader={ (x) => {
        alert(x);
      }} ></Header>
      <Body list={list} fnBody={(x) => {
        alert(x);
      }} ></Body>
      <Footer list={numList} fnFooter={ (x)=>{
        alert(x);
      }}></Footer>
    </div>
  );
}

export default App;
