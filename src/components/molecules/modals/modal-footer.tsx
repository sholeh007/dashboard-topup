import Button from "../../atoms/button";

export default function ModalFooter() {
  return (
    <div className="modal-footer mb-n3 mt-4">
      <Button type="button" btncolor="danger" data-dismiss="modal">
        Cancel
      </Button>
      <Button type="submit" btncolor="primary">
        Save
      </Button>
    </div>
  );
}
