import { Dialog } from "@blueprintjs/core";
import DetailModal from "./DetailModal";

function CylinderDetail({ supplierId, cylinderId, onClose }) {
  if (!supplierId || !cylinderId) {
    console.warn(
      "Cylinder Detail requires ID of cylinder and supplier passed in.",
      { supplierId, cylinderId }
    );
    return null;
  }

  return (
    <Dialog
      isOpen={true}
      onClose={() => onClose(["id"])}
      title="Cylinder Detail"
      className="w-5/12"
    >
      <DetailModal />
    </Dialog>
  );
}

export default CylinderDetail;
