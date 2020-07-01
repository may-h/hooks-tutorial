import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickName: "" });
  const { name, nickName } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <input name="name" type="text" value={name} onChange={onChange} />
      <input name="nickName" type="text" value={nickName} onChange={onChange} />
      <div>
        <p>이름 : </p> {name}
        <p>닉네임 : </p> {nickName}
      </div>
    </div>
  );
};

export default Info;
