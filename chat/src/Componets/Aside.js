import React from "react";
import newChat from "../Assect/addNewAssistante.svg";
import closeSidebar from "../Assect/close_sidebar.svg";
import AddAssistante from "./AddAssistante";
import moreInfo from "../Assect/more_infoForAssistante.svg";

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assistants: [],
            isHeaderVisible: true,
        };
    }

    addAssistante = (assistant) => {
        this.setState((prevState) => ({
            assistants: [...prevState.assistants, assistant],
        }));
    };

    render() {
        return (
            <div>
                <aside className="aside">
                    <div className="container">
                        <div className="header_aside">
                            <button
                                className="new_chat"
                                data="Добавить нового ассистента"
                                onClick={() =>
                                    document.getElementsByClassName("modalBackground")[0].style.display = "block"
                                }
                            >
                                <img src={newChat} alt="Новый чат" />
                            </button>
                            <button
                                className="close_sidebar"
                                data="Закрыть боковую панель"
                                onClick={this.props.closeAside}
                            >
                                <img src={closeSidebar} alt="Закрыть боковую панель" />
                            </button>
                        </div>
                        <ul className="list_chat">
                            {this.state.assistants.map((assistant, index) => (
                                <li key={index} className="li">
                                    <span className="nameAssistante">{assistant.name}</span>
                                    <button className="moreInfoButton" onClick={this.openMoreInfo}>
                                        <img src={moreInfo} alt="больше информации" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                <AddAssistante onAddAssistante={this.addAssistante} />
            </div>
        );
    }
}

export default Aside;
