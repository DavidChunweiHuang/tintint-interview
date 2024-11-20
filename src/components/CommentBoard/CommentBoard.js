import { useState } from "react"
import UserInput from "./UserInput"
import List from "./List"

const CommentBoard = () => {
    const [comments, setComments] = useState([])                // 所有留言
    const [currentComment, setCurrentComment] = useState("")    // 目前送出的留言
    const [editIndex, setEditIndex] = useState(null)            // 編輯中的留言 index

    const handleSubmit = () => {
        if (editIndex !== null) {                       // 進入修改
            const updatedComments = [...comments]       // 把列表中的留言取出
            updatedComments[editIndex] = currentComment // 將編輯中的留言內容，改為目前送出的留言
            setComments(updatedComments)                // 再把所有留言設置成更改過的
            setEditIndex(null)                          // 重置 index 狀態
        } else {
            setComments([...comments, currentComment])  // 如果不是修改中，就用解構方式新增目前的留言並更新所有留言
        }
        setCurrentComment("")                           // 清空 input 欄位
    }

    const handleEdit = (index) => {                     // 當修改按鈕被點擊後，進入編輯模式
        setCurrentComment(comments[index])              // 把點擊的留言填入 input 欄位
        setEditIndex(index)                             // 紀錄目前編輯的 index
    }
    return (
        <div>
            {/* A 物件：顯示所有留言 */}
            <List comments={comments} onEdit={handleEdit} />

            {/* B 物件：輸入框＋送出按鈕 */}
            <UserInput
                value={currentComment}
                onChange={setCurrentComment}
                onSubmit={handleSubmit} />
        </div>
    )
}

export default CommentBoard