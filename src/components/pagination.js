import React from "react";

function Pagination(props) {
  const numbers = ["<<", "1", "2", "3", "4", "5", "6", "7", "8", "9", ">>"];
  const listItems = numbers.map((number) => {
        return <ul> {numbers} </ul>
    })

  return (
    <div>
      {listItems} 
    </div>
    );
}
export default Pagination;