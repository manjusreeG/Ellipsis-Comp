import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";

import styled from 'styled-components';

export interface EllipsisProps {
    text: string;
}

const EllipsisComp = styled.div`
    padding:10px;
    div{
        margin: 30px 20px 10px 10px;
    }
    textarea{
        font-family: serif;
        padding: 10px;
    }
`;

const TextDisplay = styled.span`
    margin: 10px;
    padding: 10px;
    border: 3px solid darkgrey;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d); 
    .ellipsis{
        border-image-source: linear-gradient(to left, #00C853, #B2FF59) ;
    }
`;

const Ellipsis = ({ text }: EllipsisProps) => {
    const [textInput, setTextInput] = useState(text);
    const [showFullText, setShowFullText] = useState(false);

    return <EllipsisComp>
        <div>Ellipsis Component</div>
        <div>Enter your text here:</div>
        <textarea rows={3} name='inputText' value={textInput} onChange={(e)=>setTextInput(e.target.value)}/>
        <div>Here's your text 
            <TextDisplay className={`${showFullText && "ellipsis"}`} data-tip data-for="textDispTip" onClick={()=>setShowFullText(!showFullText)}>{textInput.length> 20 && !showFullText ? <>{textInput.substring(0,19)}&hellip;</> : <>{textInput}</>} 
            </TextDisplay>
        </div>
        {textInput.length>20 && <ReactTooltip id="textDispTip">{textInput}</ReactTooltip>}
    </EllipsisComp>
}

export default Ellipsis;