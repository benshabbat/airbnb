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
  const textareaData = (type, name,event,state) => {
    return (
      <textarea
        type={type}
        placeholder={name}
        value={state[name]}
        name={name}
        rows={4}
        onChange={event}
        // required
      />
    );
  };
  export {inputData,textareaData}