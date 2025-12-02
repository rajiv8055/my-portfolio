// Theme toggling (no localStorage to keep it simple)
const btn = document.getElementById('themeToggle');
const root = document.documentElement;

function setIcon(){
  btn.textContent = root.classList.contains('light') ? '☀' : '☾';
}
btn.addEventListener('click', () => {
  root.classList.toggle('light');
  setIcon();
});
setIcon();

// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection-based reveal animation
const observer = new IntersectionObserver(
  (entries)=>entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); observer.unobserve(e.target); }
  }), {threshold:.12}
);
document.querySelectorAll('.section, .card, .project').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});
