// n: 分割数 number of division（2 <= n）
p5.prototype.grid = function (n){
    // タテ線の間隔（X軸方向の間隔）
    const X_PITCH = width/n;
    // ヨコ線の間隔（Y軸方向の間隔）
    const Y_PITCH = height/n;
    
    // ヨコ線 vertical lines
    for(let i=1; i<n; i++){
      line(0, i*Y_PITCH, width, i*Y_PITCH)
    }
    
    // タテ線 vertical lines
    for(let i=1; i<n; i++){
      line(i*X_PITCH, 0, i*X_PITCH, height)
    }
  }
  
  // 設定を保持するプロパティ
  p5.prototype.gridNumber = 3
  
  // 設定を変更するメソッド
  p5.prototype.setGridNumber = function (n){
    if (n < 2) return
    p5.prototype.gridNumber = n
  }
  
  p5.prototype.renderGridPreDraw = function(){
    p5.prototype.grid(p5.prototype.gridNumber)
  }
  
  p5.prototype.registerMethod("post", p5.prototype.renderGridPreDraw)