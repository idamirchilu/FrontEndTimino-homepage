import calendarIcon from "../../icons/calendar.png";
import mapsIcon from "../../icons/maps.png";
import newsIcon from "../../icons/news.png";
import chatIcon from "../../icons/chat.png";
import contactsIcon from "../../icons/contacts.png";
import driveIcon from "../../icons/drive.png";

export default function Icons() {
    return (
        <div
            className="icons"
            style={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                marginTop: "1rem",
            }}
        >
            <a href="https://calendar.google.com/calendar/u/0/r?tab=rc&pli=1" target="_blank">
                <img src={calendarIcon} alt="calendar" />
            </a>
            <a href="https://www.google.com/maps/@35.7318019,51.3784825,15z?hl=en" target="_blank">
                <img src={mapsIcon} alt="maps" />
            </a>
            <a href="https://news.google.com/topstories?tab=rn&hl=en-US&gl=US&ceid=US:en" target="_blank">
                <img src={newsIcon} width="45px" height="45px" alt="maps" />
            </a>
            <a href="https://hangouts.google.com/" target="_blank">
                <img src={chatIcon} width="45px" height="45px" alt="chat" target="_blank"/>
            </a>
            <a href="https://drive.google.com/drive/my-drive" target="_blank">
                <img src={driveIcon} alt="drive" />
            </a>
            <a href="https://contacts.google.com/?hl=en&tab=rC" target="_blank">
                <img src={contactsIcon} alt="contacts" />
            </a>
        </div>
    );
}
