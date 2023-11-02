import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

/**
 * Returns box list.
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(newBox) {
    setBoxes([...boxes, { ...newBox, id: uuid() }]);
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map(b => <Box
        key={b.id}
        backgroundColor={b.backgroundColor}
        width={Number(b.width)}
        height={Number(b.height)}
      />)}
    </div>
  );
}

export default BoxList;