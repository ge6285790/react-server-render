import React, { Component } from 'react';

// const Repos = (props) => {
//   console.log(props)
//   return (
//     <div>
//       Repos
//       {props.children}
//     </div>
//
//   );
// };

class Repos extends Component {
  render() {
    return (
      <div className="repos">
        Repos
        {this.props.children}
      </div>

    );
  }
}

export default Repos;
