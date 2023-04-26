import styled from "styled-components";

export const Item = styled.li`
  position: relative;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  max-width: 380px;
  max-height: 460px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Img = styled.img`
 /* margin: 0 auto; */
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  color:  #EBD8FF;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Top = styled.div`
  padding: 28px 36px 18px 36px;
 
`;

export const Bottom = styled.div`
  padding: 62px 36px 36px 36px;
`;

export const Center = styled.div`
  background-color: #EBD8FF;
  height: 8px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
 
`;


export const Avatar = styled.img`
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  background-color: #5736A3;
 
`;

export const AvatarWrapper = styled.div`
position: absolute;
top: 178px;
left: 150px;
height: 80px;
width: 80px;
border-radius: 50%;
background-color: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
display: flex;
align-items: center;
justify-content: center;
`;

