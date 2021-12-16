import { ReactNode } from "react";

interface propTypes {
  children: ReactNode;
  err?: any;
}

export default function FormGroup({ children, err }: propTypes) {
  return (
    <div className="form-group">
      {children}
      <small className="text-danger">{err?.message}</small>
    </div>
  );
}
