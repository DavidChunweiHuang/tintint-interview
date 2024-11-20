import { useState } from "react"

const UserInput = ({ value, onChange, onSubmit }) => {
    return (
        <div>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
            <button onClick={onSubmit}>送出</button>
        </div>
    )
}

export default UserInput