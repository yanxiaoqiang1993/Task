import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {BrowserRouter as Router, Link} from 'react-router-dom'
const {Content, Sider} = Layout;

class SiderDemo extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: false,
            selectedKeys: '/list'
        };
    }

    onCollapse(collapsed) {
        this.setState({collapsed});
    }

    onSelect({item, key, selectedKeys}) {
        this.setState({selectedKeys: key})
    }

    render() {
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse.bind(this)}
                    >
                        <Menu theme="dark" selectedKeys={[location.pathname]} onSelect={this.onSelect.bind(this)}
                              mode="inline">
                            <Menu.Item key="/list">
                                <Link to='/list'> <Icon type="ordered-list" theme="outlined" /><span>list</span></Link>
                            </Menu.Item>
                            <Menu.Item key="/edite">
                                <Link to='/edite'><Icon type="edit" theme="outlined" /><span>edite</span></Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>{location.pathname.split('/')[1]}</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                                {this.props.children}
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default SiderDemo