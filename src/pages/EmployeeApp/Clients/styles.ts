import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsBoxWrapper = styled.nav`
    display: flex;
    width: 100%;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const PageLink = styled(Link)`
    width: 400px;
    gap: 20px;
    display: flex; 
    justify-content: space-around;
    
    img {
        width: 100%; 
        height: auto; 
        /* border-radius: 5%; */
    }
`;