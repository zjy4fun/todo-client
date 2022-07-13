import React from 'react'
import Item from "../Item";

class List extends React.Component {
    deleteContent = (id) => {
        this.props.delete(id)
    }

    render() {
        let {contents} = this.props
        return (
            <div className="List">
                <ul>
                    {
                        contents.map((item) =>
                            <Item itemObj={item} key={item.id} delete={this.deleteContent}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}


export default List