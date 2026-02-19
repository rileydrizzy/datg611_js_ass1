# DAT611 JavaScript Assignment 1

**Live Deployment:** [View on Vercel](https://your-project-name.vercel.app)

This project demonstrates asynchronous data fetching, data visualization using TensorFlow.js Vis, and modern JavaScript function usage.

## Project Structure

*   **`app.js`**: The main application logic for the web interface.
    *   Fetches user data from JSONPlaceholder.
    *   Parses the data to extract user locations and company details.
    *   Uses `TensorFlow.js Visor` to render:
        *   A **Line Chart** displaying Usernames vs. Latitude coordinates.
        *   A **Bar Chart** displaying Company Names vs. Catchphrase lengths.

## Prerequisites

*   A modern web browser (Chrome, Firefox, Edge).
*   An internet connection (to fetch the remote API data).

## How to Run

### Data Visualization (`app.js`)
1.  Clone the repository:
    ```bash
    git clone https://github.com/rileydrizzy/datg611_js_ass1.git
    cd datg611_js_ass1
    ```
2.  Open the `index.html` file in your browser.
3.  Click the **" Fetch and Plot"** button.
4.  The TensorFlow.js Vis sidebar will open and display the generated charts.
