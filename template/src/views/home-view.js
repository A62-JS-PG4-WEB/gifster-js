/**
 * Generates HTML for the home view, displaying trending GIFs.
 *
 * @returns {string} HTML content for the home view.
 */
export const toHomeView = () => `
    <a class="trending" data-page="trending">
        <h1>Trending GIFs 
            <img src="https://cdn4.iconfinder.com/data/icons/universal-icons/120/vector_288_18-1024.png" alt="Thunder Icon" class="thunder-icon">
        </h1>
    </a>
    <hr>
    <section class="trending-container" aria-live="polite">
        <!-- Trending GIFs will be inserted here -->
    </section>
`;