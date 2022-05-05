import { Form } from "react-bootstrap";

const tags = ["blue", "green", "yellow", "red", "orange", "purple"];

export default function MainForm() {
    return (
        <Form>
            <Form.Group className="mt-1">
                <Form.Label htmlFor="title">Title:</Form.Label>
                <Form.Control className="w-50" type="text" id="title" />
            </Form.Group>
            <Form.Group className="mt-1">
                <Form.Label htmlFor="start">Start Date:</Form.Label>
                <Form.Control className="w-50" type="date" id="start" />
            </Form.Group>
            <Form.Group className="mt-1">
                <Form.Label htmlFor="end">End Date:</Form.Label>
                <Form.Control className="w-50" type="date" id="end" />
            </Form.Group>
            <Form.Group className="mt-1">
                <Form.Label htmlFor="link">Link:</Form.Label>
                <Form.Control className="w-50" type="text" id="link" />
            </Form.Group>
            <Form.Group className="mt-1">
                <Form.Label style={{ marginRight: "0.5rem" }} htmlFor="tags">
                    Tags:
                </Form.Label>
                {tags.map((tag) => {
                    return (
                        <Form.Check
                            style={{ backgroundColor: tag }}
                            inline
                            type="radio"
                            id="tags"
                            value={tag}
                        />
                    );
                })}
            </Form.Group>
            <Form.Group>
                <Form.Label>Event:</Form.Label>
                <Form.Control className="w-75" as="textarea" rows="5" />
            </Form.Group>
        </Form>
    );
}
