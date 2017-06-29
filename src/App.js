import React from 'react';
import Transition from 'react-overlays/lib/Transition'
import SearchBar from './SearchBar'
import Users from './Users'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      flyup: '',
      searchData: [],
      displaySearchImage: true,
    };
  }

  searchData = (data) => {
    this.setState({
      searchData: data,
    });
  }

  handleSearchBarAnimation = () => {
    if (this.state.flyup === '') {
      this.setState({ flyup: 'fly-up' })
    }
  }

  // onEntered = (e) => {
  //   if (e.target.classList.value === 'search-container') {
  //     this.setState({ displaySearchImage: false })
  //   }
  // }

  render() {
    return (
      <div className='landing-container'>
        <Transition
          in
          transitionAppear
          timeout={100}
          className='above-screen'
          enteredClassName={`main-container ${this.state.flyup}`}
          onTransitionEnd={this.onEntered}
        >
          <div>
            <SearchBar
              searchData={this.searchData}
              displayImage={true/*this.state.displaySearchImage*/} 
              handleSearchBarAnimation={this.handleSearchBarAnimation}

            />
          </div>
        </Transition>
        <Users users={this.state.searchData} />
      </div>
    );
  }
}

export default App;
