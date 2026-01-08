import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";
import { useContext } from "react";
import { MainContext } from "../Main/Main";
import Button from "components/Button/Button";

function Content() {

const userData = useContext(MainContext);

const deleteUser = () => {}

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      <ContentInfo>Fullname: {userData?.fullName} </ContentInfo>
      <ContentInfo>Age: {userData?.age} </ContentInfo>
      <ContentInfo>Job: {userData?.jobPosition} </ContentInfo>
      <Button name="Delete User" onClick={deleteUser} />
    </ContentWrapper>
  );
}

export default Content;
