import React, { useState } from "react";
import { Input, Select } from "antd";
import "./Search.css";
import "antd/dist/antd.min.css";
import axios from "axios";
import Search from "antd/es/input/Search";
import "antd/dist/antd.css";
import Dashboard from "../dashboard/dashboard";

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
  let state = {
    collapsed: false,
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
  // let forceUpdateHandler = () => {
  //   this.forceUpdate();
  // };
  //const { loading } = state;
  return (
    <Dashboard>
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

      <div>
        <ul>
          {fetchData.map((c) => {
            return (
              <li>
                <div class="our-team">
                  <div class="picture">
                    <img class="img-fluid" src={c.avatar} />
                  </div>
                  <div class="team-content">
                    <h3 class="name">{c.username}</h3>
                    <h4 class="title">{c.first_name + " " + c.last_name}</h4>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Dashboard>
  );
}

// <div className="col">
//   <Card style={{ width: 400, height: 150, marginTop: 16 }}>
//     <Meta
//       avatar={<Avatar src={c.avatar} />}
//       title={c.first_name + "  " + c.last_name}
//       description={c.username}
//     />
//   </Card>
// </div>
