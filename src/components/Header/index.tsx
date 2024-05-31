import "./style.scss";
import mainlogo from "./../../assets/images/svg/mainlogo.svg";
import { Outlet,Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <div className="container header-wrapper">
                    <a href="#"><img src={mainlogo} className="logo" alt="mainlogo" /></a>

                    <div className="left-wrapper">
                        <div className="click-wrapper">
                            <Link to={"/model_s"} className="model_s chotkiy">Model S</Link>
                            <Link to={"./model_3"} className="model_3 chotkiy">Model 3</Link>
                            <Link to={"./model_x"}  className="model_x chotkiy">Model X</Link>
                            <Link to={"./model_y"}  className="model_y chotkiy">Model Y</Link>
                            <Link to={"./solar_roof"} className="chotkiy" >Solar Roof</Link>
                            <Link to={"./solar_panels"} className="chotkiy">Solar Panels</Link>
                        </div>

                        <div className="oltmishgap">
                            <div className="search-wrapper">
                                <i className='bx bx-search'></i>
                                <input type="text" placeholder='Search' />
                            </div>

                            <div className="usericon">
                                <i className='bx bx-user' ></i>
                            </div>

                            <div className="menubar">
                                <i className='bx bx-menu' ></i>
                            </div>
                        </div>

                    </div>




                </div>
            </header>
            <Outlet/>
        </>
    )
};

export default Header;