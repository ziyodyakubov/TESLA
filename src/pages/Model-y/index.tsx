import "./style.scss";
import {model_y,model_y_text} from "@images"
import { Container } from "../../components/Containers";


const Module_y_car = () => {
    return (
        <section id="model-s-car">
          <Container>
            <div className="img-wrapper">
              <img src={model_y_text} className="text" alt="text" />
              <img className="model-s-img" src={model_y} alt="model_s" />
            </div>
          </Container>
        </section>
    )
}

export default Module_y_car;