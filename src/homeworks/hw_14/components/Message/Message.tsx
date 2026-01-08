import { useContext } from "react"
import { BlogContext } from "../Blog/BlogManagement";
import { ContentWrapper } from "./styles";

function Card() {
  const post = useContext(BlogContext);
  return (
    <ContentWrapper>
        {post && <p>{post}</p>}
    </ContentWrapper>
  )
}
export default Card;