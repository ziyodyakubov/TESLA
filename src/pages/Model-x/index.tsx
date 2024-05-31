import "./style.scss";
import {model_x,model_x_text} from "@images"
import { Container } from "../../components/Containers";

const Module_x_car = () => {
    return (
        <section id="model-s-car">
          <Container>
            <div className="img-wrapper">
              <img src={model_x_text} className="text" alt="text" />
              <img className="model-s-img" src={model_x} alt="model_s" />
            </div>
          </Container>
        </section>
    )
}

export default Module_x_car;