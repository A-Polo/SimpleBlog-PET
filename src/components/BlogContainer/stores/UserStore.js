import { action, observable } from 'mobx';

class UserStore {
  @observable message = ''
  @observable messages = []

  @action('[UserStore] set message')
  setField = (value) => {
    this.message = value;
  }

  @action('[UserStore] set messages after submit')
  onSubmit = () => {
    this.messages.push(this.message);
    this.resetField();
  }

  @action('[UserStore] reset message')
  resetField = () => {
    this.message = '';
  }
}

export default UserStore;
