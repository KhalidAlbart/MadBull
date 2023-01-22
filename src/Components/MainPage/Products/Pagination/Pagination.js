import { useDispatch, useSelector } from "react-redux";
import { nextAction, prevAction, getByNumberAction } from '../../../../Actions/Pagination';
import { Button, List, Item } from './Pagination.style';
function Pagination(props) {
    const dispatch = useDispatch();
    const currentPage = useSelector(store => store.pageNumber);
    const pageCount = Math.ceil(useSelector(store => store.products.length) / 6);
    sessionStorage.setItem('page', currentPage);

    const items = () => {
        const list = [];
        for (let i = 0; i < pageCount; i++) {
            list.push(i + 1);
        }
        return list;
    }

    const handleGetPage = (event) => {
        dispatch(getByNumberAction(Number(event.target.innerText)));
    }

    const handleNextPage = () => {
        currentPage < pageCount && dispatch(nextAction());
    }

    const handlePrevPage = () => {
        1 < currentPage && dispatch(prevAction());
    }

    return (
        <>
            <Button onClick={handlePrevPage}>Назад</Button>
            <List>
                {items().map(item => <Item key={'page' + item} onClick={handleGetPage}>{item}</Item>)}
            </List>
            <Button onClick={handleNextPage}>Далее</Button>
        </>
    );
}

export default Pagination;