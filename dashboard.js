// Generate Random User Activity
const activities = [
    "Purchased Subscription", "Updated Profile", "Left a Review",
    "Signed Up", "Uploaded Document", "Reset Password"
];
const users = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "Alice Brown", "David White"];

function generateActivityData() {
    let table = document.getElementById("userActivityTable");
    let html = "";
    for (let i = 0; i < 10; i++) {
        let user = users[Math.floor(Math.random() * users.length)];
        let activity = activities[Math.floor(Math.random() * activities.length)];
        let date = `March ${Math.floor(Math.random() * 30) + 1}, 2025`;
        html += `<tr>
                    <td>${user}</td>
                    <td>${activity}</td>
                    <td>${date}</td>
                 </tr>`;
    }
    table.innerHTML = html;
}
generateActivityData();

// Generate User Profiles
function generateUserProfiles() {
    let table = document.getElementById("userProfilesTable");
    let html = "";
    for (let i = 1; i <= 100; i++) {
        let name = `User ${i}`;
        let email = `user${i}@example.com`;
        let status = i % 2 === 0 ? "Active" : "Inactive";
        html += `<tr>
                    <td><img src="https://randomuser.me/api/portraits/men/${i % 50}.jpg" class="user-img"></td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${status}</td>
                 </tr>`;
    }
    table.innerHTML = html;
}
generateUserProfiles();

// Sales Chart
var ctx = document.getElementById('salesChart').getContext('2d');
var salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales ($)',
            data: [5000, 7000, 8000, 12000, 15000, 18000],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
window.addEventListener('load', function() {
    // Check if the user is logged in
    if (!localStorage.getItem('loggedIn')) {
        // Redirect to the login page if not logged in
        window.location.href = 'login.html'; // Redirect to login page
    }
});

