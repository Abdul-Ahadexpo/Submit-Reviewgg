# BPL Dream 11 🏏--- [Live link](https://github.com/Abdul-Ahadexpo/Assignment-7)

Welcome to **BPL Dream 11**! This is a React-based cricket team selection app where users can choose and manage players within a coin limit, inspired by the Dream 11 concept. This project was designed as part of Assignment-07 to help reinforce React concepts and UI development skills.

## Project Description

The BPL Dream 11 app allows users to:

- Select players for their dream cricket team based on a limited coin budget.
- Toggle between available and selected players.
- Enjoy a rich user experience following a Figma design.

The app is interactive, with validation to ensure players are only added if the user has enough coins and hasn't exceeded the player limit.

## Features

1. **Navbar with Coin Display**: Displays the user's coin balance, initially set to zero.
2. **Dynamic Banner**: Users can earn coins by clicking a button in the banner.
3. **Player Selection with Coin Validation**: Users can select players based on their coin balance, with alerts if they exceed their limits.
4. **Toggle View**: Switch between available and selected players with a count indicator.
5. **React-Toastify Notifications**: For better user feedback during player selection and removal.
6. **Newsletter Section**: A subscription feature with LocalStorage to save the user's email and greet them upon revisit.
7. **Footer**: Custom footer that follows the Figma design.

## 🛠️ Technologies Used

- **React**: For building the user interface and managing state.
- **React Toastify**: To display notifications instead of standard alerts.
- **LocalStorage**: For saving the user's email in the newsletter section.

## Components Overview

### Navbar

- Displays the user's current coin balance.

### Banner

- A section with a button that increments the user's coins for buying players.

### Player List

- Shows available players in a card layout with "Choose Player" buttons.

### Selected Players

- Displays the list of selected players and allows users to remove them.

### Newsletter

- Allows users to subscribe, saving their email in LocalStorage.

### Footer

- Custom footer designed based on Figma.

## How to Use

1. **Choose Players**: Click "Choose Player" on each player card to add them to your team.
2. **Newsletter**: Subscribe by entering your email; the app will remember you on future visits.
