import React from 'react';
import "./CharityPage.css";
import img from "./img/charity.jpg";
import StripeCheckout from 'react-stripe-checkout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap';
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

import Axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function CharityPage() {

    // const [product, setProduct] = useState({
    //     name: "Donate ",
    //     price: "10",
    //     productBy: "easyBank"
    //   });

    function handleToken(token,address){
        
    }

    const paymentHandler = async (e) => {
        e.preventDefault();
        const orderUrl = 'http://localhost:8000/razorpay/order'
        const response = await Axios.get(orderUrl);
        const { data } = response;
        const options = {
          key:'rzp_test_Fbw6yQc0PLcFLA' ,
          name: "easyBank",
          description: "easybank  donated $1500 + to backward poor people ",
          order_id: data.id,
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `http://localhost:8000/razorpay/}capture/${paymentId}`;
             const captureResponse = await Axios.post(url, {})
             console.log(captureResponse.data);
             const successObj =JSON.parse(captureResponse.data);
             if(successObj.captured){
                 console.log('Payment Success');
             }
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
        };

    return (
        <>
        <div className="charitypage">
        
            <div className="header_img">
                <div className="header_text">
                    <h3>GIVE A HELPING</h3>
                    <h3>HAND TO THOSE</h3>  
                    <h3> WHO NEED IT</h3>
                
                    {/* <StripeCheckout
                        stripeKey="pk_test_51IIW82AHPtRqTJOCZONyAKTcFVTGFQAbXZlW7OvfK5VbhxPS1jACGxfgDniKxpKoEzrPUnt3EBhoWxXQjh7rhYw700cciteNMs"
                        token={handleToken}
                        description=""
                        image="https://yourdomain.tld/images/logo.svg"
                        name="Donate for a cause"
                        amount
                        price
                        shippingAddress
                        billingAddress
                        
                    > */}
                    {/* <button className="btn-large yellow ">
                    Make a pledge $
                     </button> */}
                    {/* </StripeCheckout> */}

                    <div>
                        {/* <button onClick={paymentHandler}>
                            pay with Razorpay
                        </button> */}

                       <Router>
                         <a href="https://rzp.io/l/FkRk9TNOqm">
                        <button className="btnp">Make a pledge $</button> 
                         </a>
                       </Router>  

                    </div>
    

                </div>
            </div>

            <div className="cards">

            <Card className="C1" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Save The Earth</Card.Title>
        <Card.Text>
          Do something crazy to raise money for clean water can improve health , empower women .
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>   

    <Card className="C2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Become Volunteer</Card.Title>
        <Card.Text>
          Our support creates empowered communites in the world
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>   

    <Card className="C3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Save The Earth</Card.Title>
        <Card.Text>
        Imparting knowledge can help the poor and needy to stand on their feet. Education is the beginning of getting out from hardships of life.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>         

            </div>
            
        </div>
        </>
    )
}

export default CharityPage

