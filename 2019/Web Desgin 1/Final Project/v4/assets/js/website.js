function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function SetTicket(Ticket, CDate, Ticketamt) {
    // Set the date we're counting down to
    var countDownDate = new Date(CDate).getTime();

    var currentTicket = document.getElementById(Ticket);

    var timeleft = document.createElement("p");
    timeleft.id = 'time' + Ticket;
    timeleft.className = 'timeleft';
    var ticketleft = document.createElement("p");
    ticketleft.id = 'ticket' + Ticket;
    ticketleft.className = 'ticketleft';
    currentTicket.appendChild(timeleft);
    currentTicket.appendChild(ticketleft);

    var timeleft = Ticketamt;

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById('time' + Ticket).innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('time' + Ticket).innerHTML = "EXPIRED";
        }
    }, 1000);

    var downloadTimer = setInterval(function () {
        document.getElementById('ticket' + Ticket).innerHTML = timeleft + " tickets remaining";
        timeleft -= getRandomInt(501);
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById('ticket' + Ticket).innerHTML = "SOLD OUT!"
        }
    }, 1000);
}

function SetTickets() {
    SetTicket('ticket1', "Dec 18, 2019 21:05:00", 20000);
    SetTicket('ticket2', "Dec 22, 2019 14:00:00", 20789);
    SetTicket('ticket3', "Jan 1, 2020 16:20:00", 71000);
}

function main() {
    SetTickets();
}

main();