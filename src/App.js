// import logo from './logo.svg';
import './App.css';
import Data from './data/product';

function App() {
  return (
    <>
    <div className="grid-container">

  <header>
    <div>
    <a className="brand" href=""> MOBILESHOP</a>

    </div>
    <div>
      <a href="">Cart</a>
      <a href="">Sign In</a>
    </div>
  </header>
  <main>
   <div className="row center">
     {
       Data.map((val)=>{
         return <div className="card">
   <a href="product.html">
     <img src={val.img} alt="product_image"></img>
   </a>
   <div className="card-body">
     <a href="">
       <h2>{val.model}</h2>
     </a>
   </div>
 </div>
       })
     }
 
   </div>
  </main>
  <footer>
    copyright @ ratnesh agrahari
  </footer>
    </div>
  </>
  );
}

export default App;
