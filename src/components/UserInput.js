import { useInputResultContext } from "../providers/InputResultProvider";

function UserInput() {
    let [res, setRes] = useInputResultContext();
    function changeHandler(e) {
        setRes({ ...res, input: e.target.value });
    }
    return (
        <>
            <input type="number" value={res.input} onChange={changeHandler} />
        </>
    );
}

export default UserInput;