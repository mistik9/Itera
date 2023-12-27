import React from "react";

function Fix({ title, text, list }) {

    return (
        <ul className="my-app__list">{title}
            {text ? (<li className="my-app__list-item">{text}</li>) : list?.map((i) => <li className="my-app__list-item">{i.text || text}</li>)}
        </ul>
    )
}

export default Fix;