import Button from "components/Button/Button";
import { BlogPageWrapper, Btn } from "./styles";
import Message from "../Message/Message";
import { createContext, useState } from "react";


// Создаю глобальное хранилище для данных блога
export const BlogContext = createContext<string | undefined>(undefined);

function BlogManagement() {
  const [text, setText] = useState<string>("");
  const [posts, setPosts] = useState<string>("")

const post = () => {
  setPosts(text);
    console.log(text);

};

  return (
    <BlogContext.Provider value={posts}>
    <BlogPageWrapper>
    <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст поста"
      />
    <Btn><Button name="Запостить" onClick={post}/></Btn>
    <Message/>
    </BlogPageWrapper>
    </BlogContext.Provider>
    
  )
}
export default BlogManagement;