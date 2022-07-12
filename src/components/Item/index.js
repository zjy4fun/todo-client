import React from 'react'

class Item extends React.Component {
    render() {
        return (
            <div className="Item">
                <p>{this.props.content}</p>
            </div>
        )
    }
}


export default Item