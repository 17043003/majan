import api from "../../state/Api";
import { endPoint } from "../../Config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ListItemPropType } from "./QuizItem";
import HandImage, { HandImagePropType } from "../../components/HandImage";

const ShowQuiz = (): JSX.Element => {
  const [quizInfo, setQuizInfo] = useState<ListItemPropType>();

  const { id }: any = useParams();

  // ページ表示時、一覧を取得
  useEffect(() => {
    api.getRequest(`${endPoint}quiz/${id}`).then((res) => {
      setQuizInfo(res.data);
    });
  }, []);

  const handImageProps: HandImagePropType = {
    content: quizInfo?.content ?? "",
    imageWidth: "50px",
  };

  return (
    <>
      <h1>詳細：</h1>
      {quizInfo ? (
        <div>
          <h1>{quizInfo.title}</h1>
          <HandImage {...handImageProps} />
          <p>{quizInfo.description}</p>
        </div>
      ) : (
        <h1>データが存在しません</h1>
      )}
    </>
  );
};

export default ShowQuiz;
