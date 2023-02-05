import { Link } from "react-router-dom"
//import * as S from "./NotFound.style"

export default function NotFound(props) {
    return (
        <section>
            <div>
                <h1>404: Not found</h1>
                <h2>Страница не найдена</h2>
                <p><Link to="../">Нажмите чтобы вернутся на главную.</Link></p>
            </div>
        </section>
    )
}