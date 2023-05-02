const WesleyForm = () => {

    // location.href = location.href
    // location.replace(location.href)

    return ( 
            <form onsubmit="document.location.reload(true)">
            <label for="user-query"><h2>Hey Wesley, I heard...</h2></label>
            <input type="text" id="user-query" name="user-query" maxlength="1000"></input>
            <h2>Is that true?</h2>
            <input type="submit" value="Submit"></input>
            </form>
            )
}
 
export default WesleyForm;