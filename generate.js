<script src="https://unpkg.com/qr-code-styling/lib/qr-code-styling.js"></script>

<div id="qr"></div>

<script>
const qrCode = new QRCodeStyling({
  width: 250,
  height: 250,
  data: "https://example.com",
  dotsOptions: {
    color: "#ff2d55",
    type: "rounded"
  },
  backgroundOptions: {
    color: "#fff0f5"
  },
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Heart_coraz%C3%B3n.svg"
});

qrCode.append(document.getElementById("qr"));
</script>