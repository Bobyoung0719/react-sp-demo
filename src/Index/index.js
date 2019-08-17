import React, { Component } from 'react';
import './index.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    
    this.handleToPage = this.handleToPage.bind(this);
  }
  
  handleToPage() {
    this.props.history.push('/page2')
  }

  render() {
    return (
      <div>

       

        <input 
          placeholder="我是输入框"
        />
      </div>
    );
  }
}

export default Index;