import React, { useRef } from "react";

function Card({ alt, src, id }) {
  const cardReference = useRef(null);

  return (
    <div>
      <img
        ref={cardReference}
        alt={alt}
        src={src}
        id={id}
      />
    </div>
  );
}

export default Card;
