// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {countOfBanana: 0}
  state = {countOfMango: 0}
  eatMango = () => {
    this.setState(prevState => ({
      countOfMango: prevState.count + 1,
    }))
  }
  eatBanana = () => {
    this.setState(prevState => ({
      countOfBanana: prevState.count + 1,
    }))
  }
  render() {
    const {countOfBanana} = state
    const {countOfMango} = state
    return (
      <div className="container">
        <div className="inside-con">
          <h1 className="heading">
            Bob ate
            <span className="count">{countOfMango}</span>mangoes
            <span className="count">{countOfBanana}</span>bananas
          </h1>
          <div className="both-img">
            <div className="img-btn">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button onClick={this.eatMango} className="button">
                Eat Mango
              </button>
            </div>
            <div className="img-btn">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button onClick={this.eatMango} className="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
