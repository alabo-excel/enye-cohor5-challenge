import {Component} from 'react'
import Header from './components/header'
import Record from './components/records'

class App extends Component {
  state = {
    records: null,
    previousState: null
  }
  componentDidMount() {
    fetch('http://api.enye.tech/v1/challenge/records')
    .then(response => response.json())
    .then(data =>{
      let all = data;
      this.setState ({
         records: data.records.profiles,
         previousState: data.records
      })
      // console.log(this.state.records)
    })
  }

  render(){
    var ary = []
    const maleFilter = () => {
      ary = []

      console.log(this.state.previousState)
      this.state.records.map(record => {
        if(record.Gender === 'Male'){
          ary.push(record)
            this.setState({
              records: ary
            })
        }else{
        }
      })
    }

    const femaleFilter = () => {
      ary = []
      
      this.state.records.map(record => {
        if(record.Gender === 'Female'){
          ary.push(record)
            this.setState({
              records: ary
            })
        }else{
        }
      })
    }

    const paypalFilter = () => {
      ary = []
      this.state.records.map(record => {
        if(record.PaymentMethod === 'paypal'){
          ary.push(record)
            this.setState({
              records: ary
            })
        }else{
        }
      })
    }

    const checkFilter = () => {
      ary = []
      this.state.records.map(record => {
        if(record.PaymentMethod === 'check'){
          ary.push(record)
            this.setState({
              records: ary
            })
        }else{
        }
      })
    }

    const transferFilter = () => {
      ary = []
      this.state.records.map(record => {
        if(record.PaymentMethod === 'money order'){
          ary.push(record)
            this.setState({
              records: ary
            })
        }else{
        }
      })
    }

    const ccFilter = () => {
      ary = []
      this.state.records.map(record => {
        if(record.PaymentMethod === 'cc'){
          ary.push(record)
            this.setState({
              records: ary
            })
        }else{
        }
      })
    }

    const records = this.state.records
    return (
      <div className="App">
        <header className="App-header">
          <Header paypalFilter={paypalFilter} transferFilter={transferFilter} ccFilter={ccFilter} checkFilter={checkFilter} maleFilter={maleFilter} femaleFilter={femaleFilter} records={records} />
        </header>
          <div>
          <Record records={records} />
          </div>

      </div>
    );
  }
}

export default App;
