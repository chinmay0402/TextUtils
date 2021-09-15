import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }
    const toUppercaseHandler = () => {
        const upText = text.toUpperCase();
        setText(upText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const toLowercaseHandler = () => {
        const lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const convertHandler = () => {
        let newText = text.replaceAll("class=", "className=");
        newText = newText.replaceAll("for=", "htmlFor=");
        setText(newText);
        props.showAlert("Converted to React html!", "success");
    }
    const clearTextHandler = () => {
        setText('');
        props.showAlert("Textbox cleared!", "success");
    }
    const copyHandler = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success");
    }
    document.title = "TextUtils - Home";
    return (
        <>
            <div className="container my-3">
                <h2>Enter your text to analyze below</h2>
                <div className="mb-3 my-3">
                    <textarea className="form-control" id="myBox" placeholder="Enter text here" style={{ backgroundColor: `${props.mode === "dark" ? "rgb(26 89 112)" : "white"}`, color: `${props.mode === "light" ? "black" : "white"}`, border: `${props.mode === "light" ? "1px solid black" : "none"}` }} rows="8" value={text} onChange={onChangeHandler}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={toUppercaseHandler} disabled={text.length === 0}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={toLowercaseHandler} disabled={text.length === 0}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={convertHandler} disabled={text.length === 0}>Convert to React Bootstrap</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={copyHandler} disabled={text.length === 0}>Copy to clipboard</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={clearTextHandler} disabled={text.length === 0}>Clear Text</button>
            </div>
            <div className="container">
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <div>{text.length === 0 ? "Nothing to preview" : text}</div>
            </div>
        </>
    )
}
