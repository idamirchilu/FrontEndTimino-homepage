import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ContactsOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./Dashboard.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsXLg, BsJustify } from "react-icons/bs";
import SignUp from "../Signup/SignUp";

export default function Dashboard(props) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  const navigate = useNavigate();
  let state = {
    collapsed: false,
  };

  const [selectedMenuItem, setSelectedMenuItem] = useState("item1");

  const componentsSwitch = (key) => {
    switch (key) {
      case "Profile":
        return window.location.replace("/dashboard");
      case "ViewTimeLine":
        return window.location.replace("/time-view");
      case "MakeTimeLine":
        return window.location.replace("/CreateTimeLine");
      case "Search":
        return window.location.replace("/Card");
      case "log-out":
        return window.location.replace("/");
      default:
        return;
    }
  };

  const displaySideBarHandler = () => {
    if (sideBarIsOpen) {
      document.querySelector(".sidebar").style.display = "none";
    } else {
      document.querySelector(".sidebar").style.display = "block";
    }
    setSideBarIsOpen((prev) => !prev);
  };

  const contentClassName = props.className;
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
              <Menu.Item icon={<BsXLg />}>
                <a onClick={displaySideBarHandler}>Close</a>
              </Menu.Item>
            )}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header
            className="site-layout-background"
            style={{ padding: 0 }}
          ></Header> */}
          <Content className={`site-layout-background ${contentClassName}`}>
            {!sideBarIsOpen && (
              <a onClick={displaySideBarHandler}>
                <BsJustify size={35} />
              </a>
            )}
            <>{props.children}</>
            {componentsSwitch(selectedMenuItem)}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
