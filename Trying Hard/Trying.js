<script>
    // Initially ensure the contact number is hidden
    document.getElementById("phone-number").style.display = "none";

    // Function to toggle the phone number visibility
    function showPhoneNumber() {
        var phoneNumberSection = document.getElementById("phone-number");

        // Toggle the visibility of the phone number section
        if (phoneNumberSection.style.display === "none") {
            phoneNumberSection.style.display = "block";  // Show phone number
        } else {
            phoneNumberSection.style.display = "none";  // Hide phone number
        }
    }
</script>