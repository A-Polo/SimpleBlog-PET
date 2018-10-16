import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import injectSheet from 'react-jss';
import styles from './styles';

const enhance = compose(withHandlers({
  onKeyPress: ({ onSubmit }) => (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  },
}));

const TextField = ({
  classes, onKeyPress, setMessage, message,
}) => (
  <input
    className={classes.textField}
    onKeyDown={onKeyPress}
    placeholder="Enter your point here"
    onChange={e => setMessage(e.target.value)}
    value={message}
  />
);

TextField.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  onKeyPress: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default enhance(injectSheet(styles)(TextField));
