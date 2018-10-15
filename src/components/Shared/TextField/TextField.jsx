import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import injectSheet from 'react-jss';
import styles from './styles';

const enhance = compose(withHandlers({
  onKeyPress: ({ setMessage }) => (event) => {
    if (event.keyCode === 13) {
      setMessage(event.target.value);
    }
  },
}));

const TextField = ({ classes, onKeyPress }) => (
  <input
    className={classes.textField}
    onKeyDown={onKeyPress}
    placeholder="Enter your point here"
  />
);

TextField.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

export default enhance(injectSheet(styles)(TextField));
