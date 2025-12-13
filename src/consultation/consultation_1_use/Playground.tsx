import React, { useEffect } from "react";
import { JSX, useState } from "react";

function Playground(): JSX.Element {
  const [numberOfDogs, setNumber] = useState<number>(0);
  const [numberOfBirds, setBirds] = useState<number>(10);

  function hanleAddDogs(): void {
    setNumber(numberOfDogs + 1);
    console.log(numberOfDogs);
  }

  function handleAddBirds(): void {
    setBirds(numberOfBirds - 1);
    console.log(numberOfBirds);
  }

  // Component lifcycle - жизненный цикл компонента
  // Этапы жизненого цикла:
  // Mount - первая отрисовка компонента на странице
  // Update - изменение
  // Unmount - когда перестает отрисовываться

  // useEffect
  // позволяет вызвать функцию
  // на каком-нибудь из этапов жизни компонента
  // - принимает колбек функцию и второй опиональный параметр -
  // массив зависимостей

  // Пример 1 - пустой массив зависимостей
  useEffect(() => {
    console.log("UseEffect 1 - только при первой отрисовке");
  }, []);

  // Пример 2 - без массива зависимостей
  useEffect(() => {
    console.log("UseEffect 2 - при каждой отрисовке компонента");
  });

  // Пример 3 - с зависимостями
  useEffect(() => {
    console.log(
      "UseEffect 3 - при первичной отрисовке и при изменении первичной numberOfDogs"
    );
  }, [numberOfDogs]);

  return (
    <div>
      <h1>Playgraund</h1>
      <p>Number of dogs: </p>
      <p>Number of bird: </p>
      <button type="button" onClick={hanleAddDogs}>
        Let the dog in
      </button>
      <button type="button" onClick={handleAddBirds}>
        New bid
      </button>
    </div>
  );
}

export default Playground;
