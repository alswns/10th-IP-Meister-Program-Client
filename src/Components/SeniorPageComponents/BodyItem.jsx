import React from 'react'
import styled from 'styled-components'
import {SeniorFontSize} from '../../assets/Datas'

const Wraper=styled.div`
display:flex;
flex-direction:column;
width:50%;
height:50%;
cursor:pointer;
align-items:center;
justify-content:center;
;
`
const Image=styled.img`
display:flex;
width:80%;
`
const Name=styled.h2`
display:flex;
justify-content:center;
font-size:${SeniorFontSize+5+'px'};
`
const Price=styled.h2`
display:flex;
display:flex;
justify-content:center;
color:red;
font-size:${SeniorFontSize+'px'};
`



function BodyItem(props) {
    return (
        <Wraper onClick={()=>props.clickEvent()}>
            <Image src={props.img}/>
            <Name>{props.name}</Name>
            <Price>{parseInt(props.price).toLocaleString()}원</Price>
        </Wraper>
    )
}

export default BodyItem