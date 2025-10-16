rafce











































/*
import './App.css'
import { useState, useEffect} from 'react'
 
const Card = ({title}) => {
  const [ count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

useEffect(() => {
console.log(`${title} has been liked: ${hasLiked}`);
}, [hasLiked]);

useEffect( ()   => {
console.log('Card Rendered')

}, []);

  return (
<div className="card" onClick={() => setCount((prevState) => prevState +1 )
}>
  <h2>{title} - {count || null} </h2>

  <button onClick= {() => setHasLiked(!hasLiked)}>
    {hasLiked ? 'Liked' : 'Like'}
  </button>
</div>

  )
}




const App = () => {

  return (
    <div className='card-container'>
    <Card title="Star Wars" rating={5} isCool={true} />
    <Card title="Avatar" />
    <Card title="The Lion King" />
    </div>
  )
}
export default App */
