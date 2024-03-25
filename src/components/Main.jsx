import * as S from "./Styled";
import Hamburguer from "../assets/bigmac.svg";
import minihamb from "../assets/bigmac.svg";
import batata from "../assets/batata.svg";
import sorvete from "../assets/sorvete.svg";
import banner1 from "../assets/B2899_CRIMCD_030_410x180_mequinosofa_3b025848f3 1.png";
import banner2 from "../assets/Restaurantes_Participantes_1440x650_edc2805c19 1.png";
import banner3 from "../assets/Banner_Rodapee_estamos_Juntos_01_410x180xp_809c5044aa 1.png";


export default function Main() {
    return (
        <>

            <main>

                <S.FrameMain>


                    <S.Main1>

                        <S.HambMain src={Hamburguer} alt="Hamburguer"></S.HambMain>
                        <S.Letra>BATEU AQUELA<S.Red>#FOME</S.Red> DE <S.Red>MÉQUI?</S.Red></S.Letra>
                        <S.Icones>

                            <S.MiniHamb src={minihamb} alt="Hamburguer"></S.MiniHamb>
                            <S.MiniBatata src={batata} alt="Batata"></S.MiniBatata>
                            <S.MiniSorvete src={sorvete} alt="Sorvete"></S.MiniSorvete>

                        </S.Icones>

                    </S.Main1>

                    <S.Main2>

                        <h3>Promoção</h3>

                        <S.Card>
                            <S.Banner src={banner1}></S.Banner>
                            <h2>Que tal um #MéquiNoSofá?</h2>
                            <S.Peca>
                                <S.Menuli>Clique Aqui</S.Menuli>

                            </S.Peca>
                        </S.Card>

                        <S.Card>
                            <S.Banner src={banner2}></S.Banner>
                            <h2>Venha conhecer nossa nova loja.</h2>
                            <S.Peca>
                                <S.Menuli>Clique Aqui</S.Menuli>
                            </S.Peca>
                        </S.Card>
                        <S.Card>
                            <S.Banner src={banner3}></S.Banner>
                            <h2>Confira as medidas que o Méqui adotou!</h2>
                            <S.Peca>
                                <S.Menuli>Clique Aqui</S.Menuli>
                            </S.Peca>

                        </S.Card>

                    </S.Main2>



                </S.FrameMain>

            </main>

        </>
    )
}


