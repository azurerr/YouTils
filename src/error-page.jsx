import { useLocation } from "react-router-dom";

export default function ErrorPage() {
    const location = useLocation();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <p>
                <i>{`Error: The requested URL ${location.pathname} was not found.`}</i>
            </p>
        </div>
    );
}