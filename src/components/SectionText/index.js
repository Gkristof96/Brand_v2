import React from 'react'

const SectionText = ({data}) => {
    return (
        <>
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
            <p>{data.text}</p>
        </>
    )
}

export default SectionText
