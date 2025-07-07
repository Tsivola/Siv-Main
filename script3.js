function toggleInfo(id) {
    const content = document.getElementById(id);
  
    document.querySelectorAll('.content').forEach(section => {
      if (section.id !== id) {
        section.classList.remove('open');
      }
    });
  
    content.classList.toggle('open');
  }
  
  // Smooth background spotlight targeting hovered boxes
  const boxes = document.querySelectorAll('.info-box');
  
  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      const rect = box.getBoundingClientRect();
      const centerX = ((rect.left + rect.right) / 2 / window.innerWidth) * 100;
      const centerY = ((rect.top + rect.bottom) / 2 / window.innerHeight) * 100;
  
      document.body.style.setProperty('--x', `${centerX}%`);
      document.body.style.setProperty('--y', `${centerY}%`);
    });
  });
  
  // Optional: Reset to center when not hovering
  document.addEventListener('mouseleave', () => {
    document.body.style.setProperty('--x', `50%`);
    document.body.style.setProperty('--y', `50%`);
  }, true);
  