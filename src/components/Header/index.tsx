import { Navbar, StyledButton, StyledHeader } from "./style"
import Image from "next/image"

const Header = () => {

    return (
        <>
            <StyledHeader>
                
                <Image 
                    width={55}
                    height={55}
                    alt="logo"
                    src='/images/logo.png'
                />

                <Navbar>
                    <StyledButton $isSpecialButton>
                        Versículo do Dia
                    </StyledButton>
                    <StyledButton 
                        $isSpecialButton={false}
                    >
                        Estudos
                    </StyledButton>
                    <StyledButton 
                        $isSpecialButton={false}
                    >
                        Planos de Leitura
                    </StyledButton>
                    <StyledButton
                        $isSpecialButton={false}
                    > 
                        Mapa
                    </StyledButton>
                </Navbar>
            </StyledHeader>
        </>
    )
}

export default Header