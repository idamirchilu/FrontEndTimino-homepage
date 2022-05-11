import React, { useRef } from "react";
import { request } from "./Network.js";
import "antd/dist/antd.css";
import "./CreateTimeLine.css";
import "antd/dist/antd.css";
import Dashboard from "../dashboard/Dashboard";

export default function CreateTimeline() {
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

  return (
    <Dashboard className="createTimeLine">
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
    </Dashboard>
  );
}
