import { useState, useEffect } from 'react';

const WesleyContainer = () => {

    const imgsrcs = [
        'images/sorry_what.png',
        'images/train_to_factville.png',
        'images/blade.png',
        'images/balderdash.png',
        'images/bull.png',
        'images/factionary.png',
        'images/legit.png',
        'images/nuh_uh.png',
        'images/physical_realm.png',
        'images/pish.png',
        'images/thirst_for_truth.png',
        'images/truth_beauty.png',
        'images/back_bullshit.png',
        'images/fuck_off.png',
        'images/no.png',
        'images/way_u_think.png',
        'images/squint.png',
        'images/question_makes_me_sad.png',
        'images/nonsense.png',
        'images/shame.png',
        'images/true.png',
        'images/small_no.png',
        'images/gosh.png',
        'images/cow_bumhole.png'
    ];

    const [image, setImage] = useState(null)

    useEffect(()=>{
        get_random_response()
    }, [])

    function get_random_response() {
        const randomIndex = Math.floor(Math.random()* imgsrcs.length);
        const selectedImage = imgsrcs[randomIndex]
        setImage(selectedImage)

    }

    return ( 
        <main>
            <form>
                <label for="user-query"><h2>Hey Wesley, I heard...</h2></label>
                <input type="text" id="user-query" name="user-query" maxlength="1000"></input>
                <h2>Is that true?</h2>
                <button onClick={get_random_response}>CLICK ME DADDY</button>
                <br />
                <br />
                <section>
                {image && <img src={image} alt="Wesley's Response" />}
                </section>
            </form>
        </main>
     );
}
 
export default WesleyContainer;