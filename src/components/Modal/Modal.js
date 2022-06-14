import { Component } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className={s.overlay}>
        <div className={s.modal}></div>
      </div>
    );
  }
}
