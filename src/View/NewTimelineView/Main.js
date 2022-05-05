import "./Main.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";
import chat from "./chat-svgrepo-com.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { Modal } from "antd";
import { useState } from "react";
import MessageList from "../Chat/MessageList";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ContactsOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./dashboard.css";
import { BsXLg, BsJustify } from "react-icons/bs";

function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

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
              <Menu.Item icon={<BsXLg />}>
                <a onClick={displaySideBarHandler}>Close</a>
              </Menu.Item>
            )}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            //className="site-layout-background"
            style={{
              background: "#3da3d5",
              minHeight: 280,
            }}
          >
            <>
              {!sideBarIsOpen && (
                <a className="ml-3 mt-5" onClick={displaySideBarHandler}>
                  <BsJustify size={35} />
                </a>
              )}

              <div>
                <h1 className="title">Timeline</h1>
                <VerticalTimeline>
                  {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                      element.buttonText !== undefined &&
                      element.buttonText !== null &&
                      element.buttonText !== "";

                    return (
                      <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={
                          isWorkIcon ? workIconStyles : schoolIconStyles
                        }
                        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                      >
                        <h3 className="vertical-timeline-element-title">
                          {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                          {element.location}
                        </h5>
                        <p id="description">{element.description}</p>
                        {showButton && (
                          <a
                            className={`button ${
                              isWorkIcon ? "workButton" : "schoolButton"
                            }`}
                            href="/"
                          >
                            {element.buttonText}
                          </a>
                        )}
                      </VerticalTimelineElement>
                    );
                  })}
                </VerticalTimeline>
              </div>
              <div className="sticky-config rounded-circle" onClick={showModal}>
                <img src={chat} alt="chat" className="chat-icon" />
              </div>
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Modal.Body>
                  <MessageList />
                </Modal.Body>
              </Modal>
              {componentsSwitch(selectedMenuItem)}
            </>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Main;
