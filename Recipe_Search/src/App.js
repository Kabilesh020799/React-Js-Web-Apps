import React, {useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe'
const App = () => {
  const APP_ID = '2854e607';
  const APP_KEY = 'c81a09f3553be79ef2aebd32a242b9f3'
  
  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken')

  useEffect(()=>{
    getRecipe();
  },[query])
  const getRecipe =  async() => {
    const response =  await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={(event)=>setSearch(event.target.value)}></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  )


}

export default App;
