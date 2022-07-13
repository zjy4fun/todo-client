import React from 'react'
import List from "../List";
import Input from "../Input";

class Container extends React.Component {
    state = {
        contents: [
            {
                id: 0,
                content: "todo-1",
                status: false,
            },
            {
                id: 1,
                content: "todo-2",
                status: false,
            },
            {
                id: 2,
                content: "todo-3",
                status: false
            }
        ]
    }

    addContent = (content) => {
        this.setState((state) => ({
            contents: state.contents.concat({
                id: this.state.contents.length,
                content: content,
                status: false,
            })
        }), () =>{
            console.log(this.state.contents.length)
        })
    }
    render() {
        return (
            <div className="Container">
                <Input add={this.addContent}/>
                <List contents = {this.state.contents}/>
            </div>
        )
    }
}


export default Container