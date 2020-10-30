import React from 'react';


export default function Project(props){
    const {title, summary, firstLink, secondLink, techStack} = props.details;
    return(<div>
        <h4 className={'text-white'}>{title}</h4>
        <p className={'text-white'}>{summary}</p>
        <div>
            <button>
                <span>Repo</span>
            </button>
            <button>
                <span>Live</span>
            </button>
        </div>
    </div>)
}