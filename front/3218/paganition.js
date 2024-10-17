const topics = [
    { title: "Pop-up performance", voices: 38, posts: 65, lastPost: "22 hours, 58 minutes ago", author: "Anonymous" },
    { title: "Competitive Racing Game – Smash Karts", voices: 9, posts: 9, lastPost: "1 day, 15 hours ago", author: "Anonymous" },
    { title: "minecraft apk", voices: 1, posts: 1, lastPost: "1 day, 15 hours ago", author: "Anonymous" },
    { title: "How to Get directions by Mapquest driving directions?", voices: 4, posts: 4, lastPost: "5 days, 10 hours ago", author: "Anonymous" },
    { title: "Explore the Ultimate Luxury Desert Tour Marrakech with AtlasTripTour", voices: 2, posts: 2, lastPost: "6 days, 15 hours ago", author: "Anonymous" },
    { title: "The Pros and Cons of Adobe Commerce Cloud", voices: 2, posts: 2, lastPost: "1 week ago", author: "Anonymous" },
    { title: "How to play Candy Clicker game?", voices: 7, posts: 7, lastPost: "1 week, 1 day ago", author: "Anonymous" },
    { title: "How to play Candy Clicker game?", voices: 7, posts: 7, lastPost: "1 week, 1 day ago", author: "Anonymous" },
    { title: "How to play Candy Clicker game?", voices: 7, posts: 7, lastPost: "1 week, 1 day ago", author: "Anonymous" },
    { title: "How to play Candy Clicker game?", voices: 7, posts: 7, lastPost: "1 week, 1 day ago", author: "Anonymous" },
    { title: "How to play Candy Clicker game?", voices: 7, posts: 7, lastPost: "1 week, 1 day ago", author: "Anonymous" },
    { title: "How to play Candy Clicker game?", voices: 7, posts: 7, lastPost: "1 week, 1 day ago", author: "Anonymous" },
    { title: "How to play Candy Clicker game?", voices: 7, posts: 7, lastPost: "1 week, 1 day ago", author: "Anonymous" },
    { title: "How to play Candy Clicker game?", voices: 7, posts: 7, lastPost: "1 week, 1 day ago", author: "Anonymous" },
    { title: "How to play Candy Clicker game?", voices: 7, posts: 7, lastPost: "1 week, 1 day ago", author: "Anonymous" },
];

const rowsPerPage = 5;
let currentPage = 1;

function displayTopics() {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedTopics = topics.slice(start, end);

    const topicsBody = document.getElementById('topicsBody');
    topicsBody.innerHTML = '';

    paginatedTopics.forEach(topic => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="topic-title">${topic.title}</div>
                <div class="topic-meta">Started by: <i class="fas fa-user"></i> ${topic.author}</div>
            </td>
            <td>${topic.voices}</td>
            <td>${topic.posts}</td>
            <td>${topic.lastPost}<br>${topic.author}</td>
        `;
        topicsBody.appendChild(row);
    });
}

function displayPagination() {
    const pageCount = Math.ceil(topics.length / rowsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.innerText = i;
        pageLink.className = i === currentPage ? 'active' : '';
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            displayTopics();
            displayPagination();
        });
        pagination.appendChild(pageLink);
    }
}

displayTopics();
displayPagination();