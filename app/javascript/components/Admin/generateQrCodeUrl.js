/**
 * Generate QR Code link
 * @param {string} supplierId ID of supplier
 * @param {string[]} ids IDs of cylinders
 */
function generateQrCodeUrl(supplierId, ids) {
  return `${
    window.location.origin
  }/oxygen/vendors/${supplierId}/qr_codes?ids=${ids.join(",")}`;
}

export default generateQrCodeUrl;
