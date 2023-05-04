const WesleyResponse = () => {

    const responses = [
        require('../images/sorry_what.png'),
        require('../images/train_to_factville.png'),
        require('../images/blade.png'),

        // "BALDERDASH",
        // "Wesley's thirst for truth has been quenched",
        // "That's in Wesley's Factionary",
        // "PISH",
        // "Yeah that sounds legit",
        // "SHIT OF A BULL",
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
        <img src={result} alt="You Should Be Seeing An Image of Wesley Snipes But Are Not" style={{height:500, width:600}}/>
        {/* <img src={result} alt="You Should Be Seeing An Image of Wesley Snipes"></img> */}
        </div>
        </div>
        </>
     );
}
 
export default WesleyResponse;

