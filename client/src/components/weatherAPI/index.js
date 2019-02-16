// import React from "react";
// import "./style.css";
// // import $ from "jquery";

// class weatherAPI extends React.Component {

//     // Weather API
//     $("#search-weather").on("click", function () {
//         var userCity = $("#weather-city").val().toLowerCase()
//         console.log(userCity)
//         $.ajax({
//         url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + userCity + "&units=imperial&APPID=0aaf6ed86a35a5a59f48151fb51f3428",
//         method: "GET"
//         }).then(function (response) {
//         console.log("######################################")
//         console.log(response)
//         var currentWeather = response.weather[0].main
//         // $("#user-city").text("The city of " + userCity + "'s weather is currently " + currentWeather)
//         console.log(currentWeather)
//         if (currentWeather === "Clear") {
//             $(".fa-cog").css("color", "lightblue")
//             $("#title").css("color", "lightblue")
//             $("#topnav").css("border-bottom-color", "lightblue")
//             $("footer").css("border-top-color", "lightblue")
//             $(".faButton").css("color", "lightblue")
//             $("#profileFooter").css("color", "lightblue")
//             $("#weather-text").css("color", "lightblue")
//             $("#profilePicture").css("color", "lightblue")
//             $("#user-city").css("color", "lightblue")
//         } else if (currentWeather === "Clouds") {
//             $(".fa-cog").css("color", "grey")
//             $("#title").css("color", "grey")
//             $("#topnav").css("border-bottom-color", "grey")
//             $("footer").css("border-top-color", "grey")
//             $(".faButton").css("color", "grey")
//             $("#profileFooter").css("color", "grey")
//             $("#weather-text").css("color", "grey")
//             $("#profilePicture").css("color", "grey")
//             $("#user-city").css("color", "grey")
//         } else if (currentWeather === "Rain") {
//             $(".fa-cog").css("color", "rgb(3, 74, 236)")
//             $("#title").css("color", "rgb(3, 74, 236)")
//             $("#topnav").css("border-bottom-color", "rgb(3, 74, 236)")
//             $("footer").css("border-top-color", "rgb(3, 74, 236)")
//             $(".faButton").css("color", "rgb(3, 74, 236)")
//             $("#profileFooter").css("color", "rgb(3, 74, 236)")
//             $("#weather-text").css("color", "rgb(3, 74, 236)")
//             $("#profilePicture").css("color", "rgb(3, 74, 236)")
//             $("#user-city").css("color", "rgb(3, 74, 236)")
//         }
//         })
//     })
//     $("#reset-color").on("click", function () {
//         // Returns to default color theme
//         $(".fa-cog").css("color", "white")
//         $("#weather-city").val("")
//         $("#topnav").css("border-bottom-color", "white")
//         $("#title").css("color", "white")
//         $(".faButton").css("color", "white")
//         $("footer").css("border-top-color", "white")
//         $("#weather-text").css("color", "white")
//         $("#profileFooter").css("color", "white")
//         $("#user-city").empty()
//         $("#profilePicture").css("color", "white")
        
//     })

//     render() {

        
//         return (


//             <div>

//                  {/* Weather Theme Change */}
//                 <div id="weather-function">
//                     <p id="weather-text">Change the page's theme based on the weather!</p>
//                     <p id="user-city"></p>
//                     <input type="text" id="weather-city" placeholder="Type in your city!" />
//                     <br></br>
//                     <br></br>
//                     <button id="search-weather">Search</button>
//                     <button id="reset-color">Reset Theme</button>
//                 </div>

//             </div>

//         )
//     }


// }

// export default weatherAPI;