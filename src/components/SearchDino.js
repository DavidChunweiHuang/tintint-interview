import { useState, useRef } from "react"
import { generateDinosaurData } from '../assets/DinosoursGenerator'

const SearchDino = () => {
    const data = generateDinosaurData()                 // initial 恐龍資料
    const [searchText, setSearchText] = useState("")    // 搜尋的字串
    const searchCache = useRef({});                     // 使用 useRef 來緩存

    const getFilterData = () => {
        if (searchText.trim() === "") {                 // 如果輸入框為空，返回完整資料
            return data;
        }

        if (searchCache.current[searchText]) {          // 若已經有緩存資料，就直接 return 緩存的
            return searchCache.current[searchText]
        }
        const lowercasedSearchText = searchText.toLowerCase();    // 把搜尋欄位的輸入字串轉為英文小寫
        const result = data.filter((element) => element.name.toLowerCase().includes(lowercasedSearchText))  // 恐龍資料也轉為英文小寫，並進行 filter 篩選

        searchCache.current[searchText] = result        // 把篩選的結果緩存

        return result
    }

    const filteredData = getFilterData()

    return (
        <div>
            {/* 輸入欄位 */}
            <input
                type="text"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
                placeholder="搜尋恐龍英文名" />
            {/* 結果列表 */}
            <ul>
                {filteredData.map((dinosaur) => (
                    <li key={dinosaur.id}>{dinosaur.name}</li>
                ))}
            </ul>
            {/* 沒有符合的資料 */}
            {filteredData.length === 0 && <p>No matching Dinosaur</p>}
        </div>
    )
}

export default SearchDino