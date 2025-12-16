import { useEffect, useState } from "react";
import Button from "components/Button/Button";
import { ButtonControl, Card, WrapperForTheForm } from "./styles";
import axios from "axios";

function Homework_10() {
  // Переменная data хранит текущее значение поля ввода
  // Используется для полуения данных с сервера
  const [data, setData] = useState<string | undefined>("");

  // Переменная error хранит сообщение об ошибке, если запрос завершился неудачно
  const [error, setError] = useState<string | undefined>(undefined);

  // URL API, откуда мы будем получать случайную шутку
  const JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

  // Асинхронная функция для получения данных с сервера
  const getJoke = async (JOKE_URL: string) => {
    try {
      // Перед выполнением запроса очищаем предыдущие данные и ошибки
      setData(undefined);
      setError(undefined);

      // Отправляем GET-запрос на сервер
      const response = await fetch(JOKE_URL);

      // Из полученного ответа забираем нужное поле setup и punchline
      const json = await response.json();

      setData(json.setup + " " + json.punchline);

    } catch (error: any) {
      // Если во время запроса произошла ошибка,
      // мы перехватываем её здесь
      setError(error.message + "Some Network Error");
    }
  };

  // Обработчик события клика по кнопке
  // Срабатывает каждый раз, когда пользователь кликает на кнопку
  const onClick = () => {
    // Отправляем GET-запрос на сервер
    getJoke(JOKE_URL);
  };

  // Выполняем запрос при загрузке компонента
  useEffect(() => {
    // Проверка в консоле F12
    console.log("MOUNTING!!!");
    // Отправляем GET-запрос на сервер
    getJoke(JOKE_URL);
  }, []);

  // Выполняем очистку при размонтировании компонента
  useEffect(() => {
    return () => {
      // Этот код выполнится при размонтировании компонента
      console.log("UNMOUNTING!!!");
    };
  }, []);

  return (
    <WrapperForTheForm>
      
      <Card>{ error ? error : data}</Card>

      <ButtonControl>
        <Button name="Request" type="button" onClick={onClick} />
      </ButtonControl>
    </WrapperForTheForm>
  );
}

export default Homework_10;
