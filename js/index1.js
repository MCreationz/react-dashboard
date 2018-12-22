var Button = React.createClass({ displayName: "Button",
  getInitialState: function getInitialState() {
    return {
      condition: false };

  },
  handleClick: function handleClick() {
    this.setState({
      condition: !this.state.condition });

  },
  render: function render() {
    return (
      React.createElement("div", {
          onClick: this.handleClick,
          className: this.state.condition ? "button toggled" : "button" },

        this.props.message));


  } });


ReactDOM.render(React.createElement(Button, { message: "Click me if you dare!" }), document.getElementById('ham_icon'));