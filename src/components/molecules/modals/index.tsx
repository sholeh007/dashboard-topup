import { ReactNode } from "react";

interface propsType {
  children: ReactNode;
  id: string;
  title: string;
  onClick?: Function;
}

export default function Modal({ children, id, title, onClick }: propsType) {
  return (
    <div className="modal fade" id={id} tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={id}>
              {title}
            </h5>
            <button type="button" className="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
