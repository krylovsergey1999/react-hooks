import React from "react";
import {Link} from "react-router-dom";

const Card = () => {
    return (
        <div className="card">
            <img src='' alt='' className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">React JS</h5>
                {/* eslint-disable-next-line no-useless-concat */}
                <Link to={'/profile/' + 'react'} className="btn btn-primary">React</Link>
            </div>
        </div>
    );
};

export default Card;
