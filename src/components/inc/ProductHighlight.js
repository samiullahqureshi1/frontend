import React from "react";
import "./productHiglight.css";
import dress from "../../img/dress.jpg";
import dress2 from "../../img/cosyy.jpg";
import dress3 from "../../img/school.jpg";

const     ProductHighlights = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4">
          <div className="big-image">
            <img src={dress} alt="New in: Dresses" className="big-image-img" />{" "}
            {/* Adjust the path as needed */}
            <div className="overlay mt-5">
              <h6
                className="text-white d-flex justify-content-center"
                style={{ fontSize: "20px" }}
              >
                New in: Dresses
              </h6>
              <a
                className="text-white d-flex justify-content-center"
                style={{ fontSize: "15px" }}
                href="shop now"
              >
                shop Women's
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="big-image-col">
            <img src={dress2} alt="Cosy Cushion" className="big-image-img" />{" "}
            {/* Adjust the path as needed */}
            <div className="overlay mt-5">
              <h6
                className="text-white d-flex justify-content-center"
                style={{ fontSize: "20px" }}
              >
                Cosy Cushion
              </h6>
              <a
                className="text-white d-flex justify-content-center"
                style={{ fontSize: "15px" }}
                href="shop now"
              >
                shop now
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="big-image-coll">
            <img src={dress3} alt="New term ready" className="big-image-img" />{" "}
            {/* Adjust the path as needed */}
            <div className="overlay mt-5">
              <h6
                className="text-white d-flex justify-content-center"
                style={{ fontSize: "20px" }}
              >
                New term ready
              </h6>
              <a
                className="text-white d-flex justify-content-center"
                style={{ fontSize: "15px" }}
                href="shop now"
              >
                shop school-wear
              </a>
            </div>
          </div>
        </div>
        <div className="a">
          <p>
            *Next day delivery is subject to stock, courier availability and
            courier area. Order cut off times may vary. For full exceptions
            please refer to our terms & conditions.
          </p>
          <p className="ml-9">Next unlimited costs £22.50
            for a 12 month subscription. Exceptions apply. For more information
            please refer to the nextunlimited terms & conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlights;
