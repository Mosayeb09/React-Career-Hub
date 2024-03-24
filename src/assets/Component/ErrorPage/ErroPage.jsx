import { Link } from "react-router-dom";


const ErroPage = () => {
    return (
        <div>
            <h2>Ooops!</h2>
            <br />
            <button><Link to={"/"}>Go Back to Home</Link></button>
        </div>
    );
};

export default ErroPage;