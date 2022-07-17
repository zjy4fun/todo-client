import React from 'react'
import List from "../List";
import Add from "../Add";
import {Row, Col} from 'antd'
import axios from 'axios'

class Container extends React.Component {
    state = {
        contents: []
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
        for (let i = contents.length - 1; i >= 0; i--) {
            if (contents[i].id + '' === id) {
                contents.splice(i, 1)
                break
            }
        }

        axios.delete('/api/v1/contents', {
            data: {
                id: id
            }
        }).then(res => {
            console.log(res)
            this.setState(() => ({
                contents: contents
            }), () => {
                console.log(this.state.contents.length)
            })
        })
    }

    componentDidMount() {
        axios.get("/api/v1/contents").then(res => {
            this.setState({
                contents: res.data.contents
            })
            console.log(res.data.contents)
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