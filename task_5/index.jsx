import { useState } from "react";

const useBlock = (mouseEnterCallbak) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return {
    bind: {
      className: isActive ? "active" : "",
      onMouseEnter: mouseEnterHandler
    }
  };
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  const block = useBlock(mouseEnterCallbak);

  return (
      <div {...block.bind}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  const block = useBlock(mouseEnterCallbak);

  return (
      <div {...block.bind}>
        <p>{content}</p>
      </div>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  const block = useBlock(mouseEnterCallbak);

  return (
      <div {...block.bind}>
        <address>
          country: {userData.country}, street: {userData.street}
        </address>
      </div>
  );
};
