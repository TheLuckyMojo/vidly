import React from "react";

const ListGroup = () => {
  return (
    <div>
      {this.props.listItems.map((item) => (
        <ul key={item._id} className='list-group'>
          <li
            className='page-link'
            onClick={() => this.props.onItemChange(item)}
          >
            {item.name}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ListGroup;
