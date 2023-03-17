import React from 'react';
import './Appbar.css';
import { useState } from 'react';



export const Appbar = () =>{

    let [character,setcharacter]= useState(0)
    
    function setloid(){
        setcharacter("loid")

    }
    function setanya(){
        setcharacter("anya")
    }
    function setyor(){
        setcharacter("yor")
    }
    function setdefault(){
        setcharacter(0)
    }
    function determine_state(variable){
        if(variable==="loid")
         return "loid"
        else if(variable==="anya")
         return "anya"
        else if(variable==="yor")
         return "yor"
        else if(variable===0)
         return "body"
    }
    function determine_container(variable){
        if(variable==="loid")
         return "container-loid"
        else if(variable==="anya")
         return "container-anya"
        else if(variable==="yor")
         return "container-yor"
        else if(variable===0)
         return "container"
    }

    return(
        <div className={determine_state(character)}>
        <div className={determine_container(character)}>
            <button className="child" onClick={setdefault}></button>
            <div className="child2">
                <button className="char1" onClick={setloid}>Loid Forger</button>
                <button className="char2" onClick={setanya}>Anya Forger</button>
                <button className="char3" onClick={setyor}>Yor Forger</button>
            </div>
        </div>
        </div>
    )
}

