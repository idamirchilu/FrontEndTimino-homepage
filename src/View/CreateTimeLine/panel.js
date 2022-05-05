import { Card, Collapse, Button, Form } from "react-bootstrap";
import Icons from "./components/Icons";
import MainForm from "./components/MainForm";
import { useState, useRef } from "react";

export default function Panel(props) {
    const [availabilityLevelData, setAvailabilityLevelData] = useState([]);
    const availabilityLevelInputRef = useRef();

    const addAvailabilityLevelDataHandler = () => {
        console.log(availabilityLevelInputRef.current.value);
        setAvailabilityLevelData((prev) => [
            ...prev,
            availabilityLevelInputRef.current.value,
        ]);
    };

    return (
        <div style={{ minHeight: "150px" }}>
            <Collapse in={props.open} dimension="width">
                <div
                    className="card">
                    <Card
                        body
                        style={{
                            color: "#fff",
                            width: "400px",
                            backgroundColor: "#abe9cd",
                            backgroundImage:
                                "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)",
                            direction: "ltr",
                        }}
                    >
                        <Form.Group>
                            <Form.Label htmlFor="availability-levels">
                                Availability levels:
                            </Form.Label>
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                <Form.Control
                                    className="w-50"
                                    id="availability-levels"
                                    type="text"
                                    ref={availabilityLevelInputRef}
                                />
                                <Button
                                    onClick={addAvailabilityLevelDataHandler}
                                    style={{ marginLeft: "0.5rem" }}
                                >
                                    Enter
                                </Button>
                            </div>
                        </Form.Group>
                        {availabilityLevelData.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                        <MainForm />
                        <Button className="mt-1">Submit</Button>
                        <Icons />
                    </Card>
                </div>
            </Collapse>
        </div>
    );
}
