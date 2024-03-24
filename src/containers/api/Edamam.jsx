import React, { useState,useEffect } from 'react'
import axios from "axios" ;

// components
import Recipe from '../Recipe'
import deeplTranslate from './DeepL';
 
const Edamam = () => {
 
 // keyの設置
 const APPLICATION_ID = '07a34ca8'
 const APPLICATION_KEY = '37d8da4d2269357926086d42271ffb58'

 
 // stateの作成
 const [search, setSearch] = useState("")
 const [query, setQuery] = useState("tomato")
 const [recipes, setRecipes] = useState([])
 
 // APIの取得
 const getRecipes = () => {
       axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`).then((res) => {
        // console.log(res.data.hits);
        setRecipes(res.data.hits);
      });
 }
 
 const getSearch = e => {
   e.preventDefault();

		for(var i=0; i < search.length; i++){//言語判別
			if(search.charCodeAt(i) >= 256) {

				const deeplSearch = (async () => {
					const searchResult =  await deeplTranslate(search);
				//  const searchRes = searchResult.map((res) => {
				// 	return res
				//  });
					console.log(searchResult.translations[0].text);
					setQuery(searchResult.translations[0].text);
					setSearch('');
				})

				deeplSearch();
				break;
			} else {
				setQuery(search);
			}
		}
 }
 
 // 入力した時にsearchの更新
 const updateSearch = (e) => {
   setSearch(e.target.value)
 }
 
 useEffect(() => {
   getRecipes();
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [query] )
//  console.log({recipes})
 

 return (
   <>
     {/* <>Edamam</> */}
     <form onSubmit={getSearch}>
       <input type='text' value={search} onChange={updateSearch} />
       <button type='submit'>検索</button>
     </form>
     <div>
       {recipes.map(recipe => {
            console.log(recipe)
            return(
                <Recipe
                key={recipe.recipe.label}
                label={recipe.recipe.label}               
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredientLines}
								yield={recipe.recipe.yield}
                />
            )
        })}
     </div>
   </>
 )
}
 
export default Edamam;