import { useInputResultContext } from "../providers/InputResultProvider";

function Result() {
    const [res, setRes] = useInputResultContext();
    return (
        <>
            <p>
                {res.result}
            </p>
        </>
    );
}

export default Result;