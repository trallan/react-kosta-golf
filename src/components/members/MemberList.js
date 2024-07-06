const MemberList = (props) => {
    const members = props.members;

    return (
        <div>
            <h1>Medlemmar</h1>
            <table className="member-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>HCP</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr>
                            <th>{member.name}</th>
                            <th>{member.age}</th>
                            <th>{member.hcp}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MemberList;