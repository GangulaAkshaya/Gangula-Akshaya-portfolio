// Welcome screen and main portfolio elements
const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const portfolio = document.getElementById("portfolio");

// Open the portfolio
function openPortfolio(sectionId) {
    welcomeScreen.classList.add("hidden");
    portfolio.classList.remove("hidden");

    if (sectionId) {
        setTimeout(() => {
            document.getElementById(sectionId)
                ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// Let's Start button
startButton.addEventListener("click", () => {
    openPortfolio("home");
});

// Welcome page heading buttons
document.querySelectorAll(".welcome-buttons a").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        const section = this.dataset.section;
        openPortfolio(section);
    });
});

// Mobile navigation
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

// Close mobile navigation after clicking a link
navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
    });
});

// Dark and light theme
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Contact form
// This opens the user's email application.
// It does not send or store messages on a server.
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(
        "Portfolio enquiry from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage: " + message
    );

    window.location.href =
        "mailto:gangulaakshaya49@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;
});
