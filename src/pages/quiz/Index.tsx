import { Link, useRouteMatch } from "react-router-dom";

import api from "../../state/Api";
import images from "../../images";

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

  const { url } = useRouteMatch();
  return (
    <>
      <Link to={`${url}/new`}>何切る作成</Link>
      <h1>一覧</h1>
      {elements}
    </>
  );
};

export default Quiz;
