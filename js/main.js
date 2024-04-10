

function draw_cuadrado() 
{
    const canvas = document.getElementById("canvas_cuadrado");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
    
    
      ctx.fillStyle='rgb(255, 87, 51)';
  
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }
  
  function draw_tri() {
    const canvas = document.getElementById("canvas_tri");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.beginPath();
      ctx.moveTo(200, 50); 
      ctx.lineTo(300, 150); 
      ctx.lineTo(100, 150); 
      ctx.fill();
    }
  }
  
  
  
  draw_cuadrado();
  draw_tri();