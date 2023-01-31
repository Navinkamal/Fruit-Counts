// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {countMango: 0, countBanana: 0}

  onMango = () => {
    this.setState(prevCount => ({
      countMango: prevCount.countMango + 1,
    }))
  }

  onBanana = () => {
    this.setState(prevCount => ({
      countBanana: prevCount.countBanana + 1,
    }))
  }

  render() {
    const {countMango, countBanana} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate <span>{countMango}</span> mangoes <span>{countBanana}</span>{' '}
            bananas
          </h1>
          <div className="image-card">
            <div className="sub-card">
              <img
                alt="mango"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              />
              <button type="button" className="btn" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="sub-card">
              <img
                alt="banana"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              />
              <button type="button" className="btn" onClick={this.onBanana}>
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
