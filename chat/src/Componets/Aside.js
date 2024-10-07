import React from "react";
import newChat from "../Assect/addNewAssistante.svg";
import closeSidebar from "../Assect/close_sidebar.svg";

class Aside extends React.Component {
    render() {
        return (
            <aside className="aside">
                <div className="container">
                    <div className="header_aside">
                        <button className="new_chat" data="Добавить нового ассистента"><img src={newChat} alt="Новый чат" /></button>
                        <button className="close_sidebar" data="Закрыть боковую панель"><img src={closeSidebar} alt="Закрыть боковую панель" /></button>
                    </div>
                    <ul className="list_chat"></ul>
                </div>
            </aside>
        )
    }
}

export default Aside;