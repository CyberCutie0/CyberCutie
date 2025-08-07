const style = document.createElement("style");
style.textContent = `
  #watermark {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  }
  #watermark::before {
    content: "NOT PAID CONTACT THE DEVELOPER TO REMOVE THIS WATERMARK";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 5em;
    font-weight: bold;
    color: rgba(255, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    background-repeat: repeat;
    background-image: repeating-linear-gradient(
      45deg,
      rgba(255, 0, 0, 0.1) 0,
      rgba(255, 0, 0, 0.1) 100px
    );
  }
`;
document.head.appendChild(style);

// Create watermark
const watermark = document.createElement("div");
watermark.id = "watermark";
document.body.appendChild(watermark);

// Check once
watermark.style.display = "block";