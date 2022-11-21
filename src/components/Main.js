export default function MainContent(props) {
    return (
        <main>
            <button className="decrease-button" onClick={props.subtract}> - </button>
            <button className="increase-button" onClick={props.add}> + </button>
            <button className="reset-button" onClick={props.reset}> Reset </button>
            <button className="reset-all-button" onClick={props.resetAll}></button>

            <button className="decrease-button2" onClick={props.subtract2}> - </button>
            <button className="increase-button2" onClick={props.add2}> + </button>
            <button className="reset-button2" onClick={props.reset2}> Reset </button>
           
            <button className="decrease-button3" onClick={props.subtract3}> - </button>
            <button className="increase-button3" onClick={props.add3}> + </button>
            <button className="reset-button3" onClick={props.reset3}> Reset </button>
            
            <button className="decrease-button4" onClick={props.subtract4}> - </button>
            <button className="increase-button4" onClick={props.add4}> + </button>
            <button className="reset-button4" onClick={props.reset4}> Reset </button>
            
        </main>
        )
  }
  