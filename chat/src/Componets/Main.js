import React from "react";
import arrowUpward from "../Assect/arrow_upward.svg";

class Main extends React.Component {

    addText = (event) => {
        event.preventDefault();

        document.querySelector(".message_input").onclick = function inputMessage() {
            const card = document.querySelector('.out');
            const text_block = document.createElement('p');
    
            text_block.style.padding = '16px';
            text_block.style.borderRadius = '16px';
            text_block.style.margin = '4px';
            text_block.style.background = '#2F2F2F';
            text_block.style.color = '#fff';
            text_block.style.whiteSpace = "pre-wrap";
            text_block.style.maxWidth = "100%";
            text_block.style.display = "block";
    
            const tbText = document.getElementById('post-text').value;
            text_block.append(tbText);
    
            card.append(text_block);
            document.getElementById("post-text").value = "";

        };
    }
    
    
    render() {
        return (
        <main className="main">
            <div className="container ">
                <div className="out_sms scrollable">
                    <div className="out"></div>
                    <div className="out_assistante"></div>
                </div>
                <form className="form_text" onSubmit={this.addText}>
                    <input id="post-text" 
                        className="form-control" 
                        rows="3" 
                        placeholder="Сообщение ассистенту" 
                        type="search"  
                        required
                    />
                    <button 
                        className="message_input" 
                        type="submit"
                    >
                        <img src={arrowUpward} alt="Отправка Сообщение" />
                    </button>
                </form>
            </div>
        </main>
        )
    }
}

export default Main;