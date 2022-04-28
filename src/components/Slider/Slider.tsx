import MySwiper from "./components/MySwiper";
import WineCard from "./components/WineCard";
import EventCard from "./components/EventCard";
import "./styles.css";
import data from "./data";

const events = data.events;
const wines = data.wines;
console.log("events", events);

export default function App() {
    return (
        <>
            <h1>Hello</h1>
            <div>
                <a href="#events">Events</a>
            </div>
            <br />
            <div>
                <a href="#wines">Wines</a>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum
                luctus felis eget tempor. Quisque nunc enim, tristique ut gravida ut,
                vulputate lacinia quam. Morbi et leo nec tortor suscipit tristique.
            </p>
            <MySwiper
                Component={EventCard}
                data={events}
                title="Events"
                id={"events"}
            />
            <h2>Valami más tartalom</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum
                luctus felis eget tempor. Quisque nunc enim, tristique ut gravida ut,
                vulputate lacinia quam. Morbi et leo nec tortor suscipit tristique.
            </p>
            <MySwiper Component={WineCard} data={wines} title="Wines" id={"wines"} />
            <h2>Megint Valami más tartalom</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum
                luctus felis eget tempor. Quisque nunc enim, tristique ut gravida ut,
                vulputate lacinia quam. Morbi et leo nec tortor suscipit tristique.
            </p>
        </>
    );
}
