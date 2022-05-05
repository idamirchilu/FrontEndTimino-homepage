import MessageContainer from "./MessageContainer";
import {useEffect} from "react";
import {socket} from "./socket";
import {useDispatch, useSelector} from "react-redux";
import {messageActions} from "./message-slice";

const MessageList = () => {
    const dispatch = useDispatch();
    const messageState = useSelector((state) => state.message);

    useEffect(() => {
        socket.on("all-messages", (a) => {
            a.messages.sort(
                (a, b) => new Date(a.created_at) - new Date(b.created_at)
            );
            dispatch(messageActions.fetchMessages(a.messages));
        });
        socket.on("system-information", (a) => {
            dispatch(messageActions.setUserName(a.message.user.username));
        });
    }, [dispatch]);

    return (
        <>
            {messageState.messages.map((item) => (
                <MessageContainer key={item.chat_messages_id} message={item}/>
            ))}
        </>
    );
}

export default MessageList;