import React from "react";

const ListGroup = (props) => {
  return (
    <div>
      {props.listItems.map((item) => (
        <ul key={item._id} className='list-group'>
          <li className='page-link' onClick={() => props.onItemChange(item)}>
            {item.name}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ListGroup;
