oElement = document.getElementById("choice20A");
if (oElement) {
Total=Total+1
document.getElementById("choice20A").disabled=true;

if ((document.getElementById("choice20A").value==document.getElementById("text20").value)&&(document.getElementById("choice20A").checked)) correct=correct+1;

document.getElementById("choice20B").disabled=true;

if ((document.getElementById("choice20B").value==document.getElementById("text20").value)&&(document.getElementById("choice20B").checked)) correct=correct+1;

document.getElementById("choice20C").disabled=true;

if ((document.getElementById("choice20C").value==document.getElementById("text20").value)&&(document.getElementById("choice20C").checked)) correct=correct+1;

document.getElementById("choice20D").disabled=true;

if ((document.getElementById("choice20D").value==document.getElementById("text20").value)&&(document.getElementById("choice20D").checked)) correct=correct+1;

if ((document.getElementById("choice20A").value==document.getElementById("text20").value)) document.getElementById("C20A").style.color='red';

if ((document.getElementById("choice20B").value==document.getElementById("text20").value)) document.getElementById("C20B").style.color='red';

if ((document.getElementById("choice20C").value==document.getElementById("text20").value)) document.getElementById("C20C").style.color='red';

if ((document.getElementById("choice20D").value==document.getElementById("text20").value)) document.getElementById("C20D").style.color='red';
}
