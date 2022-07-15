import React from 'react'
import List from "../List";
import Add from "../Add";
import {Row, Col} from 'antd'

class Container extends React.Component {
    state = {
        contents: [
            {
                id: '0',
                content: "todo-1",
                status: false,
            },
            {
                id: '1',
                content: "todo-2",
                status: false,
            },
            {
                id: '2',
                content: "todo-3",
                status: false,
            },
        ]
    }

    addContent = (content) => {
        //获取最大id+1
        let ids = this.state.contents.map((item) => item.id)
        let id = ids.length > 0 ? Math.max(...ids) + 1 : 0
        this.setState((state) => ({
            contents: state.contents.concat({
                id,
                content,
                status: false,
            })
        }), () => {
            console.log(this.state.contents.length)
        })
    }

    deleteContent = (id) => {
        let contents = this.state.contents
        // console.log("Container -- deleteContent -- id = ", id)
        for (let i = contents.length - 1; i >= 0; i--) {
            if (contents[i].id + '' === id) {
                contents.splice(i, 1)
                break
            }
        }
        this.setState(() => ({
            contents: contents
        }), () => {
            console.log(this.state.contents.length)
        })
    }

    render() {
        return (
            <Row className="Container">
                <Col span={12} offset={6}>
                    <Add add={this.addContent}/>
                    <List contents={this.state.contents} delete={this.deleteContent}/>
                </Col>
            </Row>
        )
    }
}


export default Container