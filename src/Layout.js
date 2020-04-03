import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import Home from './design/Home';
import About from './design/About';
import Profile from './design/Profile';
import Work from './design/Work';
import Referal from './design/Referal';

import { Switch, Link } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

//icons



export default class LayoutMain extends Component {
    state = {
        collapsed: true,
     
    };
    componentDidMount() {
        this.setState({
            view: <Home />
        })
      

    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    getLocation = (data) => {
        console.log(data.key)
        if (data.key === '1') {
            this.setState({
                view: <Home />
            })
        }
        else if (data.key === '2') {
            this.setState({
                view: <About/>
            })
        }
        else if (data.key === '3') {
            this.setState({
                view: <Profile/>
            })
        }
        else if (data.key === '4') {
            this.setState({
                view: <Work/>
            })
        }
        else if (data.key === '5') {
            this.setState({
                view: <Referal/>
            })
        }
     
    }
    render() {


        return (
            <div>
                <Layout style={{ minHeight: '100vh', }}>
                    <Sider collapsible collapsed={this.state.collapsed} >
                        <div className="logo">
                           <h3>RB</h3>
                        </div>
                        <Menu onClick={this.getLocation} defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" >
                                <Icon type="home" />

                                <span>Home</span>
                            </Menu.Item>


                            <Menu.Item key="2">
                                <Icon type="usergroup-add" />
                                <span>Profile</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="credit-card" />
                                <span>About</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="user" />
                                <span>Work</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="monitor" />
                                <span>Referal</span>
                            </Menu.Item>
                           


                        </Menu>
                    </Sider>
                    <Layout>
                        <Content>
                            <nav className="uk-navbar-container" style={{ background: '#fff' }} uk-navbar="true">

                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">

                                        <li>
                                            <Link to="#">
                                              Resume Builder App
                                            </Link>

                                        </li>

                                    </ul>
                                </div>

                                <div className="uk-navbar-right">

                                    <ul className="uk-navbar-nav">

                                        <li>
                                            <Link to="#">

                                            <Avatar className="uk-margin-right" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> :
                                               Account
                                            </Link>
                                            <div className="uk-navbar-dropdown">
                                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                                    <li className="uk-active"><Link to="#" onClick={this.logout}>Logout</Link></li>

                                                </ul>
                                            </div>
                                        </li>

                                    </ul>

                                </div>

                            </nav>
                            <div style={{ padding: 24, background: '#F0F4F7', minHeight: 360 }}>
                                <Switch onChange={this.handleChange}>
                                    {
                                        this.state.view
                                    }
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center',
    fontSize: '15px',
    letterSpacing: '1px',
    color: '#29435d',
    fontWeight: '600' }}>A PINKFRY PRODUCT 
                      
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
} 