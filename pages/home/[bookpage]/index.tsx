
import TemplateDash from "@/src/templates/Dash"
import { Container, Typography } from "@mui/material"
import axios from "axios"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Chapter, ChaptersWrapper } from "./style"

type Chapter = {
    id: string
    reference: string
}

const Book = () => {

    const router = useRouter()

    const {id, bibleId, label, bookpage} = router.query

    const [chapters, setChapters] = useState([])

    useEffect(() => {
        axios.get(`https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${id}/chapters`, {
            headers: {
                'api-key': '11d3d3f880c4f4606e9e0d4cd6e63556'
            }
        })
        .then(response => {

            const chapters = response.data.data 
            setChapters(chapters)
        })
    }, [])


    console.log(chapters)
    return (
        <>
            <TemplateDash>
                <Container maxWidth='lg'>

                    <Typography
                        fontSize={40}
                        sx={{
                            
                            fontFamily: 'Playfair Display',
                            mb: 3
                        }}
                    >
                        {label}
                    </Typography>
                    <ChaptersWrapper>

                        {
                            chapters.map((chapter) => (

                                <Chapter key={chapter.id}>
                                    {chapter.reference}
                                </Chapter>
                            ))
                        }
                    </ChaptersWrapper>
                    
                </Container>
            </TemplateDash>
        </>
    )
}


export default Book