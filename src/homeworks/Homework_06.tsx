
import { v4 } from "uuid";
import "./styles.css";

export default function Homework_06() {
  interface car { brand: string; price: number; isDiesel: boolean }
  const cars: car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const menuCars = cars.map((value) => {

    return (

      <div key={v4()} className="card_car">

        <p className="text">Brand: {value.brand}</p>
        <p className="text">Price: {value.price}</p>
        <p className="text">IsDiesel: {value.isDiesel ? "Yes" : "No"}</p>
        
      </div>
    );
  });

  return <div className="hw_06"> {menuCars} </div>;
}
