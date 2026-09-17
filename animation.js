// Fade in on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('show'); }
  })
})
document.querySelectorAll('.feature-card').forEach(el=> observer.observe(el));