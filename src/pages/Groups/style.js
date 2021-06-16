import { withStyles, makeStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";
import styled from "styled-components";
import bgImage from "../../assets/img/nothing-registered.svg";

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    "& svg": {
      marginRight: 4,
    },
  },
}))(MenuItem);

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fafafa;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e2b6cf;
  }
`;

export const GroupContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    height: 24px;
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
  
`;

export const NothingToShow = styled.div`
  height: 100%;
  min-height: 300px;
  background: url(${bgImage}) no-repeat center;
  background-size: contain;
  text-align: center;

  @media (max-width: 600px) {
    min-height: 200px;
  }

  p {
    text-shadow: 0.5px 0.5px #e396df;
    font-weight: bold;
  }
`;

export const GoalsContainer = styled.ul`
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fafafa;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e2b6cf;
  }

`;

export const ActivitiesContainer = styled.ul`
  overflow: hidden scroll;

&::-webkit-scrollbar {
  width: 0.25rem;
}
&::-webkit-scrollbar-track {
  background-color: #fafafa;
}
&::-webkit-scrollbar-thumb {
  background-color: #e2b6cf;
}
`;

export const GroupCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  text-align: center;
  cursor: pointer;

  &:hover > svg {
      color: #e365c1;
    }
  img {
    width: 32px;
  }

  img:last-child {
    width: 16px;
    cursor: pointer;
  }

  svg {
    font-size: 2.5rem;
    color: #e396df;
   
    transition: color 300ms ease-in-out;

 
  }
`;

export const MembersList = styled.ul`
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fafafa;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e2b6cf;
  }

  li {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 2px 0;

    .MuiAvatar-root {
      background-color: #8ecc8e;
      font-size: 1rem;
      width: 25px;
      height: 25px;
    }
  }
`;
