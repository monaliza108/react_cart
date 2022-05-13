import './App';


function Card(props){
    return(
  
        <main  className='Card'>
            <h1>{props.title}</h1>
            <h2>{props.category}</h2>
            <h3>{props.price}</h3>
            <p>{props.category}</p>
            <p>{props.desc}</p>
            <img src={props.image}></img>
       
            <button onClick={props.action} >add cart</button>
            </main>
        
    )}


export default Card ;