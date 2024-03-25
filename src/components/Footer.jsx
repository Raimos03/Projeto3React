
import * as S from "./Styled";
import logo from "../assets/logo.png"
import gplay from "../assets/pla.png"
import ios from "../assets/app_store_3x_d293084ca1.png"

export default function Footer(){
    return(
    <>

    <S.Footer>

        <S.Container>

            <S.Footer1>
                <S.Logo2 src={logo} alt="logo"></S.Logo2>
                <S.p>© McDonald’s 2024</S.p>
            </S.Footer1>


            <S.Footer2>
                <S.Logo3 src={gplay} alt="logo"></S.Logo3>
                <S.Logo3 src={ios} alt="logo"></S.Logo3>
            </S.Footer2>

        </S.Container>
    </S.Footer>
    
    </>)
}