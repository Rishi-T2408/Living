import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "rgb(83, 83, 83)",
  background: "#eeeeee",
  border: "1px solid #0D0D0D"
};

export const darkTheme = {
  body: "#0D0D0D",
  fontColor: "#fff",
  background: "#4e4e4e",
  border: "1px solid #fff"
 
};

export const GlobalStyles = createGlobalStyle`
	body ,.cards, .footer-container {
		background-color: ${(props) => props.theme.body};
        
	}
  .Home1, .Home, .allblog, .allblog1, .btn--outline{
    color: ${(props) => props.theme.fontColor}
  }
  .footer-input,.btn--outline {
    border: ${(props) => props.theme.border}
  }
  .footer-subscription ,.footer-link-items > h2,.footer-link-items a,.social-icon-link,.social-logo ,.website-rights{
    color: ${(props) => props.theme.fontColor}
  }
  .blog-preview p{
    color: ${(props) => props.theme.fontColor}
  }
  .lets, .Effect, .rishi, .catp ,.cards__item__text{
    color: ${(props) => props.theme.fontColor}
  }
  .blogtitle, .blogauthor, .blogbody{
    color: ${(props) => props.theme.fontColor}
  }
  .one , .two , .three, .four{
    background: ${(props) => props.theme.background}
  }
  
  
`;