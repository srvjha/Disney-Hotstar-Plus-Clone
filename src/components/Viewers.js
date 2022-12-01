import styled from "styled-components";

const Viewers = (props) =>{
   return(
    <Box>
    <Content>
    <h2>Popular Channels</h2>
    </Content>

    <Container>
       
       <Wrap>
        <img src='/images/viewers-disney.png' alt="disney"/>
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
        </video>
       </Wrap>

       <Wrap>
        <img src='/images/viewers-marvel.png' alt="marvel"/>
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
        </video>
       </Wrap>

       <Wrap>
        <img src='/images/tvc.png' alt="StarPlus"/>
        <video controls muted autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/starplus.mp4" type="video/mp4"/>
        </video>
       </Wrap>

       <Wrap>
        <img src='/images/tvc1.png' alt="Hotstar"/>
        <video controls muted autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/hotstar.mp4" type="video/mp4"/>
        </video>
       </Wrap>

       <Wrap>
        <img src='/images/tvc2.png' alt="Star Bharat"/>
        <video  controls muted autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/starbharat.mp4" type="video/mp4"/>
        </video>
       </Wrap>
   
        
    </Container>

    <Shows>
        <h2>Popular Shows</h2>
    </Shows>

    <NextContainer>
        <NextWrap>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5"  alt=""/>
        </NextWrap>

        <NextWrap>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4253/1364253-v-17a2ff74143c"  alt=""/>
        </NextWrap>

        <NextWrap>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4267/1364267-v-59ed5cfdea3a"  alt=""/>
        </NextWrap>

        <NextWrap>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8056/1308056-v-b52e223ef46d"  alt=""/>
        </NextWrap>

        <NextWrap>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/321/1380321-v-8de459f0eb8d"  alt=""/>
        </NextWrap>
    </NextContainer>
    
    </Box>
   

    
   ); 
  
};

const Container = styled.div`
margin-top:13px;
padding:30px 0px 26px;
display:grid;
grid-gap:25px;
gap:25px;
grid-template-columns:repeat(5, minmax(0,1fr));


@media (max-width:768px) {
    grid-template-columns: repeat(1,minmax(0,1fr));
}

`;


const Wrap = styled.div`
 padding-top:56.25%;
 border-radius:10px;
 box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 / 73%) 0px 16px 10px -10px;

 cursor:pointer;
 overflow:hidden;
 position:relative;
 transition:all 25oms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0;
 border:3px solid rgba(249,249,249,0.1);

 img{
    inset:0px;
    display:block;
   
    object-fit:cover;
    opacity:1;
    position:absolute;
    transition:opacity 500ms ease-in-out 0s;
    width:100%;
    z-index:1;
    top:0;
 }

 video{
    width:100%;
    height:100%;
    position:absolute;
    top:0px;
    opacity:0;
    z-index:0;
 }

 &:hover {
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
     rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform:scale(1.05);
    border-colour: rgba(249,249,249,0.8);


    video {
        opacity:1;
    }
 }

`;

const Content = styled.div`
 margin-top:70px;
 font-size:13px;
 cursor:pointer;
 

 &:hover{
    color:blue;

 }

`;

const Shows = styled.div`

cursor:pointer;
font-size:13px;
&:hover{
    color:black;

 }

`;

const Box = styled.div``;
const NextContainer = styled.div`
margin-top:13px;
padding:30px 0px 26px;
display:grid;
grid-gap:25px;
gap:25px;
grid-template-columns:repeat(5, minmax(0,1fr));


@media (max-width:768px) {
    grid-template-columns: repeat(1,minmax(0,1fr));
}
`;
const NextWrap = styled.div`
padding-top:56.25%;
 border-radius:10px;
 box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 / 73%) 0px 16px 10px -10px;

 cursor:pointer;
 overflow:hidden;
 position:relative;
 transition:all 25oms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0;
 border:3px solid rgba(249,249,249,0.1);

 img{
    inset:0px;
    display:block;
    height:100%;
    // object-fit:center;
    opacity:1;
    position:absolute;
    // transition:opacity 500ms ease-in-out 0s;
    width:100%;
    // z-index:1;
    // top:0;
    vertical-align:middle;
 }
`;


export default Viewers; 