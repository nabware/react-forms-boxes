/**
 * Takes object of box properties { backgroundColor, width, height } and
 * returns box div.
 */

function Box({ backgroundColor, width, height }) {
  return (
    <div style={{ backgroundColor, width, height }} className="Box">
    </div>
  );
}

export default Box;