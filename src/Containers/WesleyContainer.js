import WesleyForm from "../Components/WesleyForm";
import WesleyResponse from "../Components/WesleyResponse";
import { useState, useEffect } from 'react';

const WesleyContainer = () => {


    const [image, setImage] = useState()

    useEffect(()=>{
        get_random_response()
    }, [])

    const responses = [
        require('../images/sorry_what.png'),
        require('../images/train_to_factville.png'),
        require('../images/blade.png'),
        require('../images/balderdash.png'),
        require('../images/bull.png'),
        require('../images/factionary.png'),
        require('../images/legit.png'),
        require('../images/nuh_uh.png'),
        require('../images/physical_realm.png'),
        require('../images/pish.png'),
        require('../images/thirst_for_truth.png'),
        require('../images/truth_beauty.png'),
    ];

    function get_random_response(responses) {
    return responses[Math.floor(Math.random()*responses.length)]};

    const result = get_random_response() 
    setImage({result})
    console.log(image)

    return ( 
        <>
        <WesleyForm setImage={setImage}/>
        { onClick ? <WesleyResponse image={image}/> : null }
        </>

     );
}
 
export default WesleyContainer;