import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddForm from "./AddForm";
import FormContext from "./MenuContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getItems();
  }, [setSnacks, setDrinks]);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <FormContext.Provider
            value={{ snacks, setSnacks, drinks, setDrinks }}
          >
            <Switch>
              <Route exact path="/">
                <Home items={snacks} />
              </Route>
              <Route path="/snacks/:id">
                <Item cantFind="/snacks" />
              </Route>
              <Route exact path="/snacks">
                <Menu title="Snacks" />
              </Route>
              <Route path="/drinks/:id">
                <Item cantFind="/drinks" />
              </Route>
              <Route path="/drinks">
                <Menu title="Drinks" />
              </Route>
              <Route path="/add">
                <AddForm title="Add" />
              </Route>
              <Route>
                <p>Hmmm. I can't seem to find what you want.</p>
              </Route>
            </Switch>
          </FormContext.Provider>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;