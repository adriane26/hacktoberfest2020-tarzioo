function copyGhostGamePiece() {
  /* Get the text field */
  var copyText = document.getElementById("ghost-emoji");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Player Ghost: " + copyText.value);
}


function copyPumpkinGamePiece() {
  /* Get the text field */
  var copyText = document.getElementById("pumpkin-emoji");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Player Pumpkin: " + copyText.value);
}