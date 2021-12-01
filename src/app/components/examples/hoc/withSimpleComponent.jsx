import React from "react";

const withSimpleComponent = (Component) => () => {
    const isAuth = localStorage.getItem("user");

    const onLogin = () => {
        localStorage.setItem("user", true);
    };

    const onLogOut = () => {
        localStorage.removeItem("user");
    };

    return (
        <div className="card">
            <div className="card-body">
                <Component
                    isAuth={isAuth}
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                />
            </div>
        </div>
    );
};

export default withSimpleComponent;
