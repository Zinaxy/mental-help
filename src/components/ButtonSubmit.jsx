import React from "react";

const ButtonSubmit = (props) => {
  return (
    <button
      type='submit'
      className='inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary active:bg-primary focus:outline-none focus:border-primary focus:ring ring-primary disabled:opacity-25 transition ease-in-out duration-150'
    >
      {props.title}
    </button>
  );
};

export default ButtonSubmit;
