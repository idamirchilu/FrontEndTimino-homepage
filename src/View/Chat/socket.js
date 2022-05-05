import io from "socket.io-client";
export const socket = io.connect(
    "https://timino-application-chat.iran.liara.run?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMiIsInR5cGUiOiJSZWZyZXNoVG9rZW4iLCJpYXQiOjE2NTAzNDU1ODgsIm5iZiI6MTY2NTg5NzU4OH0.enNu5SNi7PzoFKmHsEwfLvgMurx_z9Bks0upPY3QVU0&timeline_id=2"
);
