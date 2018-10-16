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
    setMessage: ({ store }) => (value) => {
      store.setField(value);
    },
    onSubmit: ({ store }) => () => {
      store.onSubmit();
    },
  }),
  observer,
);

const BlogContainerContent = ({
  classes, setMessage, store, onSubmit,
}) => (
  <div className={classes.BlogContainer}>
    <TextField
      setMessage={setMessage}
      onSubmit={onSubmit}
      message={store.message}
    />
  </div>
);

BlogContainerContent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  store: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  setMessage: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


export default enhance(BlogContainerContent);
