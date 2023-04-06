const inputData = (type, name,event,state) => {
    return (
      <input
        type={type}
        placeholder={name}
        value={state[name]}
        name={name}
        onChange={event}
        // required
      />
    );
  };
  export {inputData}