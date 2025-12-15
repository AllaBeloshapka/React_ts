import { useEffect, useState } from "react";
import Button from "components/Button/Button";
import { ButtonControl, Card, WrapperForTheForm } from "./styles";

function Homework_10() {
  // Переменная data хранит текущее значение поля ввода
  // Используется для полуения данных с сервера
  const [data, setData] = useState<string | undefined>("");

  // Переменная joke хранит текст шуток, полученный с сервера
  // Тип string | undefined — потому что данные появляются не сразу
  const [joke, setJoke] = useState<string | undefined>(undefined);

  // Переменная error хранит сообщение об ошибке, если запрос завершился неудачно
  const [error, setError] = useState<string | undefined>(undefined);

  // URL API, откуда мы будем получать случайную шутку
  const JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

  // Обработчик события клика по кнопке
  // Срабатывает каждый раз, когда пользователь кликает на кнопку
  const onClick = () => {
    // Отправляем GET-запрос на сервер
    getJoke();
  };

  // Асинхронная функция для получения данных с сервера
  const getJoke = async () => {
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
      setError(error.message);
    }
  };

  // Выполняем запрос при загрузке компонента
  useEffect(() => {
    // Проверка в консоле F12
    console.log("MOUNTING!!!");
    // Отправляем GET-запрос на сервер
    getJoke();
  }, []);

  // Выполняем запрос при изменении data
  useEffect(() => {
    //Проверяем что data не пустая
    if (!!data){
    // Проверка в консоле F12
    console.log("UPDATING!!!");
    // При изменении data отправляем GET-запрос на сервер
    getJoke();
    }
  }, [data]);

  // Выполняем очистку при размонтировании компонента
useEffect(() => {
  return () => {
    // Этот код выполнится при размонтировании компонента
console.log("UNMOUNTING!!!");
  };
}, []);

  return (
    <WrapperForTheForm>
      <Card></Card>

      <ButtonControl>
        <Button name="Request" type="button" onClick={onClick} />
      </ButtonControl>
    </WrapperForTheForm>
  );
}

export default Homework_10;
