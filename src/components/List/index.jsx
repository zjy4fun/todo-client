import React from 'react'
import Item from "../Item";

class List extends React.Component {
    render() {
        let {contents} = this.props
        return (
            <div className="List">
                <ul>
                    {
                        contents.map((item) =>
                            <Item content={item.content} key={item.id}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}


export default List