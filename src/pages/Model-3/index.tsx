import "./style.scss"
import {model_3,model_3_text} from "@images"
import { Container } from "../../components/Containers";

const Module_3_car = () => {
    return (
        <section id="intro__section">
          <Container>

            <div className="img-wrapper">
              <img src={model_3_text} className="text" alt="text" />
              <img className="model-s-img" src={model_3} alt="model_s" />
            </div>
            
          </Container>
        </section>
    )
}

export default Module_3_car;