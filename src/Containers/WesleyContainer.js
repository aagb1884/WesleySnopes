import WesleyForm from "../Components/WesleyForm";
import WesleyResponse from "../Components/WesleyResponse";
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
    ];

    const [image, setImage] = useState("")

    useEffect(()=>{
        get_random_response()
    }, [])

    function get_random_response() {
        const randomIndex = Math.floor(Math.random()* imgsrcs.length);
        const selectedImage = imgsrcs[randomIndex]
        setImage(selectedImage)

    }

    return ( 
        <>
        <button onClick={get_random_response}>Random Image</button>
      {image && <img src={image} alt="Wesley Snipes' Response" />}
        {/* <WesleyForm setImage={setImage}/>
        { onClick ? <WesleyResponse image={image}/> : null } */}
        </>

     );
}
 
export default WesleyContainer;