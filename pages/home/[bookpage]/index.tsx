
import TemplateDash from "@/src/templates/Dash"
import { Container, Typography } from "@mui/material"
import axios from "axios"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Back, Chapter, ChaptersWrapper } from "./style"
import Image from "next/image"

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


    const handleChapterClick = chapter => {
        console.log(chapter)

        router.push({
            pathname: `/home/${bookpage}/${chapter.id}`,
            query: {
                id: chapter.id,
                bibleId: chapter.bibleId,
                reference: chapter.reference,
                number: chapter.number
            }
        })
    }

    return (
        <>
            <TemplateDash>
                <Container maxWidth='lg'>

                    <Back onClick={() => history.back()}>
                        <Image 
                            src='/images/arrow-return.svg'
                            width={15}
                            height={15}
                            alt="arrow-return"
                        />
                    </Back>

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

                                <Chapter
                                    key={chapter.id}
                                    onClick={() => handleChapterClick(chapter)}
                                >
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