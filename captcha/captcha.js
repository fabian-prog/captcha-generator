let code = "";

function createCaptcha() {
  // Clear previous CAPTCHA
  let captchaContainer = document.getElementById("captcha-box");
  captchaContainer.innerHTML = "";

  let charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  let lengthOtp = 6;
  let captcha = [];

  while (captcha.length < lengthOtp) {
    let index = Math.floor(Math.random() * charsArray.length);
    let char = charsArray[index];
    if (!captcha.includes(char)) {
      captcha.push(char);
    }
  }

  // Create canvas element
  let canv = document.createElement("canvas");
  canv.id = "captchaCanvas";
  canv.width = 180;
  canv.height = 60;
  let ctx = canv.getContext("2d");

  // Background Noise
  ctx.fillStyle = "#f3f3f3";
  ctx.fillRect(0, 0, canv.width, canv.height);

  // Add random noise (dots)
  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = getRandomColor();
    ctx.beginPath();
    ctx.arc(
      Math.random() * canv.width,
      Math.random() * canv.height,
      Math.random() * 2,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  // Add random distortion lines
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * canv.width, Math.random() * canv.height);
    ctx.lineTo(Math.random() * canv.width, Math.random() * canv.height);
    ctx.strokeStyle = getRandomColor();
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Draw CAPTCHA text with distortion
  let x = 20;
  for (let i = 0; i < captcha.length; i++) {
    ctx.font = `${Math.floor(Math.random() * 10 + 30)}px Georgia`; // Random size
    ctx.fillStyle = getRandomColor(); // Random color
    ctx.save();
    let angle = (Math.random() * 0.4 - 0.2) * Math.PI; // Random tilt
    ctx.translate(x, 40);
    ctx.rotate(angle);
    ctx.fillText(captcha[i], 0, 0);
    ctx.restore();
    x += 25;
  }

  // Store the CAPTCHA code
  code = captcha.join("");

  // Append canvas to the container
  captchaContainer.appendChild(canv);
}

// Function to generate a random color
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Validate CAPTCHA
function validateCaptcha(event) {
  event.preventDefault(); // Prevent form submission
  let userInput = document.getElementById("cpatchaTextBox").value.trim();

  if (userInput === code) {
    alert("✅ Valid CAPTCHA!");
  } else {
    alert("❌ Invalid CAPTCHA. Please try again.");
    createCaptcha();
  }
}

// Ensure form submits through validateCaptcha()
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", validateCaptcha);
});
