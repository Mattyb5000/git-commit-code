import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
<<<<<<< HEAD
    <button {...props} style={{ float: "center", marginBottom: 45}} className="btn btn-primary">
=======
    <button {...props} style={{ marginBottom: 10 }} className="btn btn-success position-static">
>>>>>>> bd8fc37a88a5ac6dd42813e86c06ed459b6fa138
      {props.children}
    </button>
  );
}