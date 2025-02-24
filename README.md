
# CAPTCHA Generator

This project is a simple CAPTCHA generator written in JavaScript. It creates a CAPTCHA image dynamically using an HTML5 canvas and adds visual noise, distortion lines, and randomized characters to enhance security. The CAPTCHA is validated when the user submits the form.

## Features
- Generates a 6-character CAPTCHA with random letters, numbers, and symbols.
- Uses an HTML5 canvas to display the CAPTCHA with random colors, fonts, and distortions.
- Adds noise (dots and lines) to make automated recognition more difficult.
- Allows users to validate their input against the generated CAPTCHA.
- Refreshes the CAPTCHA if the user enters an incorrect value.

## How It Works
1. The `createCaptcha()` function generates a random 6-character CAPTCHA using a mix of letters, numbers, and special characters.
2. The CAPTCHA is drawn on a canvas with random styling to prevent automated recognition.
3. Noise (dots and lines) is added to the canvas for additional security.
4. The generated CAPTCHA is stored in a variable (`code`) for validation.
5. When the user submits the form, the `validateCaptcha()` function checks the input against the stored CAPTCHA.
6. If the CAPTCHA is incorrect, a new one is generated.

## Usage
To use this CAPTCHA generator:
1. Include the JavaScript file in your project.
2. Ensure you have an HTML form with an input field (`id="cpatchaTextBox"`) and a container (`id="captcha-box"`) to display the CAPTCHA.
3. The script automatically binds the validation function to form submission.

## Example HTML Structure
```html
<form>
  <div id="captcha-box"></div>
  <input type="text" id="cpatchaTextBox" placeholder="Enter CAPTCHA" required>
  <button type="submit">Submit</button>
</form>
```

## Functions Explained
- `createCaptcha()`: Generates and displays a new CAPTCHA.
- `getRandomColor()`: Generates a random color for text and noise.
- `validateCaptcha(event)`: Checks user input against the CAPTCHA and alerts success or failure.

## Installation
Simply include the script in your HTML file and call `createCaptcha()` on page load:
```html
<script>
  document.addEventListener("DOMContentLoaded", function () {
    createCaptcha();
  });
</script>
```

## License
This project is open-source and free to use.

---
Enjoy using this CAPTCHA generator! 🚀

