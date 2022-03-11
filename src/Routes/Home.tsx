import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getmuseums, ImuseumObject } from "../api";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
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
          <Container>{data?.records[1].id}</Container>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
