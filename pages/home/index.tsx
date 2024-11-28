import TemplateDash from '@/src/templates/Dash'
import { Container, Typography } from '@mui/material';
import axios from 'axios';

import { useState, useEffect } from 'react';
import { BooksWrapper, Wrapper } from './style';

const Home = () => {
    //const [bibles, setBibles] = useState([]);

    useEffect(() => {
        axios.get('https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/books', {
            headers: {
                'api-key': '11d3d3f880c4f4606e9e0d4cd6e63556'
            }
        })
        .then((response) => {
            
            //setBibles(response.data.data)
            console.log(response)

        })
        .catch((error) => {
            console.error(error);
            //setError("Não foi possível carregar as Bíblias.");
        });
    }, []);

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
                        Bible
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
                            Old Testament
                        </Typography>
                    </BooksWrapper>
                    <BooksWrapper>
                    <Typography
                            align='center'
                            sx={{
                                fontFamily: 'Inria Sans'
                            }}
                        >   
                            New Testament
                        </Typography>
                    </BooksWrapper>
                </Wrapper>
            </TemplateDash>
        </>
    )
}


export default Home