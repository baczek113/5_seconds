import React, {useState} from 'react'


export default function MainPage(props){
    if(props.gameState=='mainPage')
    {
    return(
            <p class = 'fw-bolder'>xdd</p>
        );
    }
    else
    {
        return(
            <p class = 'fw-bolder'>tera ingame</p>
        );
    }
}