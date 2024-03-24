import React from 'react'
 
const Recipe = (props) => {
//  console.log(props.ingredients)
  return (
        <div key={props.label}>
        <h1>{props.label}</h1>
        <img src={props.image} alt='' />
        <p> エネルギー： {props.calories} cal</p>
        <p>
            <strong>栄養成分（1人分）</strong>
        </p>
        <p>
            <strong>材料（{props.yield}人分）</strong>
        </p>
        <ol>
            {props.ingredients.map(ingredient => {
            //  console.log(ingredient.text)
            return (
                <li key={ingredient + ingredient.foodId}>
                    {ingredient}
                </li>
            )
            }
            )}
        </ol>
        </div>
  )
}
 
export default Recipe
