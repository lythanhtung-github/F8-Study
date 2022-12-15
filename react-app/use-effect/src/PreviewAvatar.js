import { useEffect, useState } from "react";

function ReviewAvatar() {
    const [avatar, setAvatar] = useState();

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    return (
        <>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />

            {avatar && (
                <img src={avatar.preview} alt="" width="5%" />
            )}
        </>

    );
}

export default ReviewAvatar;