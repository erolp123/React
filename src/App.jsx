import React, { useState } from "react";
import Search from "./Components/Search";
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <main>
<div className="pattern" />

<div className="wrapper" />
<header>
  <img src="./hero.png" alt="Hero Banner"/>
      <h1> Find <span className="text-gradient">Movies</span> You'll Enjoy Without the hassle </h1>
</header>

<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

    </main>
  );
};

const url = 'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c30cbc4b0emshab85b37801fc293p1c8dbejsnbda485768cfd',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export default App;

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
