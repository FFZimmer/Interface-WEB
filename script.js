$(document).ready(function() {
    $('#fetch-user').on('click', function() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                const user = data.results[0];
                const userInfo = `
                    <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Date of Birth:</strong> ${new Date(user.dob.date).toLocaleDateString()}</p>
                    <p><strong>Age:</strong> ${user.dob.age}</p>
                `;
                $('#user-info').html(userInfo);
            },
            error: function(error) {
                $('#user-info').html('<p>An error occurred while fetching user data.</p>');
            }
        });
    });
});
