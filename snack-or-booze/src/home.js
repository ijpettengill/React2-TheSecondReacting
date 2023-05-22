import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Home.css";

function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <b className="welcome">Welcome to Silicon Valley's premier dive cafe!</b>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;