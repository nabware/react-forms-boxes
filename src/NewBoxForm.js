import React, { useState } from "react";

/**
 * Takes object of addBox callback,
 * handles form changes and submission, and
 * returns new box form.
 */

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    backgroundColor: "",
    width: 0,
    height: 0,
  });

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  function handleNewBoxFormSubmit(evt) {
    evt.preventDefault();

    addBox(formData);
  }

  return (
    <div className="NewBoxForm">
      <form>
        <label htmlFor="height">Height</label>
        <input id="height" name="height" onChange={handleChange} />

        <label htmlFor="width">Width</label>
        <input id="width" name="width" onChange={handleChange} />

        <label htmlFor="backgroundColor">Background Color</label>
        <input id="backgroundColor" name="backgroundColor" onChange={handleChange} />

        <button onClick={handleNewBoxFormSubmit}>Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;