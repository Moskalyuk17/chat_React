import React from "react";
import newChat from "../Assect/addNewAssistante.svg";
import closeSidebar from "../Assect/close_sidebar.svg";
import AddAssistante from "./AddAssistante";
import moreInfo from "../Assect/more_infoForAssistante.svg";
import AssistantOptions from "./AssistantOption";

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assistants: [],
            isHeaderVisible: true,
            activeAssistant: null, // Добавляем для отслеживания активного ассистента
        };
    }

    componentDidMount() {
        const savedAssistants = JSON.parse(localStorage.getItem("assistants")) || [];
        this.setState({ assistants: savedAssistants });
    }

    addAssistante = (assistant) => {
        this.setState((prevState) => {
            const updatedAssistants = [...prevState.assistants, assistant];
            localStorage.setItem("assistants", JSON.stringify(updatedAssistants));

            return {
                assistants: updatedAssistants,
            };
        });
    };

    // Метод для переключения активного ассистента
    toggleAssistantOptions = (index) => {
        this.setState((prevState) => ({
            activeAssistant: prevState.activeAssistant === index ? null : index, // Переключение на активного ассистента
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
                                <li key={index} className="li c-btn">
                                    <span className="nameAssistante">{assistant.name}</span>
                                    <button
                                        className="moreInfoButton"
                                        onClick={() => this.toggleAssistantOptions(index)} // Вызов метода переключения
                                    >
                                        <img src={moreInfo} alt="больше информации" />
                                    </button>

                                    <div className="modalEdit">
                                        {this.state.activeAssistant === index && (
                                            <AssistantOptions
                                                onClose={() => this.toggleAssistantOptions(index)}
                                                onEdit={() => console.log("Изменить")}
                                                onDelete={() => console.log("Удалить")}
                                                onShare={() => console.log("Поделиться")}
                                            />
                                        )}
                                    </div>

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

