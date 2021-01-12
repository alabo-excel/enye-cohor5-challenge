import {Component} from 'react'
import './records.css'

class records extends Component {
  state = {
    records: this.props.records,
    one: 0,
    two: 20,
  }

  buttonTwo = () =>{
    console.log("hello")
    this.setState({
         one: 20,
         two: 40,
       })
  }

  render(){
    if(this.props.records == null){
      return(
        <div className="spinner-grow mt-5 text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
    }else{
      var allRecord = this.props.records.splice(this.state.one, this.state.two).map(record =>{
        return(
          <div key={record.CreditCardNumber} className="card col-lg-5 m-4 col-sm-11">
            <div className="card-body">
            <h5>{record.FirstName} {record.LastName}</h5>
            <hr />
            <div className="d-flex flex-wrap">
              <p className="UserName bg-secondary">{record.UserName}</p>
              <p className="gender bg-primary">{record.Gender}</p>
              <p className="cardNumber bg-danger">{record.CreditCardNumber}</p>
              <p className="cardType bg-info">{record.CreditCardType}</p>
              <p className="domain bg-success">{record.DomainName}</p>
              <p className="email bg-warning">{record.Email}</p>
              <p className="login">{record.LastLogin}</p>
              <p className="lat">{record.Latitude}</p>
              <p className="lon">{record.Longitude}</p>
              <p className="address">{record.MacAddress}</p>
              <p className="method">{record.PaymentMethod}</p>
              <p className="number">{record.PhoneNumber}</p>
            </div>
            </div>
          </div>
        )
      })
    }
    return(
      <div>
        <div className="jumbotron p-3 jumbotron-fluid">
          <div className="container">
            <h1 className="display-6">Color Code</h1>
            <div className="d-flex flex-wrap">
              <p className="UserName bg-secondary">UserName</p>
              <p className="gender bg-primary">Gender</p>
              <p className="cardNumber bg-danger">Credit Card Number</p>
              <p className="cardType bg-info">Credit Card Type</p>
              <p className="domain bg-success">DomainNam</p>
              <p className="email bg-warning">Email</p>
              <p className="login">Last Login</p>
              <p className="lat">Latitude</p>
              <p className="lon">Longitude</p>
              <p className="address">Mac-Address</p>
              <p className="method">Payment Method</p>
              <p className="number">Phone Number</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {allRecord}
        </div>
        <nav aria-label="Page navigation example ">
          <ul className="pagination mx-auto">
            <li className="page-item">
              <a className="page-link"  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link">1</a></li>
            <li className="page-item"><a className="page-link" onClick={this.buttonTwo}>2</a></li>
            <li className="page-item"><a className="page-link" >4</a></li>
            <li className="page-item"><a className="page-link" >5</a></li>
            <li className="page-item"><a className="page-link" >6</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
      </nav>
      </div>
    )
  }
}
export default records
