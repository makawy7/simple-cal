import { useInputResultContext } from "../providers/InputResultProvider";

function Ops() {

    const [res, setRes] = useInputResultContext();

    function doOperation(e) {
        const myInput = parseFloat(res.input);
        if (isNaN(myInput)) { alert('Please Enter a valud number!'); return; }
        const myResult = parseFloat(res.result);
        const currentOp = e.target.value;
        switch (currentOp) {
            case '+':
                setRes({ ...res, result: myResult + myInput });
                break;
            case '-':
                setRes({ ...res, result: myResult - myInput });
                break;
            case '*':
                setRes({ ...res, result: myResult * myInput });
                break;
            case '/':
                myInput === 0 ? alert('Division by zero not allowed!') :
                    setRes({ ...res, result: myResult / myInput });
                break;
            case 'ri':
                setRes({ ...res, input: 0 });
                break;
            case 'rr':
                setRes({ ...res, result: 0 });
                break;
            default:
                alert('Invalid operation!');
        }
    }

    return (
        <>
            <button value='+' onClick={doOperation}>add</button>
            <button value='-' onClick={doOperation}>subtract</button>
            <button value='*' onClick={doOperation}>multiply</button>
            <button value='/' onClick={doOperation}>divide</button>
            <button value='ri' onClick={doOperation}>reset input</button>
            <button value='rr' onClick={doOperation}>reset Result</button>
        </>
    )
}

export default Ops;