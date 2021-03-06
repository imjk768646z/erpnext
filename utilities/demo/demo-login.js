$(document).ready(function() {
    $(".navbar, footer, .banner, #user-tools").toggle(false);
    
    $("#login_btn").click(function() {
        var me = this;
        $(this).html("Logging In...").attr("disabled", "disabled");
        wn.call({
            "method": "login",
            args: {
                usr: "demo@erpnext.com",
                pwd: "demo",
                lead_email: $("#lead-email").val(),
            },
            callback: function(r) {
                $(me).attr("disabled", false);
                if(r.exc) {
                    alert("Error, please contact support@erpnext.com");
                } else {
                    console.log("Logged In");
                    window.location.href = "app.html";
                }
            }
        })
        return false;
    })
    .attr("disabled", false);
})