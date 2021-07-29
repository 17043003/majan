import { Link, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../../state/Api";
import { endPoint } from "../../Config";

import QuizItem, { ListItemPropType } from "./QuizItem";

const Quiz = (): JSX.Element => {
  const [listItem, setListItem] = useState<ListItemPropType[]>([]);

  // ページ表示時、一覧を取得
  useEffect(() => {
    api.getRequest(`${endPoint}quiz`).then((res) => {
      setListItem([...res]);
    });
  }, []);

  const Items: JSX.Element[] = listItem.map((value, index) => {
    return <QuizItem {...value} key={index} />;
  });

  const { url } = useRouteMatch();
  return (
    <>
      <Link to={`${url}/new`}>何切る作成</Link>
      <h1>一覧</h1>
      {Items}
    </>
  );
};

export default Quiz;
