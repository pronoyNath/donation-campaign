import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-3xl text-red-500 font-bold text-center mt-28 space-y-5">
            <h3 className="">Oopsss!!!</h3>
            <p className="mb-10">
                <i>
                 path:   {error.statusText || error.error.message}
                </i>
            </p>
            <p className="text-yellow-500 underline">Go Back to Home </p>
            <Link to={'/'}>
            <button className="btn bg-green-500 text-white font-semibold mt-5">Click Here 
            <i className="fa-solid fa-right-long"></i>
            </button>
            </Link>
        </div>
    );
};

export default ErrorPage;