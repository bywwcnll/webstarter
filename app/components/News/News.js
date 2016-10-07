
import React, { Component } from 'react'
import { Button, List } from 'antd-mobile'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    tick = () => {
        this.setState({
            count: ++this.state.count
        });
    };

    render(){
        return(
            <div>
                <p style={{textAlign: 'center'}}>Clicks: {this.state.count}</p>
                <Button onClick={this.tick}>计数器</Button>
            </div>
        );
    }
}

export default News