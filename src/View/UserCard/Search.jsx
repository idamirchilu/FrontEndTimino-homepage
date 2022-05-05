import React, { useState } from "react";
import { Avatar, Card, Input, Select } from "antd";
import "./Search.css";
import "antd/dist/antd.min.css";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import Search from "antd/es/input/Search";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ContactsOutlined,
  LogoutOutlined,
  CloseOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./dashboard.css";

const { Option } = Input;

const selectBefore = (
  <Select defaultValue="user" style={{ width: "100px" }}>
    <Option value="user">User</Option>
    <Option value="timeline">Timeline</Option>
  </Select>
);

const state = {
  loading: false,
};

export default function Search2() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  let state = {
    collapsed: false,
  };

  const [selectedMenuItem, setSelectedMenuItem] = useState("item1");

  const componentsSwitch = (key) => {
    switch (key) {
      case "Profile":
        return <h1>item1</h1>;
      case "ViewTimeLine":
        return window.location.replace("/time-view");
      case "MakeTimeLine":
        return window.location.replace("/CreateTimeLine");
      case "Search":
        return window.location.replace("/Card");
      case "log-out":
        return window.location.replace("/");
    }
  };
  const [fetchData, setFetchData] = useState([]);
  let onSearch = (value) => {
    axios
      .get("https://timino-application.iran.liara.run//api/user/search", {
        params: {
          username: value,
        },
      })
      .then((res) => {
        setFetchData(res.data.data.users);
        // data=res.data.data.users;
        console.log(fetchData);
      });
    state.loading = false;
  };
  let forceUpdateHandler = () => {
    this.forceUpdate();
  };
  const { loading } = state;
  const displaySideBarHandler = () => {
    if (sideBarIsOpen) {
      document.querySelector(".sidebar").style.display = "none";
    } else {
      document.querySelector(".sidebar").style.display = "block";
    }
    setSideBarIsOpen((prev) => !prev);
  };
  return (
    <>
      <Layout className="h-100">
        <Sider
          className="sidebar"
          trigger={null}
          collapsible
          collapsed={state.collapsed}
        >
          <div className="logo" />
          <Menu
            selectedKeys={selectedMenuItem}
            theme="dark"
            mode="inline"
            onClick={(e) => setSelectedMenuItem(e.key)}
          >
            <Menu.Item key="Profile" icon={<UserOutlined />}>
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item key="ViewTimeLine" icon={<VideoCameraOutlined />}>
              View Your TimeLine
            </Menu.Item>
            <Menu.Item key="MakeTimeLine" icon={<UploadOutlined />}>
              Make New TimeLine
            </Menu.Item>
            <Menu.Item key="Search" icon={<ContactsOutlined />}>
              Search
            </Menu.Item>

            <Menu.Item key="log-out" icon={<LogoutOutlined />}>
              Log Out
            </Menu.Item>
            {sideBarIsOpen && (
              <Menu.Item icon={<CloseOutlined />}>
                <a onClick={displaySideBarHandler}>Close</a>
              </Menu.Item>
            )}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <>
              {!sideBarIsOpen && (
                <a onClick={displaySideBarHandler}>
                  <AlignLeftOutlined />
                </a>
              )}
              <div className="search-body">
                <div className="box">
                  <Search
                    size="large"
                    placeholder="input search ..."
                    onSearch={onSearch}
                    enterButton
                    allowClear
                    addonBefore={selectBefore}
                  />
                </div>
              </div>

              <div className="row">
                {fetchData.map((c) => {
                  return (
                    <div className="col">
                      <Card style={{ width: 400, height: 150, marginTop: 16 }}>
                        <Meta
                          avatar={<Avatar src={c.avatar} />}
                          title={c.first_name + "  " + c.last_name}
                          description={c.username}
                        />
                      </Card>
                    </div>
                  );
                })}
              </div>
            </>
            {componentsSwitch(selectedMenuItem)}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
