import React from 'react'


const Header = (props) => {
    return ( 
        <div>
            <h1>{props.header}</h1>
        </div>
    )
    
}
const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercises}</p>
        </div>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part part={props.name} exercises={props.exercises}/>
        </div>
    )
}
const Course = ({course}) => {
    const total=course.parts.reduce((s,p) => s+p.exercises,0);
    return (
        <div>
            <Header header={course.name}></Header>
            <ul>
                {course.parts.map((course) => 
                    <Content key={course.id} name={course.name} exercises={course.exercises} />
                )}
            </ul>
            <p>Total of: {total} exercises </p>
        </div>
    )
}

export default Course