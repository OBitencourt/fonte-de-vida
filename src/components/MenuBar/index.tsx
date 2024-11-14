import Image from "next/image"
import { ButtonsWrapper ,MenuButton, StyledMenuBar, TextDiv, User } from "./style"
import { useRouter } from "next/router"
import { Typography } from "@mui/material"
import Avatar from "@mui/material/Avatar"

const MenuBar = () => {
    const router = useRouter()

    const handleRoute = (route: string) => {

        router.push(route)
    }

    return (

        <>
            <StyledMenuBar>
                <User>

                    <Avatar sx={{ bgcolor: 'white', color: '#765D54', width: 37, height: 37, marginRight: 1 }}>
                        N
                    </Avatar>
                    <Typography
                        color="white"
                        sx={{
                            fontFamily: 'Inria Sans'
                        }}
                    >
                        userficticio@hotmail.com
                    </Typography>
                </User>


                <ButtonsWrapper>

                    <MenuButton 
                        onClick={() => handleRoute('/home')}
                        $isActive={router.pathname === '/home' ? true : false}
                    >
                        <Image 
                            src={router.pathname === '/home' ? '/images/home-brown.png' : '/images.home-white.png'}
                            width={25}
                            height={25}
                            alt="home"
                        />    
                        <TextDiv>
                            Home 

                        </TextDiv>
                    </MenuButton>
                    <MenuButton
                        onClick={() => handleRoute('/study')}
                        $isActive={router.pathname === '/study' ? true : false}
                    >
                        <Image 
                            src='/images/study-white.png'
                            width={25}
                            height={25}
                            alt="study"
                        />
                        <TextDiv>
                            Estudos 

                        </TextDiv>
                    </MenuButton>
                    <MenuButton 
                        onClick={() => handleRoute('/dayverse')}
                        $isActive={router.pathname === '/dayverse' ? true : false}
                    >
                        <Image 
                            src='/images/day-white.png'
                            width={25}
                            height={25}
                            alt="dayverse"
                        />
                        <TextDiv>
                            Versículo do Dia 

                        </TextDiv>
                    </MenuButton>
                    <MenuButton
                        onClick={() => handleRoute('/plans')}
                        $isActive={router.pathname === '/plans' ? true : false}
                    >
                        <Image 
                            src='/images/plans-white.png'
                            width={25}
                            height={25}
                            alt="plans"
                        />
                        <TextDiv>
                            Planos de Leitura 

                        </TextDiv>
                    </MenuButton>
                    <Typography 
                        variant="h2"
                        sx={{
                            fontFamily: 'Playfair Display',
                            textShadow: '0px 0px 20px gray',
                            position: 'absolute',
                            bottom: 0,
                            width: '200px'
                        }}
                        align="center"
                        color="#FFF1D9"
                        fontSize={40}
                        gutterBottom
                    >
                        Fonte de Vida
                    </Typography>
                </ButtonsWrapper>



            </StyledMenuBar>
        </>
    )
}


export default MenuBar