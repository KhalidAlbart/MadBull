import * as S from "./ViewCase.style";
import { useDispatch } from "react-redux";
import { HiViewList, HiViewGrid } from "react-icons/hi";
import { viewGridAction, viewListAction } from '../../../Actions/View';

function ViewCase(props) {
    const dispatch = useDispatch();
    
    return (
        <>
            <S.Button onClick={() => dispatch(viewGridAction())} name='ViewGrid' size={S.Font.size.extralarge}><HiViewGrid /></S.Button>
            <S.Button onClick={() => dispatch(viewListAction())} name='ViewList' size={S.Font.size.extralarge}><HiViewList /></S.Button>
        </>
    )
}

export default ViewCase;