import './Login.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios'
import qs from "qs";
import React from 'react'
import { notification } from 'antd';
import 'antd/dist/antd.css';

const handleSubmit = (event) =>{
    console.log(event)
    return
    let res = qs.stringify({
        'UserName' : event.target.elements.Username.value,
        'Password' : event.target.elements.Password.value,
    })
    let config = {
        method: 'post',
        url: 'https://timino-application.iran.liara.run/api/auth/login?=',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : res,

    }
    axios(config)
        .then(function (response) {
            notification.open({
                message: 'Login was successful.',
                description: 'User has been successfuly Logged-In.',
                type:'success',

            });
            alert("User has been successfuly signed-up.");
            window.location.replace("/dashboard")
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            notification.open({
                message: 'Login was NOT successful',
                description: 'The PassWord or username is already in use.',
                type:'error',
            });
            console.log(error.response.data);
        });
}


const Login = () => {
    const onFinish = (values: any) => {
        let res = qs.stringify({
            'username' : values.username,
            'password' : values.password,
        })
        let config = {
            method: 'post',
            url: 'https://timino-application.iran.liara.run/api/auth/login?=',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : res,
        }
        axios(config)
            .then(function (response) {
                notification.open({
                    message: 'Login was successful.',
                    description: 'User has been successfuly Logged-In.',
                    type:'success',

                });
                window.location.replace("/dashboard")
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                notification.open({
                    message: 'Login was NOT successful',
                    description: 'The PassWord or username is not correct.',
                    type:'error',
                });
                console.log(error.response.data);
            });

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <Form
            name="normal_login"
            className="login-form"
            onSubmit = {handleSubmit}
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <a className="login-form-forgot" href="/forget-password">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    );
};


export default Login;