import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link, List, Item, MAX_CAPACITY } from './Pagination.style'

function Pagination(props) {
    const pageCount = Math.ceil(useSelector(store => store.products.length) / MAX_CAPACITY)
    const { id } = useParams()

    const items = () => {
        const list = []

        for (let i = 0; i < pageCount; i++) {
            list.push(i + 1)
        }

        return list
    }
    const increment = (value) => {
        let result = value < pageCount ? value + 1 : value
        return result
    }

    const dicriment = (value) => {
        let result = value > 1 ? value - 1 : 1
        return result
    }

    return (
        <>
            <Link to={`/products/page/${dicriment(Number(id))}`}>Назад</Link>
            <List>
                {items().map(item => <Item key={'page' + item}><Link to={`/products/page/${item}`}>{item}</Link></Item>)}
            </List>
            <Link to={`/products/page/${increment(Number(id))}`}>Далее</Link>
        </>
    )
}

export default Pagination