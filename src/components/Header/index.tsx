import { Navbar, StyledButton, StyledHeader, StyledDifButton } from "./style"
import Image from "next/image"

const Header = () => {

    return (
        <>
            <StyledHeader>
                <Image 
                    src='/images/logo-header.png'
                    height={90}
                    width={90}
                    alt='logo'
                />             
                <Navbar>
                    <StyledButton>
                        Versículo do Dia  
                    </StyledButton>
                    <StyledButton>

                        Planos de Leitura
                    </StyledButton>
                    <StyledButton>

                        Estudos 
                    </StyledButton>
                    <StyledDifButton>
                        Login
                    </StyledDifButton>
                    <StyledDifButton>
                        Sign In
                    </StyledDifButton>
                </Navbar>   
            </StyledHeader>
        </>
    )
}

export default Header