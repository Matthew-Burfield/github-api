import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import preload from './data/data.json'
import githubLogo from './data/Octocat.png'

const URL = 'https://api.github.com/search/users?q='

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      inputVal: e.target.value,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.handleSearchTermSubmit(e)
  }

  handleSearchTermSubmit = (e) => {
    const searchString = this.state.inputVal.toLowerCase();
    if (searchString.length >= 3) {
      this.props.handleButtonClick();
      axios
      .get(`${URL}${searchString}`)
      .then(res => {
        this.props.searchData(res.data.items);
      });
      // this.props.searchData(preload.items);
    }
  }

  render() {
    const imageStyle = {
      display: this.props.displayImage ? 'block' : 'none',
      transition: 'opacity 0.7s ease-in, margin 0.7s ease-in'
    }
    return (
      <div>
        <h3 className='main-sub-title'>GitHub User Search!</h3>
        <div className='search-container'>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className='search-bar'
              type='text'
              placeholder='Search the users of GitHub!'
              onChange={this.handleInputChange}
              value={this.state.inputVal}
            />
          </form>
          <button className='search-button' onClick={this.handleSearchTermSubmit}>
            <div className='search-icon' />
          </button>
        </div>
        <img style={imageStyle} width='50%' height='auto' src={githubLogo} alt='GitHub Logo' />
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleButtonClick: PropTypes.func,
  searchData: PropTypes.func,
}

export default SearchBar;
