import { FaDev } from '@react-icons/all-files/fa/FaDev';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { GuestNavLinks } from '../MainNavigation/NavLinks/GuestNavLinks';

import Modal from './Modal';

const AuthModal = (props) => {
  return (
    <Modal title='Log in to continue' show={props.show} onClose={props.onClose}>
      <div className='modal__container'>
        <NavLink to='/' className='header__logo nav__logo--modal'>
        </NavLink>
        <ul className='nav__list nav__list--modal'>
          <GuestNavLinks loginFirst={false} />
        </ul>
      </div>
    </Modal>
  );
};

export default AuthModal;
