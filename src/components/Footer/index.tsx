import "./style.scss";

const Footer = () =>{
    return (
        <footer>
        <div className="container">
          <div className="footer-wrapper">
            <ul>

              <li>
                <h3>396
                  mi
                </h3>
                <p>Range (EPA est.)</p>
              </li>

              <li>
              <h3>1.99
s
                </h3>
                <p>0-60 mph*</p>
              </li>

              <li><h3>200
mph
                </h3>
                <p>Top Speed†</p></li>

              <li><h3>1,020
hp
                </h3>
                <p>Peak Power</p></li>
            </ul>

            <button className='order-btn'>Order Now <i className='bx bx-chevrons-right'></i></button>
          </div>
        </div>
      </footer>
    )
}


export default Footer;