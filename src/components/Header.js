import { useEffect } from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase_app";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/Users/userSlice";


const Header = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const username = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect (()=>{
        auth.onAuthStateChanged(async(user) =>{
            if(user) {
                setUser(user)
                history.push('/tv')
            }
        })
    },[username]);

    const handleAuth = () => {
        if(!username){
        auth
            .signInWithPopup(provider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });
    } else if(username) {
        auth.signOut().then(()=>{
            dispatch(setSignOutState())
            history.push("/")
        }).catch((error) =>alert(error.message));
    }
};

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }));
    };

    return (
        <Nav>
            <Logo>
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar" />
            </Logo>
                       

            <Tv>TV</Tv>
            <Movies>Movies</Movies>
            <Sports>Sports</Sports>
            <Disney>Disney+</Disney>
            <Kids> <img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt=""/></Kids>
            <SearchContainer>
                <Search placeholder="Search"></Search>
            </SearchContainer>
          
            {!username ? (
                    <LoginID onClick={handleAuth}>
                        <img src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg" alt="" />
                    </LoginID>) : ( <>
                        <SignOut>            
                    <UserImg src={userPhoto} alt={username}/>                    
                    <DropDown>
                   <span onClick={handleAuth}>Log Out</span>
                    </DropDown>
                    </SignOut>           
            </>            
            )}
        </Nav >
    );
};


const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:73px; 
background-color:#090b13;
display:flex;
gap: 18px;
align-items:center;
padding:0 36px;
z-index:3;
`;

const Logo = styled.a`
margin-right:55px;
cursor:pointer;
`;


const Tv = styled.a`
 margin-top:9.5px;
 cursor:pointer;
`;


const Movies = styled.a`
margin-top:9.5px;
cursor:pointer;
`;

const Sports = styled.a`
margin-top:9.5px;
cursor:pointer;
`;


const Disney = styled.a`
margin-top:9.5px;
cursor:pointer;
`;


const Kids = styled.a`
width: 40px;
height: 15px;
margin-top:9.5px;
cursor:pointer;
background: none;
`;

const SearchContainer = styled.div`
color:rgba(255, 255, 255, 0.6);

`;

const Search = styled.input`
position: relative;
width: 240px;
height: 32px;
border: none;
border-bottom: 1px solid rgba(255, 255, 255, 0.6);
color: rgba(255, 255, 255, 0.6);
font-size: 16px;
outline: 0;
padding: 0 28px 0 0px;
border-radius: 0;
background-color: transparent;
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
opacity:1;
margin-left:600px;



`;

const LoginID = styled.a`

margin-top:8px;
background:none;
cursor:pointer;

`;

const UserImg = styled.img `
height:60%;
border-radius:50%;

`;

const DropDown = styled.div `
 position:absolute
 top:48px;
 right:0px;
 background: rgb(19,19,19);
 border: 1px soild rgba(151,151,151,0.34);
 border-radius:4px;
 box-shadow:rgb(0 0 0 / 50%) 0px 0px 18px 0px;
 padding:13px; 
 font-size:16px;
 widht:100%;
 opacity:0;

`;
const SignOut = styled.div `
height:63px;
widht:63px;
cursor:pointer;
margin-top:27px;

&:hover {
    ${DropDown} {
        opacity:1;
        transition-duration:1s;
    }
}
`;

export default Header;