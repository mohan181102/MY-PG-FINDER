import React, { useState } from "react";

function Caroseaol() {
  const [current, setcurrent] = useState(0);
  const image = [
    {
      source: "/markus-spiske-g5ZIXjzRGds-unsplash.jpg",
    },
    {
      source: "/marten-bjork-n_IKQDCyrG0-unsplash.jpg",
    },
    {
      source: "/photo-1578683010236-d716f9a3f461.jpg",
    },
    {
      source: "/photo-1512918728675-ed5a9ecdebfd.jpg",
    },
  ];

  return (
    <>
      <div>
        <image/>
        {/* prev */}
        <button></button>
        {/* next */}
        <button></button>
      </div>
    </>
  );
}

export default Caroseaol;
