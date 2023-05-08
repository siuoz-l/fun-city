for (let index = 0; index < array.length; index++) {
    const element = array[index];
    localStorage.setItem("SIUOZL_12100_header", document.getElementById("SIUOZL_12100_header").value);   
    var userName = localStorage.getItem("Siuozl_ProfileNAME");
            window.onload = function() {
                document.getElementById("userName").innerText = (userName)
            };
};