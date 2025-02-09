import QRCode from "davidshimjs-qrcodejs";

const createQRCodeFor = (identifier, dimension) => {
    return new QRCode(identifier, {
        width: dimension,
        height: dimension,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.L,
    });
};

export var QR_CODE_DOWNLOAD = createQRCodeFor("qrcode-download", 400);
export var QR_CODE_DISPLAY = createQRCodeFor("qrcode", 150);
