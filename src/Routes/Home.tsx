import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getmuseums, ImuseumObject } from "../api";
import { makeImagePath } from "../Routes/untils";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const CantainerImageBox = styled.div`
  width: 50vw;
  height: 50vh;
`;
const ContainerImage = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  border: 2px solid red;
`;

function Home() {
  const { data, isLoading } = useQuery<ImuseumObject>(
    ["museum", "museumObject"],
    getmuseums
  );

  return (
    <Wrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Container>
            {data?.records.map((museum) => (
              <CantainerImageBox
                // bgphoto={makeImagePath(museum.url)}
                key={museum.id}
              >
                <ContainerImage bgphoto={makeImagePath(museum.id)}>
                  {museum.title}
                  {museum.copyright}
                </ContainerImage>
              </CantainerImageBox>
            ))}
          </Container>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
