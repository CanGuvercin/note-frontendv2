import React, { useContext } from "react";

// Example AuthContext (replace with your actual context)
const AuthContext = React.createContext({
    user: null,
    login: () => {},
    logout: () => {},
    signup: () => {},
});

const UserStatus = () => {
    const { user, login, logout, signup } = useContext(AuthContext);

    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "24px",
            width: "320px",
            background: "#fafbfc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            {user ? (
                <>
                    <div style={{ marginBottom: "16px" }}>
                        <strong>Welcome, {user.name || user.email}!</strong>
                    </div>
                    <button onClick={logout} style={buttonStyle}>Log Off</button>
                </>
            ) : (
                <>
                    <div style={{ marginBottom: "16px" }}>
                        <strong>Please sign in or sign up</strong>
                    </div>
                    <button onClick={login} style={buttonStyle}>Sign In</button>
                    <button onClick={signup} style={{ ...buttonStyle, marginTop: "8px" }}>Sign Up</button>
                </>
            )}
        </div>
    );
};

const buttonStyle = {
    padding: "10px 24px",
    border: "none",
    borderRadius: "4px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold"
};

export default UserStatus;