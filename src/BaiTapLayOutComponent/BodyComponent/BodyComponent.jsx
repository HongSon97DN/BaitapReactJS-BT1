import React, { Component } from 'react'
import BannerComponent from '../BanerComponent/BannerComponent'
import ItemComponent from '../ItemComponent/ItemComponent'

export default class BodyComponent extends Component {
  render() {
    return (
      <div className='container'>
        <BannerComponent/>
        <div className='item-list d-flex pt-5'>
          <ItemComponent/>
          <ItemComponent/>
          <ItemComponent/>
          <ItemComponent/>
        </div>
      </div>
    )
  }
}
