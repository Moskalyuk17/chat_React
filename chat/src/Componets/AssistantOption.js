import React from "react";

const AssistantOptions = ({ onClose, onEdit, onDelete, onShare }) => {

    return (
        <div className="assistantOptions">
            <button onClick={onEdit}>Изменить</button>
            <button onClick={onShare}>Поделиться</button>
            <button onClick={onDelete}>Удалить</button>
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
};

export default AssistantOptions;
