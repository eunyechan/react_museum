import { faSearch, faSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
`;

const HeaderTitleBox = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  padding: 12px 22px;
  align-items: flex-end;
  border: 2px solid white;
`;

const HeaderBigTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HeaderHarvardTitle = styled.span`
  display: flex;
  font-size: 35px;
`;

const HeaderSmallTitle = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const HeaderArtMuseumsTitle = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 35px;
  margin-top: -13px;
`;

const HeaderUlBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: black;
  margin-bottom: 10px;
  padding: 0 32px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const HeaderDateLoginBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1.5rem 4rem;
  width: 100%;
`;

const HeaderDateBox = styled.div`
  display: flex;
`;

const HeaderDate = styled.div`
  padding: 2px;
  font-size: 12px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: #00959d;
`;

const HeaderLoginBox = styled.div`
  padding-left: 10px;
  color: #9ca3af;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 14px;
`;

const HeaderLogin = styled.span`
  width: 100%;
  padding-right: 5px;
`;

const HeaderRegister = styled.span`
  width: 100%;
  padding-left: 5px;
`;

const HeaderUlBar = styled.ul`
  display: flex;
  width: 100%;
`;

const HeaderList = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

function Header() {
  const monthOfString = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfString = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const month = monthOfString[today.getMonth()];
  const date = today.getDate();
  const day = dayOfString[today.getDay()];

  return (
    <>
      <HeaderWrapper>
        <HeaderBox>
          <HeaderTitleBox>
            <HeaderBigTitleBox>
              <HeaderHarvardTitle>
                Harvard
                <FontAwesomeIcon
                  icon={faSlash}
                  style={{
                    transform: "rotate(100deg)",
                    fontSize: "35px",
                    fontWeight: "lighter",
                    paddingTop: "15px",
                    paddingLeft: "7px",
                  }}
                />
                <HeaderSmallTitle>
                  <span>Fogg Museum</span>
                  <span>Busch-Reisinger Museum</span>
                  <span>Arthur M. Sackler Museum</span>
                </HeaderSmallTitle>
              </HeaderHarvardTitle>
              <HeaderArtMuseumsTitle>Art Museums</HeaderArtMuseumsTitle>
            </HeaderBigTitleBox>
          </HeaderTitleBox>

          <HeaderUlBox>
            <HeaderDateLoginBox>
              <HeaderDateBox>
                <HeaderDate>{day},</HeaderDate>
                <HeaderDate>{month}</HeaderDate>
                <HeaderDate>{date}</HeaderDate>
              </HeaderDateBox>
              <HeaderLoginBox>
                <HeaderLogin>Log in</HeaderLogin>
                <span style={{ opacity: "0.4" }}>or</span>
                <HeaderRegister>Register</HeaderRegister>
              </HeaderLoginBox>
            </HeaderDateLoginBox>

            <HeaderUlBar>
              <HeaderList>
                <Link to={""}>Visit</Link>
                <Link to={""}>Collections</Link>
                <Link to={""}>Events</Link>
                <Link to={""}>Exhibitions</Link>
                <Link to={""}>Publications</Link>
                <Link to={""}>Support</Link>
                <Link to={""}>Learn</Link>
                <FontAwesomeIcon icon={faSearch} style={{ color: "grey" }} />
              </HeaderList>
            </HeaderUlBar>
          </HeaderUlBox>
        </HeaderBox>
      </HeaderWrapper>
    </>
  );
}

export default Header;
