const WesleyForm = ({setImage}) => {

    return ( 
            <form>
            <label for="user-query"><h2>Hey Wesley, I heard...</h2></label>
            <input type="text" id="user-query" name="user-query" maxlength="1000"></input>
            <h2>Is that true?</h2>
            <button onClick={setImage}>CLICK ME DADDY</button>
            </form>
            )
}
 
export default WesleyForm;