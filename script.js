function updateTime() {
  const timeElement = document.getElementById("time");

  // Get the current time in Indian Standard Time (IST)
  const currentTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
  const time = new Date(currentTime);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Format hours, minutes, and seconds
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the time in HH:MM:SS AM/PM format
  timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}
function displayGreeting() {
  const greetingElement = document.getElementById("greeting");
  const greetingText = document.getElementById("greetingText");
  const emoji = document.getElementById("emoji");

  // Get the current time in Indian Standard Time (IST)
  const currentTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
  const time = new Date(currentTime);

  const hours = time.getHours();

  let greeting;

  if (hours < 12) {
    greeting = "Good Morning 💚💙";
    gText = `"Morning is an important time of day because how you spend your morning can often tell you what kind of day you are going to have."`;
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good Afternoon 😍";
    gText = `"Afternoons are the best part of the day; they remind us that there’s still time to do something productive."`;
  } else {
    greeting = "Good Evening 😘";
    gText = `"  Evenings are the beautifully sweet spot between the harsh light of the day and the dead darkness of night. "`;
  }

  // Display the greeting
  greetingElement.textContent = greeting;
  greetingText.textContent = gText;
}

// Call the function to set the greeting when the page loads
displayGreeting();

// Update the time every second
setInterval(updateTime, 1000);

// Initialize time display when the page loads
updateTime();
