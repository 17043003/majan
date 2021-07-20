import api from "../state/Api";

import images from "../images";

const Quiz = (): JSX.Element => {
  const onClickHandler = (index: number) => {
    console.log(index);
  };

  const elements = images.map((image, count) => {
    return (
      <img
        key={count}
        src={image}
        alt={image}
        onClick={() => onClickHandler(count)}
      />
    );
  });

  return (
    <>
      quiz shown
      {elements}
    </>
  );
};

export default Quiz;
