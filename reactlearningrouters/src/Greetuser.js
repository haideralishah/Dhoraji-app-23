import React from 'react';


// props.abc % 2 === 0


export default function Greetuser(props) {
    return (
        <div>
            {
                (props.username === '' || props.username === undefined) ? (
                    <h1>Kindly login</h1>

                ) :
                    (
                        <h1>Hello {props.username}</h1>
                    )

            }
        </div>
    )
}