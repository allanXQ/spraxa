import { Avatar, Button, Card, CardActionArea, CardContent, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

//for use in products, Services description etc
const StyledHrCard = styled(Card)(({ theme }) => ({
    display:"flex",
    backgroundColor:"whitesmoke",
    alignItems:'center',
    margin:10,
    padding:20,
    [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
        flexDirection:'column',
     },
}))

const StyledHrCardContent = styled(CardContent)(({ theme }) => ({
    display:"flex",
    alignItems:'center',
    gap:10,
}))

const HrCard = (props) => {
    const {width, height, image,imgPath, title, subtitle, description, imgWidth, imgHeight,readMore, redirectTo,reverse} = props
    const navigate = useNavigate()
    return (
      <StyledHrCard sx={{width:width,height:height}}>
            {<img src={imgPath ? `/images/${imgPath}/${image}` : `/images/${image}`} 
            alt={image.replace(/\.(png|jpe?g|svg)$/, '')} 
            style={{imgWidth: imgWidth, maxWidth:'600px', height: imgHeight, maxHeight:'700px', objectFit:'contain'}}
            />
            }
        <StyledHrCardContent sx={{flexDirection: reverse ? 'column-reverse' : 'column'}}>
            {title && <Typography variant='h6' style={{fontWeight:'bold'}}>{title}</Typography>}
            {subtitle && <Typography variant='body2' style={{fontWeight:'bold'}}>{subtitle}</Typography>}
            {description && <Typography variant='body1'>{description}</Typography>}
            {readMore && <Button variant='contained' onClick={() => (navigate(redirectTo))}>Read More</Button>}
        </StyledHrCardContent>
      </StyledHrCard>
    )
}

//for use in testimonials, brief descriptions
const StyledVrCard = styled(Card)(({ theme }) => ({
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:"whitesmoke",
    margin:10,
    padding:20,
}))

const StyledVrCardContent = styled(CardContent)(({ theme }) => ({
    display:"flex",
    flexDirection:'column',
    alignItems:'center'
}))

const StyledVrCardActionArea = styled(CardActionArea)(({ theme }) => ({
    display:"flex",
    alignSelf:'center',
}))

const VrCard = (props) => {
    const {width, height, image,imgPath, avatar, title, subtitle, description, imgWidth, imgHeight,readMore, redirectTo} = props
    const navigate = useNavigate()
    return (
      <StyledVrCard sx={{width:width, height:height}}>
             {
                avatar ? <Avatar src={imgPath ? `/images/${imgPath}/${image}` : `/images/${image}`} alt={image.replace(/\.(png|jpe?g|svg)$/, '')} sx={{width:100, height:100}}/>
                : <img src={
                    imgPath ? `/images/${imgPath}/${image}` : `/images/${image}`
                } alt={image.replace(/\.(png|jpe?g|svg)$/, '')} 
                style={{imgWidth: imgWidth, maxWidth:'600px', height: imgHeight, maxHeight:'700px'}}
                />
            } 
        <StyledVrCardContent>
            {title && <Typography variant='h6' style={{fontWeight:'bold'}}>{title}</Typography>}
            {subtitle && <Typography variant='body2' style={{fontWeight:'bold'}}>{subtitle}</Typography>}
            {description && <Typography variant='body1'>{description}</Typography>}
        </StyledVrCardContent>
        <StyledVrCardActionArea>
            {readMore && <Button variant='contained' onClick={() => (navigate(redirectTo))}>Read More</Button>}
        </StyledVrCardActionArea>
      </StyledVrCard>
    )
  }

export {HrCard, VrCard}