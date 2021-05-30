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
      onClose={() => onClose(["supplierId", "cylinderId"])}
      title="Cylinder Information"
      className="w-5/12"
    >
      <DetailModal supplierId={supplierId} cylinderId={cylinderId} />
    </Dialog>
  );
}

export default CylinderDetail;
