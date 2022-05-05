import React, { useState, useRef } from "react";
import { request } from "./Network.js";
import "antd/dist/antd.css";
import "./CreateTimeLine.css";
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

export default function CreateTimeline() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  const titleInputRef = useRef();
  const privilegeLevelInputRef = useRef();
  const descriptionInputRef = useRef();
  const startsAtInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    request("POST", "/api/timeline/create", {
      body: {
        title: titleInputRef.current.value,
        privilege_level: privilegeLevelInputRef.current.value,
        description: descriptionInputRef.current.value,
        startsAt: startsAtInputRef.current.value,
      },
    })
      .then((data) => {
        alert("*** Timeline created successfully ***");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  const displaySideBarHandler = () => {
    if (sideBarIsOpen) {
      document.querySelector(".sidebar").style.display = "none";
    } else {
      document.querySelector(".sidebar").style.display = "block";
    }
    setSideBarIsOpen((prev) => !prev);
  };

  return (
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
                <BsJustify size={35} />
              </a>
            )}

            <div className="form-style-5">
              <form className="create-submit-box" onSubmit={handleSubmit}>
                <fieldset style={{ marginTop: "10px" }}>
                  <legend>Create Timeline</legend>
                  <input
                    type="text"
                    name="title"
                    ref={titleInputRef}
                    placeholder="Title"
                  />
                  <select
                    id="privilege_level"
                    name="privilege_level"
                    ref={privilegeLevelInputRef}
                  >
                    <option value="public">Privilege Level: Public</option>
                    <option value="private">Privilege Level: Private</option>
                  </select>
                  <textarea
                    ref={descriptionInputRef}
                    name="description"
                    placeholder="Description"
                  ></textarea>

                  <input
                    ref={startsAtInputRef}
                    type="date"
                    name="date"
                    placeholder="Starts At Date"
                  />
                  <button
                    className="ghost margin-button"
                    type="submit"
                    value="Submit"
                  >
                    Sign Up
                  </button>
                </fieldset>
              </form>
            </div>
            {componentsSwitch(selectedMenuItem)}
          </>
        </Content>
      </Layout>
    </Layout>
  );
}

// const MakeTimeline = () => {
//     const [componentSize, setComponentSize] = useState('large');
//
//
// }
