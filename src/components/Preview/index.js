import React from 'react'

export default function Preview(props){
    const {previewUrl} = props
 
    return (
        <div className='flex flex-col my-8'>
        <img className='self-center m-auto h-56' alt='Screenshot of current project' src={previewUrl} />
        <div
        className={`relative self-center w-64 h-2 mt-2 bg-white`}
      />
        </div>
    )
}