import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "#042743" : "white"
    };
    document.title = "TextUtils - About"
    return (
        <>
            <div className="container my-3" style={myStyle}>
                <h2 className="my-3">About TextUtils</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or commonly used text modifications.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils is a free character counter tool that provides instant character and word count statistics for any given text. This is suitable for writing essays/text when limited by max. character/word count cap.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This application works in any web browsers such as Chrome, Firefox, Microsoft Edge, Safari, Opera, etc. It is suitable for counting characters/approx. read time for facebook posts, blogs, books, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
