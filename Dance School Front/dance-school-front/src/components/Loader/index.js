import React from 'react';
import style from './Loader.module.css';
const Loader = () => {
  return (
    <div className={style.loader}>
      <div>
        <i class="fa fa-spinner fa-spin" />
      </div>
    </div>
  );
};

export default Loader;
