import React from 'react'

class Item extends React.Component {
    deleteContent = (event) => {
        this.props.delete(event.target.id)
    }
    render() {
        let {itemObj} = this.props
        return (
            <li className="Item">
                <p>{itemObj.content}  <button id={itemObj.id} onClick={this.deleteContent}>删除</button></p>
            </li>
        )
    }
}


export default Item