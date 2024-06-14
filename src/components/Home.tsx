import { Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const languages = [
    {
        name: "Japanese",
        code: "ja"
    },
    {
        name: "Hindi",
        code: "hi"
    },
    {
        name: "French",
        code: "fr"
    },
    {
        name: "Spanish",
        code: "es"
    },
]
function Home() {

    const navigate = useNavigate();

    const languageSelectHandler = (language:string):void => {
        navigate(`/learn?language=${language}`);
    }

  return (
    <Container maxWidth={"md"}>
        <Typography variant="h3" p={"2rem"} textAlign={"center"}>Let Your Journey Begin</Typography>
        <Stack direction={"row"} justifyContent={"center"} spacing={"2rem"}>
            {
                languages.map((i) => (
                    <Button onClick={() => languageSelectHandler(i.code)} key={i.code}>{i.name}</Button>
                ))
            }
        </Stack>
        <Typography p={"2rem"} textAlign={"center"}>Choose your language</Typography>
    </Container>
  )
}

export default Home