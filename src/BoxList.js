import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

/**
 * Returns box list.
 *
 * State TODO: visual representation {boxProperties}
 * -boxes: array of box objects
 *
 * Event
 * -addBox: adds a box object to the state boxes
 * -removeBox: removes a box object from the state boxes
 *
 * App -> BoxList -> NewBoxForm, Box
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /**Takes in a box object, and updates the state boxes */
  function addBox(newBox) {
    setBoxes([...boxes, { ...newBox, id: uuid() }]);
  }

  /**Takes in a boxID, and removes specified box from the state boxes */
  function removeBox(boxId) {
    const filteredBoxes = boxes.filter( b => b.id !== boxId);
    setBoxes([...filteredBoxes]);
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map(b => <Box
        key={b.id}
        removeBox = {() => removeBox(b.id)}
        backgroundColor={b.backgroundColor}
        width={Number(b.width)}
        height={Number(b.height)}
      />)}
    </div>
  );
}

export default BoxList;