import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
function App() {
  let foodItems = ["Sabzi", "Salad", "Roti", "Milk", "Ghee", "Green Vegetable"];

  return (
    <>
      <Container>
        <h1 className="food-heading"> Healthy Food </h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>
          {" "}
          Above is the list of healthy food that are good for your health and
          well being
        </p>
      </Container>
    </>
  );
}

export default App;
