import React from 'react'

class Item extends React.Component {
    deleteContent = (event) => {
        this.props.delete(event.target.id)
    }
    render() {
        let {itemObj} = this.props
        return (
            <div className="Item">
                <p>{itemObj.content}</p>
                <button id={itemObj.id} onClick={this.deleteContent}>删除</button>
            </div>
        )
    }
}


export default Item