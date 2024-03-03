function tweet({ date, message, name, username }) {
    return (
        <div>
            <span>{name}</span>
            <span className="username">{username}</span>
            <span className="date">{date}</span>
            <p>{message}</p>
        </div>
    );
}