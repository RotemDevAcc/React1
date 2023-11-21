import React from 'react'


//http://127.0.0.1:8000/
const Card = (props) => {
  let cardStyle = { width: '18rem' };
  return (
    <div>
        <div className="card" style={cardStyle}>
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name} - {props.id}</h5>
                <p className="card-text">{props.desc}, Category: {props.category}</p>
            </div>
        </div>
    </div>
  )
}

export default Card