import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import MenuContext from "./MenuContext";

function Menu() {
  // useLocation is used to determine which menu to use.
  const location = useLocation();
  const route = location.pathname.slice(1);
  const menu = route.charAt(0).toUpperCase() + route.slice(1) + " Menu";
  const data = useContext(MenuContext);
  let items = data.snacks;
  if (route === "drinks") items = data.drinks;
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">{menu}</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${route}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;