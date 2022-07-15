import React from 'react'
import {Button, Form, Input} from 'antd';


class Add extends React.Component {
    constructor(props) {
        super(props);
        this.value = ""
    }
    handleSubmit = () => {
        this.props.add(this.value)
    }

    saveContent = (event) => {
        // console.log("saveContent")
        this.value = event.target.value
        // console.log(this.value)
    }

    render() {
        return (
            <Form name="basic" onFinish={this.handleSubmit}>
                <Form.Item name="content" label="content">
                    <Input type="text" value={this.value} onChange={this.saveContent}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">添加</Button>
                </Form.Item>
            </Form>
        )
    }
}


export default Add