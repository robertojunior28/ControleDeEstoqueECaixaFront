import React from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import Card from "../../componentes/Card";
import './index.css'

class Home extends React.Component {
  render() {
    return (
      <div className="container" id="sistema">
        <br />
        <br />
        <br />
        <br />
        <Card title="Sistema de Contole" className="center">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="bs-component">
                <label className="center">
                  Sistema de controle de estoque e caixa
                </label>
                <br />
                <label>
                  Desenvolvido por José Roberto - roberto.farias.oliveira2@gmail.com
                </label>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Home;
