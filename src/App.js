import styled from "styled-components";
import AvatarImage from "./images/avatar.png";
import { Line } from "react-chartjs-2";
import { mobile } from "./responsive/mobile";
import { findByLabelText } from "@testing-library/dom";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Guild Quests",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      yAxisID: "y-axis-1",
    },
    {
      label: "Guild Quest",
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
      yAxisID: "y-axis-2",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const Container = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Topbar = styled.div`
  display: flex;
  height: 50px;
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logotext = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-left: 75px;
  ${mobile({ marginLeft: "50px" })}
`;

const Menu = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;

const MenuItem = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  margin-right: 50px;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #fff;
  }
`;

const DashboardButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const DashboardButton = styled.button`
  border: none;
  background-color: #242424;
  width: 120px;
  color: white;
  border-radius: 5px;
  padding: 10px;
  margin-right: 75px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const FirstHeader = styled.h1`
  font-size: 44px;
  line-height: 53px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  color: #fff;
  text-align: center;
  margin-top: 50px;
  ${mobile({ fontSize: "40px", marginTop: "100px" })}
`;

const SecondHeader = styled.h1`
  margin-top: -30px;
  font-size: 44px;
  line-height: 53px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  color: #fff;
  text-align: center;
  ${mobile({ fontSize: "40px" })}
  background: linear-gradient(to right, #7399fb 50%, #a5d9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Desc = styled.p`
font-family:font-family: 'Poppins', sans-serif;
font-size:12px;
font-weight:500;
line-height:19px;
color:#B0B0B0;
text-align:center;
margin-top:-10px;
${mobile({ marginTop: "20px" })}
`;

const HamburgerMenuIcon = styled.div`
  display: none;
  ${mobile({ display: "flex", alignItems: "center", marginRight: "50px" })}
`;

const Ellipse = styled.div`
  width: 420px;
  height: 430px;
  border-radius: 50%;
  position: absolute;
  background: #3747d7;
  filter: blur(624px);
  top: 25vh;
  left: 20vw;
  z-index: -1;
  ${mobile({ left: "-109px", top: "220px" })}
`;

const TryButton = styled.button`
  height: 45px;
  width: 150px;
  color: #fff;
  background: #2104d8;
  border-radius: 6.86806px;
  align-self: center;
  margin-top: 10px;
  border: none;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-bottom: 50px;
  cursor: pointer;
  ${mobile({ marginBottom: "100px" })}
`;

const FooterContainer = styled.div`

  display flex;
  background-color: #111214;
  align-self:center;
  border-radius:10px;
  border: 1px solid #292424;
  width:80%;
  ${mobile({ width: "95%", height: "100vh" })}
`;

const FooterLeft = styled.div`
  flex: 1;
  background-color: #1d1818;
  border-radius: 10px 0px 0px 0px;
  display: flex;
  flex-direction: column;
`;

const FooterRight = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  width: 80%;
  ${mobile({ flex: "5" })}
`;

const UseInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 30px;
  ${mobile({ margin: "10px" })}
`;

const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e3ff37;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${mobile({ width: "18px", height: "18px", marginBottom: "5px" })}
`;

const Avatar = styled.img`
  ${mobile({ width: "10", height: "12px" })}
`;

const Username = styled.span`
  font-family: "Noto Sans", sans-serif;
  font-size: 12px;
  color: #fff;
  font-weight: 700;
  ${mobile({ fontSize: "6px", fontWeight: "500" })}
`;

const AccountType = styled.span`
  font-family: "Noto Sans", sans-serif;
  font-size: 10px;
  color: #a7a7a7;
  font-weight: 400;
  ${mobile({ fontSize: "5px", fontWeight: "500" })}
`;

const DashMenu = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  margin: 30px;
  ${mobile({ flex: "8", margin: "20px", margin: "10px" })}
`;

const DashMenuItem = styled.span`
  font-family: "Noto Sans", sans-serif;
  font-size: 12px;
  color: #a7a7a7;
  font-weight: 400;
  margin-bottom: 20px;
  cursor: pointer;
  ${mobile({ fontSize: "5px", fontWeight: "400", marginBottom: "10px" })}
