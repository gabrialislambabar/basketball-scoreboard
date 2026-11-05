# Basketball Scoreboard

A simple, responsive scoreboard for two teams (Home and Guest), built with plain HTML, CSS, and JavaScript. Tap the +1, +2, or +3 buttons to add points, and the app shows which team is in the lead.

## Features

- Separate score counters for **Home** and **Guest**
- +1, +2, and +3 buttons for each team
- Live "who is leading" message (including ties)
- Square scoreboard panel centered on the screen
- Fully responsive: layout stays the same when you zoom or resize
- Custom digital-timer font for the scores
- No frameworks, no build tools, no dependencies

## Tech Stack

- HTML5
- CSS3 (Grid, `clamp()`, container query units)
- Vanilla JavaScript (DOM manipulation)

## Project Structure

```
scoreboard/
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

## Run It on Your Own Laptop

You don't need to install anything special. Pick one of the options below.

### Option 1: Open the file directly

1. Download or clone the project:
   ```bash
   git clone https://github.com/gabrialislambabar/basketball-scoreboard
   cd <your-repo-name>
   ```
2. Double-click `index.html`, or open it from the terminal:
   ```bash
   # Linux
   xdg-open index.html
   # macOS
   open index.html
   # Windows
   start index.html
   ```

### Option 2: Run a local server (recommended)

Using Python (already installed on most systems):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Using Node.js:

```bash
npx serve
```

Using VS Code: install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

> The score font is loaded from Google Fonts, so you need an internet connection the first time. Without it, the page falls back to a monospace font.

## How to Build This Project From Scratch

### 1. Create the folder and files

```bash
mkdir scoreboard
cd scoreboard
touch index.html style.css script.js
```

### 2. Write the HTML (`index.html`)

Each team has a name, a score display, and three buttons. A third section shows the winner message.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scoreboard</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <home>
      <h1 id="team-home">Home</h1>
      <h1 id="score-home">0</h1>
      <button onclick="hs1()">+1</button>
      <button onclick="hs2()">+2</button>
      <button onclick="hs3()">+3</button>
    </home>
    <guest>
      <h1 id="team-guest">Guest</h1>
      <h1 id="score-guest">0</h1>
      <button onclick="gs1()">+1</button>
      <button onclick="gs2()">+2</button>
      <button onclick="gs3()">+3</button>
    </guest>
    <winner>
      <h1 id="winner">Winning team will be displayed here</h1>
    </winner>
    <script src="script.js"></script>
  </body>
</html>
```

### 3. Write the JavaScript (`script.js`)

Store each score in a variable, update the text on the page, then check who is leading.

```js
const homeScoreBoard = document.getElementById("score-home");
const guestScoreBoard = document.getElementById("score-guest");
const winners = document.getElementById("winner");

let homeScore = 0;
let guestScore = 0;

function addHome(points) {
  homeScore += points;
  homeScoreBoard.textContent = homeScore;
  checkWinner();
}

function addGuest(points) {
  guestScore += points;
  guestScoreBoard.textContent = guestScore;
  checkWinner();
}

function hs1() { addHome(1); }
function hs2() { addHome(2); }
function hs3() { addHome(3); }
function gs1() { addGuest(1); }
function gs2() { addGuest(2); }
function gs3() { addGuest(3); }

function checkWinner() {
  if (homeScore === guestScore) {
    winners.textContent = "It's a tie";
  } else if (homeScore > guestScore) {
    winners.textContent = "Home team is in the lead";
  } else {
    winners.textContent = "Guest team is in the lead";
  }
}
```

### 4. Style it (`style.css`)

The main ideas used in `style.css`:

1. Import the **Cursed Timer ULiL** font from Google Fonts on the first line.
2. Center a **square panel** on the page with `aspect-ratio: 1 / 1` and `width: min(92vmin, 640px)`.
3. Split the panel into two columns (Home and Guest) with CSS Grid.
4. Inside each team, use a **3-column grid** so the team name and score span the full width and the +1, +2, +3 buttons always stay in one row.
5. Use `cqw` units (`container-type: inline-size`) so text and buttons scale with the panel, which keeps the layout identical at any zoom level or screen size.

Colors used:

| Element | Color |
| --- | --- |
| Page background | `#1B244A` |
| Score box | `#080001` |
| Score text | `#F94F6D` |
| Team names | `#EEEEEE` |
| Button border | `#9AABD8` |
| Button hover text | `#252525` |

### 5. Test it

Open `index.html` in a browser, press the buttons, and zoom in and out to confirm the layout doesn't move.

## Possible Improvements

- Add a **Reset** button
- Add a game timer
- Let users edit the team names
- Save the score using `localStorage`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
