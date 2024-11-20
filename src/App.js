import CommentBoard from './components/CommentBoard/CommentBoard';
import Counter from './components/Counter';
import ImageUpload from './components/ImageUpload';
import SearchDino from './components/SearchDino';

function App() {
  return (
    <div className="App">
      <h1>面試者：黃俊瑋</h1>
      <h3>Email: david.chunwei.huang@gmail.com</h3>
      <div style={{ width: "400px", height: "0px", border: "1px solid rgb(178 178 178)" }}></div>
      <h2>題目 1：計數器</h2>
      <Counter />
      <div style={{ width: "400px", height: "0px", border: "1px solid rgb(178 178 178)", marginTop: "20px" }}></div>
      <h2>題目 2：留言板</h2>
      <CommentBoard />
      <div style={{ width: "400px", height: "0px", border: "1px solid rgb(178 178 178)", marginTop: "20px" }}></div>
      <h2>題目 3：上傳相片並顯示</h2>
      <ImageUpload />
      <div style={{ width: "400px", height: "0px", border: "1px solid rgb(178 178 178)", marginTop: "20px" }}></div>
      <h2>題目 4：動態篩選</h2>
      <SearchDino />
    </div>
  );
}

export default App;
