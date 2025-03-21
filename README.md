# InkSpire

InkSpire is an elegant, minimalist web application that brings the beauty of poetry into your daily life. The app fetches random poems from the PoetryDB API and displays them with a captivating typing animation, allowing users to discover, collect, and revisit their favorite poetic works.

## Features

- **Random Poetry Discovery**: Fetch and display random poems with the click of a button
- **Animated Text Display**: Poems are revealed through a smooth typing animation using Typed.js
- **Personal Collection**: Save your favorite poems to build your personal poetry collection
- **Offline Access**: Access your saved poems even without an internet connection
- **Responsive Design**: Enjoy poetry on any device with a clean, minimalist interface

## Technologies Used

- **Vanilla JavaScript**: Core application logic without heavy frameworks
- **Typed.js**: Library for creating typing animations
- **PoetryDB API**: External API for fetching random poems
- **LocalStorage API**: Browser storage for saving user's poem collection
- **CSS3**: Modern styling with animations and gradients
- **HTML5**: Semantic markup structure
- **Vite**: Build tool and development server


## How It Works

1. The app fetches random poems from the PoetryDB API
2. Poems with more than 50 lines are skipped to ensure readability
3. The selected poem is displayed with a typing animation effect
4. Users can add poems to their collection with the "Add" button
5. The collection is stored in the browser's localStorage
6. Users can view and manage their collection on the home page


## Acknowledgments

- [PoetryDB](https://poetrydb.org) for providing the poetry API
- [Typed.js](https://github.com/mattboldt/typed.js/) for the typing animation library
- Adobe Garamond Pro font via Adobe Fonts
