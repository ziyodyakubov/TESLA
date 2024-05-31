import "./style.scss";
import {model_s,model_s_text} from "@images";
import  {Container}  from "./../../components/Containers/index";

const Module_s_car = () => {
    return (
        <section id="model-s-car">
          <Container>
            <div className="img-wrapper">
              <img src={model_s_text} className="text" alt="text" />
              <img className="model-s-img" src={model_s} alt="model_s" />
            </div>
          </Container>
        </section>
    )
}

export default Module_s_car;