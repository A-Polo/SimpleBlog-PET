import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { compose, withProps, withHandlers } from 'recompose';

import TextField from '../Shared/TextField';

const enhance = compose(
  inject('store'),
  withProps(({ store: { userStore } }) => ({
    store: userStore,
  })),
  withHandlers({
    setMessage: props => (value) => {
      props.store.setField(value);
    },
  }),
  observer,
);

const BlogContainerContent = ({ classes, setMessage }) => (
  <div className={classes.BlogContainer}>
    <TextField setMessage={setMessage} />
  </div>
);

BlogContainerContent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  setMessage: PropTypes.func.isRequired,
};


export default enhance(BlogContainerContent);
