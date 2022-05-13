
import './App.css';
import { useState } from 'react';
import Card from './card';

function App(){
  // const [count, setItemCount] = useState(1);
  const [array, setArray]=useState([
  
   { id:1,
    title: "Mug",
    price:"200",
    category:"plastics",
    desc:"regrdgrg",
    img:"../images/2.jpg" },
    {
      id:2,
      title: "Iron",
      price:"200",
      category:"Metals",
      desc:"regrdgrg",
      img:"../images/2.jpg"
    },
    {
      id:3,
      title: "Iron",
      price:"200",
      category:"Metals",
      desc:"regrdgrg",
      img:"../images/2.jpg"
    },
    {
      id:4,
      title: "Iron",
      price:"200",
      category:"Metals",
      desc:"regrdgrg",
      img:"../images/3.jpg"
    }
  ]);
  
  let addToCart = () => {

    // setItemCount(count + 1);
    // console.log(setItemCount);
     console.log("Add To Cart hry");
  };

    return ( 
      <div className="block col-2">
         <header className='row block center'>
          <h2>Products</h2>

          <main className="blodk col-2">
               <div className='.row.center'>
             {
             array.map((e)=>{
               return(
                 
                 <Card key={e.id}   
                 title={e.title}
                 category={e.category}
                 price={e.price}
                 desc={e.desc}
                 image={e.img}
                 action={addToCart}
                 />
               
                
               )
             })
           }
          
    </div>
    </main>
         </header>
  </div>
    );
  
  
  }

export default App;
