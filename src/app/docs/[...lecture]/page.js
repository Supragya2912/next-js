"use client"

export default function Lecture({params}) {
    console.log(params)
    return (
        <div>
            <h1>{params.lecture[0]}</h1>
            <h1>Lecture</h1>
        </div>
    )
}