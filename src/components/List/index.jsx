import {Button, Table} from 'antd';
import React from 'react';

const {Column} = Table;

class List extends React.Component {
    deleteContent = (id) => {
        this.props.delete(id)
    }

    render() {
        const {contents} = this.props
        const newContents = contents ? [...contents] : []
        return (
            <div className="List">
                <Table rowKey="id" dataSource={newContents}>
                    <Column title="内容" dataIndex="content"/>
                    <Column title="操作" dataIndex="id"
                            render={(_, content) => {
                                return (
                                    <Button type="primary" danger
                                            onClick={() => this.deleteContent(content.id)}>删除</Button>
                                )
                            }}
                    />
                </Table>
            </div>
        )
    }
}


export default List