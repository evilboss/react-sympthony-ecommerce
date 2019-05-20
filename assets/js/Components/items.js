import React from 'react';


const Items = ({id, title, body, thumbnailUrl}) => (
    <div key={id} className="card col-md-4" style={{width: 200}}>
        <img className="card-img-top" src={thumbnailUrl} alt="Card image cap"/>

        <div className="card-body">
            <p>{id}</p>
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{body}</p>
        </div>
        <div className="card-footer">
            <a href="https://jsonplaceholder.typicode.com/posts/" className="btn btn-primary">Add to Cart <i class="fas fa-shopping-cart"></i></a>

        </div>
    </div>
);

export default Items;
