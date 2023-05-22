import React, { useState, useContext } from "react";
import SnackOrBoozeApi from "./Api";
import MenuContext from "./MenuContext";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Label,
  Input,
  Button,
} from "reactstrap";

function AddForm() {
  const initialState = {
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { setSnacks, setDrinks } = useContext(MenuContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSnackSubmit = (e) => {
    e.preventDefault();
    SnackOrBoozeApi.postSnack(formData).then((snack) => {
      setSnacks((snacks) => [...snacks, snack]);
    });
    setFormData(initialState);
  };

  const handleDrinkSubmit = (e) => {
    e.preventDefault();
    SnackOrBoozeApi.postDrink(formData).then((drink) => {
      setDrinks((drinks) => [...drinks, drink]);
    });
    setFormData(initialState);
  };

  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">Add Menu Items</CardTitle>
        <form className="my-form">
          <ListGroup>
            <ListGroupItem className="d-flex align-items-center">
              <Label htmlFor="id" className="mr-2 text-right">ID: </Label>
              <Input
                type="text"
                name="id"
                placeholder="id"
                value={formData.id}
                onChange={handleChange}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <Label htmlFor="name" className="mr-2 text-right">Name:</Label>
              <Input
                type="text"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <Label htmlFor="description" className="mr-2 text-right">Description:</Label>
              <Input
                type="text"
                name="description"
                placeholder="description"
                value={formData.description}
                onChange={handleChange}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <Label htmlFor="recipe" className="mr-2 text-right">Recipe:</Label>
              <Input
                type="text"
                name="recipe"
                placeholder="recipe"
                value={formData.recipe}
                onChange={handleChange}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <Label htmlFor="serve" className="mr-2 text-right">Serve:</Label>
              <Input
                type="text"
                name="serve"
                placeholder="serve"
                value={formData.serve}
                onChange={handleChange}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <Button onClick={handleSnackSubmit} color="danger" style={{ marginRight: "95px" }}>Add Snack</Button>
              <Button onClick={handleDrinkSubmit} color="primary">Add Drink</Button>
            </ListGroupItem>
          </ListGroup>
        </form>
      </CardBody>
    </Card>
  );
}

export default AddForm;