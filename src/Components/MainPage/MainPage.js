import GreetingBlock from './GreetingBlock/GreetingBlock';
import Advantages from './Advantages/Advantages';
import Products from './Products/Products';
import * as Styled from './MainPage.style';

export default function MainPage(props) {
    return(
        <Styled.MainPage>
            <Products />
        </Styled.MainPage>
    )
}