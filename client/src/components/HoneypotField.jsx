function HoneypotField({ id }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      <label htmlFor={id}>Leave this field empty</label>
      <input
        type="text"
        id={id}
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

export default HoneypotField;
