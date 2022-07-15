import React from 'react'
import {Button, Input} from 'antd';


class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }
    handleSubmit = () => {
        this.props.add(this.state.content)
        this.setState({
            content: ""
        })
    }

    saveContent = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Input type="text" value={this.state.content} onChange={this.saveContent}/>
                <Button type="primary" onClick={this.handleSubmit}>添加</Button>
            </div>
        )
    }
}

export default Add