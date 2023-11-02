import React, { useState } from "react";

const DEFAULT_FORM_DATA ={
  backgroundColor: "",
  width: "",
  height: ""}

/**
 * Takes object of addBox callback,
 * handles form changes and submission, and
 * returns new box form.
 *
 * State
 * -formData: object of box properties
 *
 * Props
 * -addBox: callback function for adding a box object to the state boxes
 *
 * Event
 * -handleChange: updates formData state
 * -handleNewBoxFormSubmit:
 */

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({...DEFAULT_FORM_DATA});

  function handleChange(evt) {
    // Destructure fieldName and value
    const fieldName = evt.target.name;
    const value = evt.target.value;

    // TODO: make copy and modify to keep pattern
    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  function handleNewBoxFormSubmit(evt) {
    evt.preventDefault();

    addBox(formData);
    setFormData({...DEFAULT_FORM_DATA});
  }
// TODO: Break up input, use onSubmit instead of onClick for forms
  return (
    <div className="NewBoxForm">
      <form>

        <label htmlFor="height">Height</label>
        <input id="height" name="height" onChange={handleChange} value={formData.height}/>

        <label htmlFor="width">Width</label>
        <input id="width" name="width" onChange={handleChange} value={formData.width}/>

        <label htmlFor="backgroundColor">Background Color</label>
        <input id="backgroundColor" name="backgroundColor" onChange={handleChange} value={formData.backgroundColor}/>

        <button onClick={handleNewBoxFormSubmit}>Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;