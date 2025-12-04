import Feedback from "components/Feedback/Feedback";
import { useState } from "react";

function Homework_07() {
  const [like, setLike] = useState<number>(0); // Если мы ничего не передаем в качестве аргумента функции useState(), то 1 элемент массива, который эта функция возвращает === undefined
  const [dislike, setDislike] = useState<number>(0);

  const onLike = () => {
    setLike((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div>
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
      />
    </div>
  );
}

export default Homework_07;
