document.querySelectorAll('.nav-link.disabled,.btn[disabled]').forEach(el=>{
  el.addEventListener('click', (e)=>{ e.preventDefault(); alert('MotorSpecs SA is Coming Soon!'); })
})