import React from 'react';

export const Highlight = ({text, style, exp}) => {
    const regex = new RegExp(exp, 'ig');
    const title =  exp ? text.replace(regex, '<mark>$&</mark>') : text 
    return (
        <h3 style={style} dangerouslySetInnerHTML={{
            __html:
            `<h3>${title}</h3>`
        }}
        />
    )
}