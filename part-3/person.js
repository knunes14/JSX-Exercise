const max_name_length_to_show = 6;

function person({ age, hobbies, name }) {
    const voteText = age = 18 ? "Go Vote!" : "Go Study!";

    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some info about this person:</p>
            <ul>
                <li>Name: {name.slice(0, max_name_length_to_show)}</li>
                <li>Age: {age}</li>
                <ul>Hobbies: {hobbiesLIs}</ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}