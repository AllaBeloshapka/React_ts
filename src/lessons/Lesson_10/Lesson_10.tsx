// Импортируем useEffect и useState из библиотеки react
// useState — нужен для хранения и изменения состояния компонента
// useEffect — нужен для работы с побочными эффектами (запросы, подписки, таймеры и т.д.)
// ChangeEvent — тип события изменения значения input (TypeScript)
import { useEffect, useState, type ChangeEvent } from "react";

// Импортируем axios — библиотеку для выполнения HTTP-запросов к серверу
import axios from "axios";

// Импортируем переиспользуемый компонент Input
import Input from "components/Input/Input";

// Импортируем стилизованные компоненты для верстки страницы
import { PageWrapper, Text, Card, ContainerFacts, ErrorText } from "./styles";

function Lesson_10() {
  // Состояние search хранит текущее значение поля ввода
  // Используется для отслеживания изменений input
  const [search, setSearch] = useState<string>("");

  // Состояние catFactData хранит текст факта о котах, полученный с сервера
  // Тип string | undefined — потому что данные появляются не сразу
  const [catFactData, setCatFactData] = useState<string | undefined>(undefined);

  // Состояние error хранит сообщение об ошибке, если запрос завершился неудачно
  const [error, setError] = useState<string | undefined>(undefined);

  // URL API, откуда мы будем получать случайный факт о котах
  const CAT_FACT_URL = "https://catfact.ninja/fact";

  // Обработчик события изменения значения input
  // Срабатывает каждый раз, когда пользователь вводит или удаляет символ
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Записываем текущее значение input в состояние search
    setSearch(event.target.value);
  };

  // Асинхронная функция для получения данных с сервера
  const getCatFact = async () => {
    try {
      // Перед выполнением запроса очищаем предыдущие данные и ошибки
      // Это нужно, чтобы избежать отображения старой информации
      setCatFactData(undefined);
      setError(undefined);

      // Отправляем GET-запрос на сервер
      const response = await axios.get(CAT_FACT_URL);

      // Из полученного ответа забираем нужное поле fact
      // и сохраняем его в состояние
      setCatFactData(response.data.fact);
      
    } catch (error: any) {
      // Если во время запроса произошла ошибка,
      // мы перехватываем её здесь
      console.log(error.message);

      // Сохраняем текст ошибки в состояние,
      // чтобы показать его пользователю
      setError(error.message);
    }
  };

  // =========================
  // MOUNTING — этап первичной отрисовки компонента
  // =========================
  // useEffect с пустым массивом зависимостей [] выполняется
  // ТОЛЬКО ОДИН РАЗ — в момент, когда компонент появился на странице
  useEffect(() => {
    // Этот код выполнится при первом рендере компонента
    console.log("MOUNTING!!!");

    // Отправляем запрос на сервер сразу после монтирования компонента
    getCatFact();
  }, []);

  // =========================
  // UPDATING — этап обновления компонента
  // =========================
  // Этот useEffect будет срабатывать каждый раз,
  // когда изменяется значение search
  useEffect(() => {
    // Проверяем, что строка не пустая
    // Двойное !! приводит значение к boolean
    if (!!search) {
      console.log("UPDATING!!!");

      // При каждом изменении search выполняем новый запрос
      getCatFact();
    }
  }, [search]);

  // =========================
  // UNMOUNTING — этап размонтирования компонента
  // =========================
  // Если из useEffect вернуть функцию,
  // она выполнится в момент, когда компонент исчезает со страницы
  useEffect(() => {
    return () => {
      // Здесь обычно очищают таймеры, подписки,
      // отменяют запросы и освобождают ресурсы
      console.log("UNMOUNTING!!!");
    };
  }, []);

  return (
    <PageWrapper>
      <Card>
        <ContainerFacts>
          {/* Поле ввода для отслеживания пользовательского ввода */}
          <Input
            id="search-input"
            name="search"
            placeholder="Enter something and get cat fact"
            label="Get new cat fact"
            value={search}
            onChange={onSearchChange}
          />

          {/* Если данные с сервера успешно получены — отображаем текст */}
          {!!catFactData && <Text>{catFactData}</Text>}

          {/* Если произошла ошибка — отображаем сообщение об ошибке */}
          {!!error && <ErrorText>{error}</ErrorText>}
        </ContainerFacts>
      </Card>
    </PageWrapper>
  );
}

// Экспортируем компонент для использования в других частях приложения
export default Lesson_10;
