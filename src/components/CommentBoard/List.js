import { useState } from "react"

const List = ({ comments, onEdit }) => {

    return (
        <div>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        {comment}
                        <button onClick={() => onEdit(index)}>Edit</button>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default List