import React from "react"; // Import react
import ListGroup from "react-bootstrap/ListGroup";

// No props received
const NewsList = () => {
    return (
        <ListGroup>
            <ListGroup.Item>
                <a
                    href="https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/04/7.jpg?w=500&ssl=1"
                    className="link"
                >
                    Missippi's literacy program shows improvemeant
                </a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a
                    href="https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/04/8.jpg?w=738&ssl=1"
                    className="link"
                >
                    Breathing oxygen linked to staying alive
                </a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a
                    href="https://i0.wp.com/bestlifeonline.com/content/uploads/2018/04/13-500x388.jpg?resize=1024%2C795&ssl=1"
                    className="link"
                >
                    Federal Agents Raid Gun Shop, Find Weapons
                </a>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default NewsList;
