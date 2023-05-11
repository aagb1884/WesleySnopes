

const WesleyResponse = ({image}) => {

    

    return ( 
        <>
        <br />
            <div className="responses">
            <h3>Wesley's Response:</h3>
            <div className="big-response">
            <img src={image} alt="You Should Be Seeing An Image of Wesley Snipes But Are Not" style={{height:500, width:600}}/>
            </div>
        </div>
        </>
     );
}
 
export default WesleyResponse;

