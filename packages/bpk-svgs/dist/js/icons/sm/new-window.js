import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M15.1 2L9.4 3.6c-.5.1-.7.7-.3 1.1l1.1 1.1-3.8 3.9c-.5.5-.5 1.4 0 1.9s1.4.5 1.9 0l3.8-3.8 1.1 1.1c.4.4 1 .2 1.2-.3L16 2.9c.1-.5-.4-1-.9-.9zM12 12v2.7c0 .2-.1.3-.3.3H3.3c-.2 0-.3-.1-.3-.3V6.3c0-.2.1-.3.3-.3H6V5H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h9c.6 0 1-.4 1-1v-3h-1z" /></svg>;
  }

}