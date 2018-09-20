import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchList} from '../../actions/list'
import {Card, Row, Col} from 'antd'
import './index.less'

class List extends Component {
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(searchList())
    }

    render() {
        const {listData} = this.props;
        const gridStyle = {
            width: '50%',
            textAlign: 'center',
        };
        return <div>
            {listData.map(item => {
                return <Card title={item.name} key={item.key} className="card">
                    <Card.Grid style={gridStyle} className="row">
                        <Row>
                            <Col span={12}>Room name</Col>
                            <Col span={12}>Price</Col>
                        </Row>
                    </Card.Grid>
                    <Card.Grid style={gridStyle} className="row">
                        <Row>
                            <Col span={12}>Room name</Col>
                            <Col span={12}>Price</Col>
                        </Row>
                    </Card.Grid>
                    {item.rooms.map(current => {
                        return <Card.Grid key={current.key} style={gridStyle}>
                            <Row>
                                <Col span={12}>{current.roomName}</Col>
                                <Col span={12}>{current.price}</Col>
                            </Row>
                        </Card.Grid>
                    })
                    }
                </Card>
            })}
        </div>
    }
}
function mapStateToProps(state) {
    const {list} = state
    return {
        listData: list.listData
    }
}

export default connect(mapStateToProps)(List);