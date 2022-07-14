import React from 'react'


class Input extends React.Component {
    constructor() {
        super();
        this.value = ""
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.add(this.value)
    }

    saveContent = (event) => {
        this.value = event.target.value
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.saveContent} type="text" name="content" placeholder="请输入todo内容"/>
                <button>添加</button>
            </form>
        )
    }
}


export default Input