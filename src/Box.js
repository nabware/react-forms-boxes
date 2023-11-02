/**
 * Takes object of box properties { backgroundColor, width, height } and
 * returns box div.
 * TODO: include removeBox
 */

function Box({ removeBox, backgroundColor, width, height }) {
// TODO: button className, style
  return (
    <>
      <div style={{ backgroundColor, width, height }} className="Box">
      </div>
      <button onClick={removeBox}>Remove The Box!</button>
    </>
  );
}

export default Box;