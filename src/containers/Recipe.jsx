import React from 'react'
import "./Recipe.css";

const Recipe = (props) => {
 console.log(props.shareAs)
  return (
    <div className='recipe'>
        <div key={props.label}></div>
        <h1 className='label'>{props.label}</h1>
        <img src={props.image} alt='' />
        <p className='calories'> エネルギー： {props.calories} cal</p>
        {/* <p>
            <strong>栄養成分（1人分）</strong>
        </p> */}
        <p>
            <strong>材料（{props.yield}人分）</strong>
        </p>
        <ol className='ingredients' >
            {props.ingredients.map(ingredient => {
            //  console.log(ingredient.text)
            return (
                <li className='ingredient' key={ingredient + ingredient.foodId}>
                    {ingredient}
                </li>
            )
            }
            )}
        </ol>
        <div className='btn'>
            <a href={props.shareAs} target="blank">詳細ページ</a>
        </div>
    </div>
  )
}
 
export default Recipe
