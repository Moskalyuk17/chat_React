import React from "react";


class AddAssistante extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            link: "",
            version: "4o",
        };
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
        const { name, link, version } = this.state;

        // Передаем данные в родительский компонент
        this.props.onAddAssistante({ name, link, version });

        // Закрываем модальное окно
        document.getElementsByClassName("modalBackground")[0].style.display = "none";
    };

    render() {
        return (
            <div className="modalBackground">
                <div className="modalActive">
                    <button className="modalClose" data="Закрытия модального окна">
                        <img src="/img/close_modal_window.svg" alt="закрытие модального окна" />
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
                            <div className="selected">{this.state.version}</div>
                            <ul id="version">
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