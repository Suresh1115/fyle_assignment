import React from "react";


function Hero(props) {
    const lists = ['Javascript', 'angular', 'angularjs', 'Angular 2+'];
    const listItems = lists.map((list) => {
        return <ol> {list} </ol>
    })

   return (
   	<div className="container">
 	  <h1 className="container-title"> {props.title} </h1>
 	  <p className="container-description"> {props.description} </p>
 	  <p className="container-list"> {listItems} </p>
 	</div>
 	);
}
export default Hero;