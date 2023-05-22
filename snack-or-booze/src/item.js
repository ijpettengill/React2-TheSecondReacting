import React, { useContext } from "react";
import { Redirect, useParams, useLocation } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import MenuContext from "./MenuContext";
import SnackOrBoozeApi from "./Api"

function Item({ cantFind }) {
  // useParams determines which item to load.
  const { id } = useParams();
  // useLocation determines which menu the item is from.
  const route = useLocation();
  const menu = route.pathname.split("/")[1];
  const { setSnacks, setDrinks } = useContext(MenuContext);
  const data = useContext(MenuContext);
  let items = data.snacks;
  if (menu === "drinks") items = data.drinks;
  let item = items.find((item) => item.id === id);
  if (!item) return <Redirect to={cantFind} />;

  const handleClick = (e) => {
    e.preventDefault();
    if (menu === "snacks") {
      SnackOrBoozeApi.deleteSnack(id).then(() => {
        setSnacks((snacks) => snacks.filter((snack) => snack.id !== id));
      });
    }
    if (menu === "drinks") {
      SnackOrBoozeApi.deleteDrink(id).then(() => {
        setDrinks((drinks) => drinks.filter((drink) => drink.id !== id));
      });
    }
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
          <div className="d-flex justify-content-center">
            <Button className="text-center" color="danger" onClick={handleClick}>Delete</Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;