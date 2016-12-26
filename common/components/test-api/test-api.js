import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as youtubeAction from '../../actions/youtube';

function mapStateToProps(state) {
  return {
    youtube: state.youtube,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
        youtubeAction: bindActionCreators(youtubeAction, dispatch)
    }
  };
}

class TestApi extends Component {
  static needsApi = [
    youtubeAction.searchInit,
  ];
  constructor(props) {
      super(props);
      this.state = {
        searchText: '',
      }
  }
  searchTextUpdate(e) {
    const searchText = e.target.value;
    this.setState({
      searchText,
    });
  }
  searchTextAction() {
    this.props.actions.youtubeAction.search(this.state.searchText);
  }
  searchBarStyle() {
    return {
      height: this.props.youtube.searchBarSize + 'px',
    }
  }
  searchBarSizeChange() {
    // this.setState({})
    const height = this.props.youtube.searchBarSize + 10;
    this.props.actions.youtubeAction.searchBarSizeChange(height);
  }
  renderYoutubeList() {
    const youtubeList = this.props.youtube.youtubeList.map(y => {
      return <p key={y.etag}>{y.snippet.title}</p>
    });
    return youtubeList;
  }
  render() {
    return (
      <div>
        <p>test-api</p>
        <input value={this.searchText} style={::this.searchBarStyle()} onChange={this.searchTextUpdate.bind(this)} />
        <button onClick={this.searchTextAction.bind(this)} >確定</button>
        <button onClick={this.searchBarSizeChange.bind(this)} >改變輸入框大小</button>
        {::this.renderYoutubeList()}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestApi);
