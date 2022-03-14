import React from "react";
class ForceUpdate extends React.Component {

    handleClick = () => {
      // force a re-render
      this.forceUpdate();   //check difference by commenting this line 
      console.log('forcefully updated')
    };
  
    render() {
      console.log('App component: render()')
      return (
        <>
          <button onClick={this.handleClick}>Say something</button>
        </>
      );
    }
  }
  export default ForceUpdate