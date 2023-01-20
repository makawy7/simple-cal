import { useInputResultContext } from "../providers/InputResultProvider";

function Ops() {
    const [res, setRes] = useInputResultContext();
    function add() {
        setRes({ ...res, result: parseFloat(res.result) + parseFloat(res.input) });
    }
    function subtract() {
        setRes({ ...res, result: parseFloat(res.result) - parseFloat(res.input) });
    }
    function multiply() {
        setRes({ ...res, result: parseFloat(res.result) * parseFloat(res.input) });
    }
    function divide() {
        parseFloat(res.input) == 0 ? alert('Division by zero not allowed!') :
            setRes({ ...res, result: parseFloat(res.result) / parseFloat(res.input) });
    }
    function resetInput() {
        setRes({ ...res, input: 0 });
    }
    function resetResult() {
        setRes({ ...res, result: 0 });
    }
    return (
        <>
            <button onClick={add}>add</button>
            <button onClick={subtract}>subtract</button>
            <button onClick={multiply}>multiply</button>
            <button onClick={divide}>divide</button>
            <button onClick={resetInput}>reset input</button>
            <button onClick={resetResult}>reset Result</button>
        </>
    )
}

export default Ops;