import React from "react";
import arrowUpward from "../Assect/arrow_upward.svg";

class Main extends React.Component {
    render() {
        return (
        <main className="main">
            <div className="container ">
                <div className="out_sms scrollable">
                    <div className="out"></div>
                    <div className="out_assistante"></div>
                </div>
                <div className="form_text">
                    <input id="post-text" className="form-control" rows="3" placeholder="Сообщение ассистенту" type="search" />
                    <button className="message_input" type="submit"><img src={arrowUpward} alt="Отправка Сообщение" /></button>
                </div>
            </div>
        </main>
        )
    }
}

export default Main;