`;

const FooterRightTopbar = styled.div`
  height: 30px;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ marginTop: "10px", height: "10px" })}
`;

const FooterRightTopbarHeader = styled.h1`
  font-size: 24px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  color: #fff;
  margin-left: 50px;
  ${mobile({ fontSize: "8px", marginLeft: "20px" })}
`;

const FooterRightTopbarMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;

const FooterRightTopbarMenuItems = styled.span`
  color: #434343;
  font-size: 10px;
  margin-right: 20px;
  cursor: pointer;
  ${mobile({ fontSize: "4px", marginRight: "10px" })}
`;

const DailyButton = styled.button`
  background-color: #2104d8;
  border: none;
  padding: 5px;
  color: white;
  height: 25px;
  width: 60px;
  border-radius: 6px;
  cursor: pointer;
  ${mobile({
    width: "20px",
    height: "10px",
    fontSize: "4px",
    borderRadius: "2px",
    padding: "1px",
  })}
`;
const ChartContainer = styled.div`
  background-color: #1d1818;
  margin-left: 20px;
  border: 1px solid #292424;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  ${mobile({ height: "100vh" })}
`;

const ChartMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 30px;
  width: 80%;
  ${mobile({ width: "95%", margin: "5px 10px" })}
`;

const ChartHeader = styled.span`
  font-size: 15px;
  color: #fff;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  ${mobile({ fontSize: "5px" })}
`;

const ChartLinkText = styled.span`
  color: #fff;
  font-size: 8px;
  font-family: "Open Sans", sans-serif;
  ${mobile({ fontSize: "3px" })}
`;

const ChartFooter = styled.div`
  width: 100%;
  background-color: red;
  height: 100px;
`;

const ChartLineContainer = styled.div``;

function App() {
  return (
    <Container>
      <Topbar>
        <Logo>
          <Logotext>UNX</Logotext>
        </Logo>
        <Menu>
          <MenuItem>Products</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Resources</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
        <DashboardButtonContainer>
          <HamburgerMenuIcon>
            <i
              style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
              className="fas fa-bars"
            ></i>
          </HamburgerMenuIcon>
          <DashboardButton>Dashboard</DashboardButton>
        </DashboardButtonContainer>
      </Topbar>
      <FirstHeader>The Best Way to</FirstHeader>
      <SecondHeader>Track your Daily Progress </SecondHeader>
      <Desc>
        UNX Allows you to track all your daily task progress using gamification
        <br />
        methods and earn rewards for specific coupons
      </Desc>
      <TryButton>Try this app</TryButton>
      <Ellipse />
      <FooterContainer>
        <FooterLeft>
          <UseInfo>
            <AvatarContainer>
              <Avatar src={AvatarImage} />
            </AvatarContainer>
            <Username>Murat</Username>
            <AccountType>PRO Account</AccountType>
          </UseInfo>
          <DashMenu>
            <DashMenuItem>Home Screen</DashMenuItem>
            <DashMenuItem>Dashboard</DashMenuItem>
            <DashMenuItem>Settings</DashMenuItem>
          </DashMenu>
        </FooterLeft>
        <FooterRight>
          <FooterRightTopbar>
            <FooterRightTopbarHeader>Dashboard</FooterRightTopbarHeader>
            <FooterRightTopbarMenu>
              <FooterRightTopbarMenuItems>monthly</FooterRightTopbarMenuItems>
              <FooterRightTopbarMenuItems>weekly</FooterRightTopbarMenuItems>
              <DailyButton>daily</DailyButton>
            </FooterRightTopbarMenu>
          </FooterRightTopbar>
          <ChartContainer>
            <ChartMenu>
              <ChartHeader>Quest Charts</ChartHeader>
              <ChartLinkText>Crusader</ChartLinkText>
            </ChartMenu>
            <ChartLineContainer>
              <Line height={50} data={data} options={options} />
            </ChartLineContainer>
          </ChartContainer>
        </FooterRight>
      </FooterContainer>
    </Container>
  );
}

export default App;
