// Импортируем useEffect из библиотеки react, чтобы иметь возможность ловить конкретный жизненный этап компонента
// и делать какие-то действия в зависимости от этапа
import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";

import Input from "components/Input/Input";

import { PageWrapper, Text, Card, ContainerFacts, ErrorText } from "./styles";

function Lesson_10() {
  const [search, setSearch] = useState<string>("");
  const [catFactData, setCatFactData] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const CAT_FACT_URL = "https://catfact.ninja/fact";

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getCatFact = async () => {
    try {
      // Тут мы пишем логику по успешно пришедшим данным с сервера
      setCatFactData(undefined);
      setError(undefined);
      const response = await axios.get(CAT_FACT_URL);
      setCatFactData(response.data.fact);
    } catch (error: any) {
      // Тут мы обрабатываем ошибки
      console.log(error.message);
      setError(error.message);
    }
  };

  // MOUNTING - этап зарождения(первой отрисовки) нашемго компонента Lesson_10
  // 1 аргумент - это функция коллбэк, которая доожна выполниться в опрееленный жизненный этап компонента
  // 2 аргумент - массив зависимостей, с помощью него мы можем определить конкретный жизненный этап компонента, при котором функция коллбэк
  // указанная в качестве 1 аргумента должна выполниться
  // MOUNTING - если мы прокидываем пустой массив во 2 аргументе, то мы определяем 1 фазу жизненного цикла компонента, а именно MOUNTING
  useEffect(() => {
    // Например: мы можем отправить запрос на сервер с целью получения данных пользователя, в момент первичной отрисовки компонента(первичный рендеринг), то есть эта функция коллбэк выполниться лишь 1 раз!!!
    console.log("MOUNTING!!!");
    getCatFact();
  }, []);

  // UPDATING!!! - повтороное обновление(перерендер) компонента
  useEffect(() => {
    if (!!search) {
      console.log("UPDATING!!!");
      getCatFact();
    }
  }, [search]);

  // UNMOUTING!!! - размонтирование(исчезновение) компонента
  useEffect(() => {
    return () => {
        // Все что у нас выполниться в функции, которая возвращается из функции коллбэк(переданную в качестве 1 аргумента useEffect) - будет жизненным этапом UNMOUNTING
      console.log("UNMOUNTING!!!");
    };
  }, []);

  return (
    <PageWrapper>
      <Card>
        <ContainerFacts>
          <Input
            id="search-input"
            name="search"
            placeholder="Enter something and get cat fact"
            label="Get new cat fact"
            value={search}
            onChange={onSearchChange}
          />
          {!!catFactData && <Text>{catFactData}</Text>}
          {!!error && <ErrorText>{error}</ErrorText>}
        </ContainerFacts>
      </Card>
    </PageWrapper>
  );
}

export default Lesson_10;
