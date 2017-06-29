import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Octocat from './Octocat'

const URL = 'https://api.github.com/search/users?q='

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      costumeClassName: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputVal: e.target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.handleSearchTermSubmit(e)
  }

  handleSearchTermSubmit = (e) => {
    this.setState({ costumeClassName: 'loading' })
    const searchString = this.state.inputVal.toLowerCase();
    if (searchString.length >= 3) {
      axios
      .get(`${URL}${searchString}`)
      .then(res => {
        this.setState({ costumeClassName: 'search-complete' })
        this.props.handleSearchBarAnimation();
        this.props.searchData(res.data.items);
      });
    }
  }

  render() {
    const imageStyles = {
      transition: 'opacity 0.7s ease-in, transform 0.7s ease-in',
      width: '50%',
      height: 'auto',
      margin: '0 auto',
      transform: this.state.costumeClassName === 'search-complete' ? 'translateY(-600px)' : 'translateY(0)'
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
        <Octocat style={imageStyles} costumeClassName={this.state.costumeClassName} />
        {/* <img style={imageStyle} width='50%' height='auto' src={githubLogo} alt='GitHub Logo' /> */}
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleSearchBarAnimation: PropTypes.func,
  searchData: PropTypes.func,
}

export default SearchBar;
