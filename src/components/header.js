import './styles.css'

function header (props){
  function nameSearch(e){
    console.log(e.target.value)
    const single = e.target.value
    props.records.map(record => {
      if(record.FirstName.includes(single)){
        console.log('true')
      }else{
        console.log("false")
      }
    })
  }

  return(
    <div>
    <ul className="nav d-flex justify-content-around p-1 bg-warning">
    <li className="pt-2">
      <h1>Rekods</h1>
    </li>
      <div className="d-flex">
        <li className="nav-item dropdown d-flex">
          <a className="nav-link dropdown-toggle p-3 mr-5" data-toggle="dropdown" href="#hello" role="button" aria-haspopup="true" aria-expanded="false">Gender</a>
          <div className="dropdown-menu">
            <a onClick={props.maleFilter} className="dropdown-item" href="#hello">Male</a>
            <a onClick={props.femaleFilter} className="dropdown-item" href="#hello">Female</a>
          </div>
        </li>
        <li className="nav-item dropdown d-flex">
        <a className="nav-link dropdown-toggle p-3 mr-5" data-toggle="dropdown" href="#hello" role="button" aria-haspopup="true" aria-expanded="false">Payment Method</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" onClick={props.paypalFilter} href="#hello">Paypal</a>
          <a className="dropdown-item" onClick={props.checkFilter} href="#hello">Check</a>
          <a className="dropdown-item" onClick={props.transferFilter} href="#hello">Money Order</a>
          <a className="dropdown-item" onClick={props.ccFilter} href="#hello">CC</a>
        </div>
        <input onBlur={nameSearch} type="text" />
        </li>
      </div>
    </ul>
    </div>
  )
}
export default header
