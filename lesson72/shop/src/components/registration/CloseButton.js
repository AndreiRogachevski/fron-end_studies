import { useState } from 'react';

export default function CloseButton({ closeForm }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="close-button"
      onClick={() => closeForm(false)}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {!isHover ? (
        <i className="bi bi-x-square-fill"></i>
      ) : (
        <i className="bi bi-x-square"></i>
      )}
    </div>
  );
}
