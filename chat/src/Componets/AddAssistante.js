import React from "react";
import CloseModalWindow from "../Assect/close_modal_window.svg"


class AddAssistante extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            name: "",
            link: "",
            version: "4o",
        };
    }

    openWidowVersion = () => {
        document.querySelector("#version").style.display = 'flex';
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleVersionSelect = (version) => {
        this.setState({ version });
    };

    addAssistanteInSideBar = (event) => {
        event.preventDefault();
        const {  name, link, version } = this.state;

        this.props.onAddAssistante({ name, link, version });

        document.querySelector(".modalBackground").style.display = "none";
        document.querySelector("#version").style.display = 'none';
    };

    modalCLose = () => {
        document.querySelector(".modalBackground").style.display = "none";
        document.querySelector("#version").style.display = 'none';
    }

    modalBackgroundClose = (event) => {
        const modalBackground = document.querySelector(".modalBackground");
        const versionSelect = document.querySelector("#version");

        if (event.target === modalBackground) {
            modalBackground.style.display = "none";
            versionSelect.style.display = "none";
        }
    }

    render() {
        return (
            <div className="modalBackground" onClick={this.modalBackgroundClose}>
                <div className="modalActive">
                    <button className="modalClose" data="Закрытия модального окна" onClick={this.modalCLose}>
                        <img src={CloseModalWindow} alt="закрытие модального окна" />
                    </button>
                    <form className="modalWindow" onSubmit={this.addAssistanteInSideBar}>
                        <label>
                            Название
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Ссылка
                            <input
                                type="text"
                                name="link"
                                value={this.state.link}
                                readOnly
                            />
                        </label>
                        <label>
                            Версия
                            <div className="selected" onClick={this.openWidowVersion}>{this.state.version}</div>
                            <ul id="version" >
                                <li onClick={() => this.handleVersionSelect("4o-mini")}>4o-mini</li>
                                <li onClick={() => this.handleVersionSelect("4o")}>4o</li>
                            </ul>
                        </label>
                        <button className="create" type="submit">
                            Создать
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddAssistante;