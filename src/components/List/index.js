import React from 'react'
import Item from "../Item";

class List extends React.Component {
    render() {
        return (
            <div className="List">
                <Item/>
                <Item/>
                <Item/>
            </div>
        )
    }
}


export default List