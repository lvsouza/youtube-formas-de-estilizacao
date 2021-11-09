import { createUseStyles } from 'react-jss';
import styled from 'styled-components';

const useClasses = createUseStyles({
  paragraph: {
    backgroundColor: 'black',
    color: 'white',

    '&:hover': {
      backgroundColor: 'red',
    },
    '&:active': {
      backgroundColor: 'blue',
    }
  },
});

const Paragraph = styled.p`
  background-color: black;
  color: white;

  &:hover {
    background-color: red;
  };
  &:active {
    background-color: blue;
  };
`;

export const Dashboard = () => {
  const classes = useClasses();

  return (
    <>
      <p className={classes.paragraph}>Teste</p>
      <Paragraph>Teste</Paragraph>
    </>
  );
}
