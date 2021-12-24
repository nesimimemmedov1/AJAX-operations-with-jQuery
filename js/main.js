$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users",
        dataType: "JSON",
        success: function (response) {
            $(response.data).each(function (id, val) {
                $("#userTable").append(`
                    <tr>
                        <td><input disabled type="text" class="form-control" value="${val.first_name}"></td>
                        <td><input disabled type="text" class="form-control" value="${val.last_name}"></td>
                        <td><input disabled type="text" class="form-control" value="${val.email}"></td>
                    </tr>
                `)
            })
            console.log("GET", response.data);
        },
        error: function () {
            console.log("Error");
        }
    });
    $(document).on('submit', 'form', function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "https://reqres.in/api/users",
            dataType: "JSON",
            success: function (response) {
                let data = {
                    id: response.id,
                    first_name: $("#user_name").val(),
                    last_name: $("#user_surname").val(),
                    email: $("#user_email").val(),
                };
                console.log("POST", data);
                $("#userTable").append(`
                        <tr>
                            <td><input disabled type="text" class="form-control" value="${data.first_name}"></td>
                            <td><input disabled type="text" class="form-control" value="${data.last_name}"></td>
                            <td><input disabled type="text" class="form-control" value="${data.email}"></td>
                        </tr>
                    `)
                $(".form-input").val('');
            },
            error: function () {
                console.log("Error");
            }
        });
    });
});