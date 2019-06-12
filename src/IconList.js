//prettier-ignore
import React, { Component } from "react";

class IconList extends Component {
  static defaultProps = {
    options: [
      'angry',
      'anchor',
      'archive',
      'at',
      'archway',
      'baby',
      'bell',
      'bolt',
      'bone',
      'car',
      'city',
      'cloud',
      'couch'
    ]
  };
  constructor(props) {
    super(props);
    this.state = { icons: [] };
  }

  addIcon = () => {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    //spread the array in a new one and add the newIcon element
    //never do it in the original data structure (in this case an array)
    //ALWAYS MAKE A COPY OF THE DATA STRUCTURE IN QUESTION
    //This is absoluty required to work with Redux
    this.setState({ icons: [...this.state.icons, newIcon] });
  };

  render() {
    const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default IconList;
