import React, { Component } from 'react'

export default class ItemComponent extends Component {
  render() {
    return (
      <div className="card mx-3 text-center" >
        <img src="https://i.pravatar.cc/?u=50﻿" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}
