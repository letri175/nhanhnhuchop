export default function Question(props) {
    return (
        <div className="question-container">
            <div className="question-background">
                <button className="new-question" onClick={props.render}> New Question</button>
                <button className="reset-question" onClick={props.reset}> Reset</button>
            </div>
        </div>
    )
}