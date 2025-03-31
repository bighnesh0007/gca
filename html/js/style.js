// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll behavior
    const navbar = document.querySelector(".navbar")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.padding = "10px 0"
        navbar.style.backgroundColor = "rgba(0, 123, 185, 0.95)"
      } else {
        navbar.style.padding = "15px 0"
        navbar.style.backgroundColor = "rgba(0, 123, 185, 0.95)"
      }
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const navbarHeight = document.querySelector(".navbar").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
  
          // Close mobile menu if open
          const navbarCollapse = document.querySelector(".navbar-collapse")
          if (navbarCollapse.classList.contains("show")) {
            document.querySelector(".navbar-toggler").click()
          }
        }
      })
    })
  
    // FAQ accordion functionality
    const accordionButtons = document.querySelectorAll(".accordion-button")
    accordionButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const expanded = this.getAttribute("aria-expanded") === "true"
        this.setAttribute("aria-expanded", !expanded)
  
        const target = document.querySelector(this.getAttribute("data-bs-target"))
        if (target) {
          if (expanded) {
            target.classList.remove("show")
          } else {
            target.classList.add("show")
          }
        }
      })
    })
  
    // Currency converter functionality
    const convertBtn = document.getElementById("convertBtn")
    if (convertBtn) {
      convertBtn.addEventListener("click", convertCurrency)
    }
  
    // Initial conversion result
    updateConversionResult()
  
    // Form submission handling
    const contactForm = document.querySelector(".contact-form form")
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        // Simple form validation
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        if (!name || !email || !subject || !message) {
          alert("Please fill in all fields")
          return
        }
  
        // Simulate form submission
        alert("Thank you for your message. We will get back to you soon!")
        this.reset()
      })
    }
  })
  
  // Currency conversion function
  function convertCurrency() {
    const amount = document.getElementById("amount").value
    const fromCurrency = document.getElementById("fromCurrency").value
    const toCurrency = document.getElementById("toCurrency").value
  
    // Exchange rates (simplified for demo purposes)
    const exchangeRates = {
      USD: { USD: 1, EUR: 0.85, GBP: 0.75, MYR: 4.65, JPY: 110.5, CNY: 6.45, INR: 74.5 },
      EUR: { USD: 1.18, EUR: 1, GBP: 0.88, MYR: 5.48, JPY: 130.2, CNY: 7.6, INR: 87.9 },
      GBP: { USD: 1.33, EUR: 1.14, GBP: 1, MYR: 6.2, JPY: 147.3, CNY: 8.6, INR: 99.3 },
      MYR: { USD: 0.215, EUR: 0.182, GBP: 0.161, MYR: 1, JPY: 23.8, CNY: 1.39, INR: 16.0 },
      JPY: { USD: 0.00905, EUR: 0.00768, GBP: 0.00679, MYR: 0.042, JPY: 1, CNY: 0.058, INR: 0.67 },
      CNY: { USD: 0.155, EUR: 0.132, GBP: 0.116, MYR: 0.72, JPY: 17.1, CNY: 1, INR: 11.5 },
      INR: { USD: 0.0134, EUR: 0.0114, GBP: 0.0101, MYR: 0.0625, JPY: 1.49, CNY: 0.087, INR: 1 },
    }
  
    // Calculate conversion
    const rate = exchangeRates[fromCurrency][toCurrency]
    const result = (amount * rate).toFixed(2)
  
    // Display result
    updateConversionResult(amount, fromCurrency, result, toCurrency)
  }
  
  // Update conversion result display
  function updateConversionResult(amount = 1, fromCurrency = "USD", result = 4.65, toCurrency = "MYR") {
    const resultElement = document.getElementById("conversionResult")
    if (resultElement) {
      resultElement.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`
    }
  }
  
  // Add active class to current nav item based on scroll position
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link")
  
    let current = ""
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
  
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })
  
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })
  
  