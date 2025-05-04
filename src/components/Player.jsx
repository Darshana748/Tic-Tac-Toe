
import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(initialName);

    function handleEditClick() {
        if (isEditing) {
            onChangeName({ symbol, newName: editedName });
        }
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setEditedName(event.target.value);
    }

    let playerNameDisplay = <span className="player-name">{initialName}</span>;
    if (isEditing) {
        playerNameDisplay = (
            <input type="text" required value={editedName} onChange={handleChange} />
        );
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameDisplay}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
