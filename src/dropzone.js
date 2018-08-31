import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "./constants";

const dropTarget = {
  drop(props, monitor) {
    return { droppableId: props.droppableId };
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    getItem: monitor.getItem(),
    didDrop: monitor.didDrop()
  };
};

class Droppable extends Component {
  render() {
    const { children, connectDropTarget, getItem, didDrop } = this.props;
    return connectDropTarget(
      <div>
        <div
          style={{
            margin: 15,
            width: 200,
            height: 200,
            backgroundColor: "red"
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.THING, dropTarget, collect)(Droppable);
