import React, { Component } from "react";
import {Button} from 'reactstrap';

class Order extends React.Component {

  render() {

    return (
    <div className="mx-auto" style={{maxWidth: '45rem'}}>
      <h4 className="my-2"><span className="badge badge-primary">返回列表</span></h4>
      <div className="row my-3">
        <div className="col-1 text-center">
            <i className="fa fa-caret-left" aria-hidden="true" style={{fontSize: '2em'}}></i>
        </div>
        <div className="text-center col-10" id="today">
          {this.props.match.params.orderDate}
        </div>
        <div className="col-1 text-center">
            <i className="fa fa-caret-right" aria-hidden="true" style={{fontSize: '2em'}}></i>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">餐點名稱</th>
            <th scope="col" className="text-right">份數</th>
            <th scope="col" className="text-right">金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>山雞肉飯</td>
            <td className="text-right">10</td>
            <td className="text-right">700</td>
          </tr>
          <tr>
            <td>滷肉飯</td>
            <td className="text-right">5</td>
            <td className="text-right">350</td>
          </tr>
          <tr>
                <td>餐點三</td>
                <td className="text-right">0</td>
                <td className="text-right">0</td>
            </tr>
          <tr className="font-weight-bold">
            <td scope="row" colSpan="2" >總金額</td>
            <td className="text-right">1050</td>
          </tr>
        </tbody>
      </table>
      <hr/>
    </div>
    );
  }
}
 
export default Order
