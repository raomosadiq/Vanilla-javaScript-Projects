
function keyBtn(e) {
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <th>${e.key}</th>
      <th>${e.keyCode}</th> 
      <th>${e.code}</th>
    </tr>
    
  </table>
    </div>
  `;
  document.querySelector('.key').hidden = true;


}


window.addEventListener('keydown', keyBtn)