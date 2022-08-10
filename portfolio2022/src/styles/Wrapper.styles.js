import styled from "styled-components";

export const Container = styled.div`
  height:100vh;
  scroll-snap-type:y mandatory ;
  overflow-y:scroll ;
  scroll-snap-points-y: repeat(100vh);
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
`;