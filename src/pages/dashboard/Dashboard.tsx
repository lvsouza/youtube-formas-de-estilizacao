import { createUseStyles } from 'react-jss';

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

export const Dashboard = () => {
  const classes = useClasses();

  return (
    <p className={classes.paragraph}>Teste</p>
  );
}
