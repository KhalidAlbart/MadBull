import { HiEmojiSad } from "react-icons/hi"
import { Container, Message, Colors, Font } from "./NotFound.style"

export default function NotFound(props) {
    const size = Font.size.extralarge + "rem"

    return (
        <Container>
            <HiEmojiSad style={{fill: Colors.darkred, width: size, height: size}} />
            <Message>К сожалению, товаров не найдено.</Message>
        </Container>
    )
}