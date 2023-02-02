import React, { Component } from "react";

class ListGroup extends Component {
  render() {
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
  }
}

export default ListGroup;
