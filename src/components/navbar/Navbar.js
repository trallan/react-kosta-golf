const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="title">Kosta mästerskapen</h1>
            <div className="links">
                <a href="/">Hem</a>
                <a href="/members">Medlemmar</a>
                <a href="/scoreboard">Scoreboard</a>
            </div>
        </nav>
    );
}

export default Navbar;
