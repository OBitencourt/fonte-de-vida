import TemplateDash from '@/src/templates/Dash'
import { Container, Typography } from '@mui/material';

import { useState, useEffect } from 'react';
import { BooksWrapper, Wrapper } from './style';

const Home = () => {
    const [verse, setVerse] = useState(null);

    useEffect(() => {
        
    }, []);

    console.log(verse)

    return (

        <>
            <TemplateDash>
                <Container
                    maxWidth='xs'
                    
                >
                    <Typography
                        sx={{
                            fontFamily: 'Playfair Display'
                        }}
                        align='center'
                        fontSize={80}
                        gutterBottom
                    >
                        Bíblia
                    </Typography>

                </Container>
                <Wrapper>

                    <BooksWrapper>
                        <Typography
                            align='center'
                            sx={{
                                fontFamily: 'Inria Sans'
                            }}
                        >   
                            Antigo Testamento
                        </Typography>
                    </BooksWrapper>
                    <BooksWrapper>
                    <Typography
                            align='center'
                            sx={{
                                fontFamily: 'Inria Sans'
                            }}
                        >   
                            Novo Testamento
                        </Typography>
                    </BooksWrapper>
                </Wrapper>
            </TemplateDash>
        </>
    )
}


export default Home