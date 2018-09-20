import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchEditeList, addRoom, showEditeRoom, hideEditeRoom, deleteRoom, editeRoom} from '../../actions/edite'
import {Table, Icon, Form} from 'antd'
import AddRoomForm from '../../components/AddRoomForm'
import EditeRoomForm from '../../components/EditeRoomForm'
import './index.less'

class Edite extends Component {
    constructor() {
        super()
        this.state = {
            tabIndex: -1
        }
    }

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(searchEditeList())
    }

    changeTabs(tabIndex) {
        this.setState({
            tabIndex
        })
    }

    columnsRender(cols) {
        let self = this;
        cols[2].render = function (text, record) {
            return <a href="javascript:void 0;" onClick={self.showEditeRoom.bind(self, record)}>
                <Icon type="edit" theme="outlined"/>edite</a>
        }
        return cols;
    }

    showEditeRoom(record) {
        const {dispatch} = this.props
        dispatch(showEditeRoom(record))
    }

    hideEditeRoom() {
        const {dispatch} = this.props
        dispatch(hideEditeRoom())
    }

    deleteRoom(key) {
        const {dispatch} = this.props
        dispatch(deleteRoom(key, this.state.tabIndex))
    }

    editeRoom(data) {
        const {dispatch} = this.props
        dispatch(editeRoom(data, this.state.tabIndex))
    }

    addRoom(data) {
        const {dispatch} = this.props
        dispatch(addRoom(data, this.state.tabIndex))
    }

    render() {
        const {listData} = this.props
        return <div>
            <div className="container">
                <div className="tabs">
                    {listData.map((item, index) => {
                        return <div key={item.key} onClick={this.changeTabs.bind(this, index)}
                                    className={this.state.tabIndex === index ? "active tabs_li" : "tabs_li"}>{item.name}</div>
                    })}
                </div>
                <div className="content">
                    {listData[this.state.tabIndex] && listData[this.state.tabIndex].length !== 0 &&
                    <Table columns={this.columnsRender(columns)} pagination={false}
                           dataSource={(listData[this.state.tabIndex] ? listData[this.state.tabIndex].rooms : [])}/>}
                    {this.state.tabIndex !== -1 && <div className="add">
                        <AddRoomForm
                            submit={this.addRoom.bind(this)}/>
                    </div>}
                </div>
                <EditeRoomForm
                    isShow={this.props.showEditeRoom}
                    updateItem={this.props.updateRoomItem}
                    hideModal={this.hideEditeRoom.bind(this)}
                    deleteRoom={this.deleteRoom.bind(this)}
                    submit={this.editeRoom.bind(this)}
                />
            </div>
        </div>
    }
}

const columns = [
    {
        title: 'Room name',
        dataIndex: 'roomName',
    }, {
        title: 'Price',
        dataIndex: 'price',
    }, {
        title: 'actions',
        dataIndex: '',
    }
]

function mapStateToProps(state) {
    const {edite} = state;
    return {
        listData: edite.listData,
        showEditeRoom: edite.showEditeRoom,
        updateRoomItem: edite.updateRoomItem
    }
}
export default connect(mapStateToProps)(Edite);