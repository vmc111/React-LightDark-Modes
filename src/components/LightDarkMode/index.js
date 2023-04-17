import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: false}

  changeBtn = () => {}

  changeBtn = () => {
    this.setState(preState => ({isClicked: !preState.isClicked}))
  }

  render() {
    const {isClicked} = this.state

    const classToUse = !isClicked ? 'bg-color' : 'white-color'
    const nameToUse = !isClicked ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`card-container ${classToUse}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="btn-style" onClick={this.changeBtn}>
            {nameToUse}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
