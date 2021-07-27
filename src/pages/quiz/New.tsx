import { useState } from "react";

import api from "../../state/Api";
import { endPoint } from "../../Config";
import images from "../../images";

import "./DropArea.css";

const NewQuiz = (): JSX.Element => {
  const [title, setTitle] = useState(""); // タイトル
  const [hand, setHand] = useState<number[]>([]); // 手牌
  const [drawn, setDrawn] = useState(""); // ツモ牌
  const [round, setRound] = useState(0); // 局
  const [wind, setWind] = useState(0); // 自風
  const [around, setAround] = useState(1); // 何巡目
  const [dora, setDora] = useState(""); // ドラ
  const [point, setPoint] = useState(25000); // 点数
  const [answer, setAnswer] = useState(""); // 解答
  const [description, setDescription] = useState(""); // 問題詳細

  const [dragging, setDragging] = useState(0);

  const rounds = [
    "東1局",
    "東2局",
    "東3局",
    "東4局",
    "南1局",
    "南2局",
    "南3局",
    "南4局",
  ];

  const winds = ["東", "南", "西", "北"];

  const roundOptions = rounds.map((value, index) => (
    <option key={index} value={index}>
      {value}
    </option>
  ));

  const windOptions = winds.map((value, index) => (
    <option key={index} value={index}>
      {value}
    </option>
  ));

  const addToHand = (index: number) => {
    setHand([...hand, index].sort((a, b) => a - b));
  };

  const getTwoNumber = (num: number) => {
    return ("0" + num).slice(-2);
  };

  // 2桁の数値を文字列として保存する
  const submitQuizInfo = async () => {
    const handInfo = hand.map((value) => getTwoNumber(value)).join();

    const res: { status: number; id: number } = await api.postRequest(
      `${endPoint}quiz`,
      {
        title: title,
        content: handInfo,
        drawn: drawn,
        round: round,
        wind: wind,
        around: around,
        dora: dora,
        point: point,
        answer: answer,
        description: description,
      }
    );
    if (res.status === 200) {
      alert("登録に成功しました");
    } else {
      alert("登録に失敗しました");
    }
  };

  const elements = images.map((image, count) => {
    return (
      <img
        key={count}
        src={image}
        alt={image}
        width="40px"
        onClick={() => addToHand(count)}
        onDragStart={() => setDragging(count)}
        onDragEnd={() => setDragging(-1)}
      />
    );
  });

  const dropArea = (
    text: string,
    state: string,
    setter: (str: string) => void
  ) => (
    <div
      id="drop_area"
      className="drop-area"
      onDrop={() => setter(getTwoNumber(dragging))}
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      {text}:
      {state !== "" ? (
        <img
          src={images[parseInt(state, 10)]}
          alt={images[parseInt(state, 10)]}
          width="40px"
          onDragStart={(e) => e.preventDefault()}
        />
      ) : (
        <></>
      )}
    </div>
  );

  const textForm = (
    text: string,
    state: string,
    setter: (str: string) => void
  ) => {
    return (
      <label>
        {text}:
        <input
          type="text"
          value={state}
          onChange={(e) => setter(e.target.value)}
        />
      </label>
    );
  };

  const numberForm = (
    text: string,
    min: number,
    step: number,
    state: number,
    setter: (num: number) => void
  ) => {
    return (
      <label>
        <input
          type="number"
          min={min}
          value={state}
          step={step}
          onChange={(e) => setter(parseInt(e.target.value, 10) | 0)}
        />
        {text}
      </label>
    );
  };

  const comboBox = (
    name: string,
    state: number,
    setter: (num: number) => void,
    options: JSX.Element[]
  ) => {
    return (
      <label>
        <select
          name={name}
          id={name}
          value={state}
          onChange={(e) => setter(parseInt(e.target.value, 10))}
        >
          {options}
        </select>
      </label>
    );
  };

  return (
    <>
      <h2>何切る作成</h2>
      {elements}
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        {textForm("タイトル", title, setTitle)}
        {comboBox("round", round, setRound, roundOptions)}
        {numberForm("巡目", 1, 1, around, setAround)}
        {comboBox("wind", wind, setWind, windOptions)}家
        {numberForm("点", -100000, 100, point, setPoint)}
        <div></div>
        {dropArea("ツモ", drawn, setDrawn)}
        {dropArea("ドラ", dora, setDora)}
        {dropArea("解答", answer, setAnswer)}
        <div></div>
        <label>
          詳細:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div>
          手牌：
          <div
            id="select-images"
            className="drop-area hand"
            onDrop={() => addToHand(dragging)}
            onDragOver={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            {hand.map((value, index) => (
              <img
                key={index}
                src={images[value]}
                alt={images[value]}
                width="40px"
                onDragStart={(e) => e.preventDefault()}
              />
            ))}
          </div>
        </div>
        <button onClick={() => submitQuizInfo()}>作成</button>
      </form>
    </>
  );
};

export default NewQuiz;
