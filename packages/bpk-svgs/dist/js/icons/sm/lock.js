import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M13.3 7V5.1c0-2.3-1.9-4.1-4.1-4.1h-.4C6.6 1 4.7 2.9 4.7 5.1V7c-.9.1-1.7.9-1.7 1.8v6.3c0 1 .8 1.8 1.8 1.8h8.3c1 0 1.8-.8 1.8-1.8V8.8c.1-.9-.7-1.7-1.6-1.8zM8.8 3h.3c1.2 0 2.1.9 2.1 2.1V7H6.7V5.1c0-1.2 1-2.1 2.1-2.1z" /></svg>;
  }

}