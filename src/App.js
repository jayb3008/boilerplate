import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setParsedData } from './actions';
import { Layout, Menu, Button, Card } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
    const dispatch = useDispatch();
    const parsedData = useSelector((state) => state.parsedData);
    const fetchData = async () => {
        const response = await fetch('https://api.newapi.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch(setParsedData(data));
    };

    useEffect(() => {

        fetchData();
    }, []);

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Header style={{ color: 'white' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/contact">Contact</Link></Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/settings">Settings</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/profile">Profile</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                {/* Add more routes as needed */}
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design Layout Example ©2023 Created by Your Name
                </Footer>
            </Layout>
        </Router>
    );
};

export default App;
