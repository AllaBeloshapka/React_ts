import { ROUTES } from "constants/routes";
import { ClientsBoxWrapper, PageLink } from "./styles";



function Clients() {
  return (
    <ClientsBoxWrapper>
      
        <PageLink to={ROUTES.FACEBOOK}>
          <img src="https://images.sftcdn.net/images/t_app-cover-s-16-9,f_auto/p/a2edecee-ada4-4711-907b-8209f573563d/1941742525/facebook-com-screenshot.jpg" />
        </PageLink>

        <PageLink to={ROUTES.LINKEDIN}>
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670129.png" />
        </PageLink>
     
        <PageLink to={ROUTES.INSTAGRAM}>
          <img src="https://cdn-media.sforum.vn/storage/app/media/ctvseo_20/instagram-khac-gi-facebook-1.jpg" />
        </PageLink>
   
    </ClientsBoxWrapper>
  );
}

export default Clients;
