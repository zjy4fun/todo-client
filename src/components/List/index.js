import React from 'react'
import Item from "../Item";

class List extends React.Component {
    state = {
        list: [
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

    render() {
        return (
            <div className="List">
                <ul>
                    {
                        this.state.list.map((item) =>
                            <Item content={item.content} key={item.id}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}


export default List