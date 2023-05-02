const WesleyResponse = () => {

    const responses = [
        "Yeah that sounds legit",
        "SHIT OF A BULL",
        "We're on the train to fact-ville baby",
        "BALDERDASH",
        "Wesley's thirst for truth has been quenched",
        "Why not?",
        "That's in Wesley's Factionary",
        "PISH",
    ];

    function get_random_response(responses) {
    return responses[Math.floor(Math.random()*responses.length)]};

    const result = get_random_response(responses) 
    console.log(result)

    return ( 
        <>
        <br />
        <div className="responses">
        <h3>Wesley's Response:</h3>
        <div className="big-response">
        <p>{result}</p>
        </div>
        </div>
        </>
     );
}
 
export default WesleyResponse;