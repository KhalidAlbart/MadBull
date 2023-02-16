import { HiEmojiSad } from "react-icons/hi"
import { Container, Message } from "./NotFound.style"

export default function NotFound(props) {

    return (
        <Container>
            <HiEmojiSad/>
            <Message>К сожалению, товаров не найдено.</Message>
        </Container>
    )
}