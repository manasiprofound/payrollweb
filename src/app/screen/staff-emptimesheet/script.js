function showWeek() {
    var selectedDate = new Date(document.getElementById("calendar").value);
    var weekStart = new Date(selectedDate);
    var weekEnd = new Date(selectedDate);
  
    // Calculate the start of the week (Sunday)
    weekStart.setDate(selectedDate.getDate() - selectedDate.getDay());
  
    // Calculate the end of the week (Saturday)
    weekEnd.setDate(selectedDate.getDate() - selectedDate.getDay() + 6);
  
    var weekView = document.getElementById("week-view");
    weekView.innerHTML = "";
  
    var currentDate = new Date(weekStart);
    while (currentDate <= weekEnd) {
      var day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
      var date = currentDate.getDate();
      var month = currentDate.toLocaleDateString('en-US', { month: 'short' });
      var year = currentDate.getFullYear();
  
      var dayContainer = document.createElement("div");
      dayContainer.classList.add("day");
      dayContainer.innerHTML = `${day}, ${month} ${date}, ${year}`;
  
      weekView.appendChild(dayContainer);
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  
  // Initial call to showWeek() to display the current week on page load
  showWeek();
  