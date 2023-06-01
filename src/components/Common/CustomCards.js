import { Avatar, Box, Button, Card, CardActionArea, CardContent, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NormalText from './BodyContent'
import { CardSubtitle, SectionHeader } from '../../styles'

//for use in products, Services description etc
const StyledHrCard = styled(Card)(({ theme }) => ({
    display:"flex",
    backgroundColor:"white",
    // alignItems:'center',
    margin:10,
    padding:20,
    [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
        flexDirection:'column',
     },
}))

const StyledHrCardContent = styled(CardContent)(({ theme }) => ({
    display:"flex",
    // alignItems:'center',
    gap:10,
}))

const HrCard = (props) => {
    const {hideKey,width, height, image,imgPath, title, subtitle, description, imgWidth, imgHeight,readMore, redirectTo,reverse} = props
    function isObject(value) {
        return (
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value)
        );
      }
    return (
      <StyledHrCard sx={{width:width,height:height, gap:5, flexDirection: reverse ? 'row-reverse' : 'row'}}>
            {<img src={imgPath ? `/images/${imgPath}/${image}` : `/images/${image}`} 
            alt={image.replace(/\.(png|jpe?g|svg)$/, '')} 
            style={{imgWidth: imgWidth, maxWidth:'600px', height: imgHeight, maxHeight:'700px', objectFit:'contain'}}
            />
            }
        <StyledHrCardContent sx={{flexDirection: 'column'}}>
            {title && <Typography style={SectionHeader}>{title}</Typography>}
            {subtitle && <Typography style={{...CardSubtitle, maxWidth:270}}>{subtitle}</Typography>}
            {description && typeof description==='string' ?  
                ( <Typography variant='body1'>{description}</Typography>)
            : description && Array.isArray(description) ? 
                (<ul>
                    {
                        description.map(text=>(
                            <li>{text}</li>
                            ))
                    }
                
                </ul> )
                : description && isObject(description) ?
                <Box>
                    {
                        Object.keys(description).map(desc=>(
                            <Box sx={{display:'flex'}}>
                                {!hideKey && <Typography sx={{fontWeight:"bold"}}>{desc}</Typography>}
                                <NormalText style={{marginBottom:15}}>{description[desc]}</NormalText>
                            </Box>
                        ))
                    }
                </Box> : ''
            }
            {readMore && 
                <Link to={redirectTo}>
                    <Button variant='contained'>Read More</Button>
                </Link>
                }
        </StyledHrCardContent>
      </StyledHrCard>
    )
}

//for use in testimonials, brief descriptions
const StyledVrCard = styled(Card)(({ theme }) => ({
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    margin:10,
    padding:20,
    position:"relative"
}))

const StyledVrCardContent = styled(CardContent)(({ theme }) => ({
    display:"flex",
    flexDirection:'column',
    alignItems:'center'
}))

const StyledVrCardActionArea = styled(CardActionArea)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    alignSelf:'flex-end',
    justifyContent:"flex-end",
    position:'absolute',
    bottom:10
}))

const VrCard = (props) => {
    const {bgColor, color, width, height, image,imgPath, avatar, title, subtitle, description, imgWidth, imgHeight,readMore, redirectTo} = props
    return (
      <StyledVrCard style={{width:width, 
      height:height, 
      backgroundColor: bgColor ? bgColor : 'white',
      color: color ? color : 'black',
      boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.3)',
      '&:hover':{
            transform: 'scale3d(2.006, 2.006, 9)'
        }
      }}>
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
            {subtitle && <Typography variant='subtitle1' style={{fontWeight:'bold'}}>{subtitle}</Typography>}
            {description && 
            <Box>
                <NormalText text={description}/>
                {readMore && <Typography variant='body2' component={Link} to={redirectTo} style={{color:"black"}}> Read More</Typography>}
            </Box>
            }   
        </StyledVrCardContent>
      </StyledVrCard>
    )
  }

export {HrCard, VrCard}