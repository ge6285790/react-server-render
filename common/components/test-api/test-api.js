import React, { Component } from 'react';
import * as youtubeAction from '../../actions/youtube';

class TestApi extends Component {
  static needsApi = [
    youtubeAction.searchInit
  ]
  render() {
    <div>
      <p>test-api</p>
    </div>
  }
}
