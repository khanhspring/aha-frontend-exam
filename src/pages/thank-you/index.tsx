import { useState } from "react";
import StorageUtil from "../../utils/local-storage.util";

const ThankYouPage = () => {
    const [liked, setLiked] = useState(StorageUtil.get('liked'));

    const toggleLike = () => {
        const value = liked === 'Y' ? 'N' : 'Y';
        setLiked(value);
        StorageUtil.set('liked', value);
    }

    return (
        <div className="m-auto w-[335px] flex flex-col items-center pt-10">
            <h2 className="text-4xl font-bold text-center">Thank you for taking the time to review this page</h2>
            <i
                onClick={toggleLike}
                className={`fi fi-sr-heart text-[120px] mt-16 cursor-pointer flex items-center hover:animate-wiggle ${liked === 'Y' ? 'text-rose-700' : ''}`}
            ></i>
            <p className="text-xl font-semibold text-center mt-5">
                {liked === 'Y' ? 'Thank you!' : 'Do you like this?'}
            </p>
        </div>
    );
}

export default ThankYouPage;
