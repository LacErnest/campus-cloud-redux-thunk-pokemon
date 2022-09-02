import { useParams } from "react-router-dom"
import { useDispatch,  useSelector} from "react-redux"
import { fetchingPokemon } from "../redux/actions/actionCreators"
import { useEffect } from "react"
import { styled } from "@mui/material" 
import {Card, CardHeader, CardMedia, CardContent, Typography, Avatar, IconButton, Icon} from "@mui/material"
import { red } from "@mui/material/colors"
import  MoreVertIcon from '@mui/icons-material/'

export default function PokemonDetail(){

  const id = useParams().id
  const dispatch = useDispatch()
  const data = useSelector((store) => store.pokemons)
  const loading = useSelector((store) => store.loading)

  useEffect(() =>{
    dispatch(fetchingPokemon(id))
    console.log(data)
  }, [])

  console.log("hors useeffect", data)

  const infos = ''

  return(
    <Card>
      <CardHeader 
        avatar ={
          <Avatar sx={{ bgcolor: red }} >
            P
          </Avatar>
        }
        action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        title={data.species.name}
      />
      <CardMedia
        component="img"
        height="auto"
        image={data.sprites.versions.generation-v.black-white.animated.front_default}
        alt={data.species.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.abilities.map((ability, index) => {
            <p key={index}>{ability.name}</p>
          })}
        </Typography>
      </CardContent>
    </Card>
  )
}