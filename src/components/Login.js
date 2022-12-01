import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="Reload" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                    Subscribe to watch all content on Disney+ Hotstar
                    </Description>
                    <Pricing> Premium :-₹299/Month and ₹1499/Year</Pricing>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt='No Image'/>
                </CTA> 
                <BgImage />
            </Content>
        </Container>
    );

};

const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;

`;

const Content = styled.div`
 margin-bottom:10vw;
 width :100%;
 position:relative;
 min-height:100vh;
 box-sizing:border-box;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 padding:80px 40px;
 height:100%;
 

`;

const BgImage = styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image: url("/images/loginbg.jpg");
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;

`;

const CTA = styled.div`
max-width:650px;
display:flex;
flex-direction:column;
 width:100%;
 
`;

const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`;

const SignUp = styled.a`
 font-weight:bold;
 color:#f9f9f9;
 background-color:#0063e5;
 margin-bottom:12px;
 width:100%;
 letter-spacing:1.5px;
 font-size:18px;
 padding: 19px 0;
 border: 1px solid transparent;
 border-radius: 5px;

 &:hover {
    background-color:black;

 }

`;

const Description = styled.div`
 color:hsla(0,0%,95.3%,1);
 font-size:14.5px;
 margin: 0 0 13px;
 letter-spacing:1.5px;

`;
const Pricing = styled.div`
color:hsla(0,0%,95.3%,1);
font-size:12.7px;
margin: 0 0 24px;
letter-spacing:1.5px;
`;

const CTALogoTwo = styled.img`
  max-width:600px;
  margin-bottom:20px;
  display:inline-block;
  vertical-align:bottom;
  width:100%;
`;




export default Login;