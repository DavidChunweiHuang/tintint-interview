import { useState } from "react"

const ImageUpload = () => {
    const [image, setImage] = useState(null)
    const [error, setError] = useState("未選擇圖片")

    const handleImage = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0]

        if (!file) {
            setImage(null)
            setError("未選擇圖片")
            return
        }

        const fileType = ["image/png", "image/jpg", "image/jpeg", "image/gif"]
        if (!fileType.includes(file.type)) {
            setImage(null)
            setError("檔案類型錯誤")
            return
        }

        const reader = new FileReader()
        reader.onload = () => {
            setImage(reader.result)
            setError("")
        }
        reader.readAsDataURL(file)
    }
    return (
        <div>
            <input type="file" onChange={handleImage} />

            {image ?
                (<img src={image} alt="Thumbnail" style={{ width: "300px", height: "300px", objectFit: "contain" }} />)
                :
                (error && <p>{error}</p>)}


        </div>
    )
}

export default ImageUpload