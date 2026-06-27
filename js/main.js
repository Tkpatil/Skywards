const WHATSAPP_URL = 'https://wa.me/919930426127'

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.nav')
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open')
    nav.classList.toggle('open')
  })
  nav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open')
      nav.classList.remove('open')
    })
  })
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item')
    const wasOpen = item.classList.contains('open')
    document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'))
    if (!wasOpen) item.classList.add('open')
  })
})

// Services tabs
const serviceNav = document.querySelectorAll('.services-nav-item')
const servicePanels = document.querySelectorAll('.services-panel')
serviceNav.forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.service
    serviceNav.forEach((b) => b.classList.remove('active'))
    servicePanels.forEach((p) => p.classList.remove('active'))
    btn.classList.add('active')
    document.getElementById(id)?.classList.add('active')
  })
})

// Contact form → WhatsApp
const contactForm = document.getElementById('contact-form')
const formSuccess = document.getElementById('form-success')
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = contactForm.name.value
    const phone = contactForm.phone.value
    const message = contactForm.message.value
    const text = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`
    )
    window.open(`${WHATSAPP_URL}?text=${text}`, '_blank')
    contactForm.style.display = 'none'
    formSuccess?.classList.add('visible')
  })
}

const resetForm = document.getElementById('reset-form')
if (resetForm) {
  resetForm.addEventListener('click', () => {
    contactForm.reset()
    contactForm.style.display = 'flex'
    formSuccess?.classList.remove('visible')
  })
}
