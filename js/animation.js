// document.addEventListener("DOMContentLoaded", function(event) {
//   var il1 = document.getElementsByClassName("adv-left")[0].children[0]
//   var il2 = document.getElementsByClassName("adv-left")[0].children[1]
//   var change = 1
//   setInterval(function(){
//     // if(change == false){
//     //   il1.src = "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//     //   change = true
//     // } else {
//     //   il1.src ="https://tpc.googlesyndication.com/simgad/1234042122299329720"
//     //   change = false
//     // }
//     switch (change) {
//       case 1:
//         il1.src = "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//         il2.src = "https://images.pexels.com/photos/490466/pexels-photo-490466.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         change = 2;
//         break;
//       case 2:
//         il1.src = "https://images.pexels.com/photos/1531677/pexels-photo-1531677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//         il2.src = "https://images.pexels.com/photos/923167/pexels-photo-923167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//         change = 3;
//         break;
//       default:
//         il1.src = "https://tpc.googlesyndication.com/simgad/1234042122299329720"
//         il2.src = "https://images.outbrainimg.com/transform/v3/eyJpdSI6ImI2MWMyZWJiNTZhYzQzZWE2OGFkNmZiODhiYjViYWU5YzE1NDE4ZjE5ZGE2MzNhNGViMDE0ODdjNDdlMzQyYzEiLCJ3Ijo0MDAsImgiOjIyNCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp"
//         change = 1;
//         break;
//     }
//   }, 3000);
//
// });

//Gallery

// GOLDEN GATE, SAN FRANCISCO
document.addEventListener("DOMContentLoaded", function(event) {
  var al1 = document.getElementsByClassName("album-1")[0].children[0]
  var change = 1
  setInterval(function(){
    // if(change == false){
    //   il1.src = "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    //   change = true
    // } else {
    //   il1.src ="https://tpc.googlesyndication.com/simgad/1234042122299329720"
    //   change = false
    // }
    switch (change) {
      case 1:
        al1.src = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
        change = 2;
        break;
      case 2:
        al1.src = "https://images.unsplash.com/photo-1543811547-2fc2bd7b64e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
        change = 3;
        break;
      default:
        al1.src = "https://images.unsplash.com/photo-1500455497814-0b8db1d32380?ixlib=rb-1.2.1&auto=format&fit=crop&w=2084&q=80"
        change = 1;
        break;
    }
  }, 3000);
// End GOLDEN GATE, SAN FRANCISCO


//
// document.addEventListener("DOMContentLoaded", function(event) {
//   var al2 = document.getElementsByClassName("album-2")[0].children[0]
//   var change = 1
//   setInterval(function(){
//     // if(change == false){
//     //   il1.src = "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//     //   change = true
//     // } else {
//     //   il1.src ="https://tpc.googlesyndication.com/simgad/1234042122299329720"
//     //   change = false
//     // }
//     switch (change) {
//       case 1:
//         al2.src = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
//         change = 2;
//         break;
//       case 2:
//         al2.src = "https://images.unsplash.com/photo-1543811547-2fc2bd7b64e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
//         change = 3;
//         break;
//       default:
//         al2.src = "https://images.unsplash.com/photo-1500455497814-0b8db1d32380?ixlib=rb-1.2.1&auto=format&fit=crop&w=2084&q=80"
//         change = 1;
//         break;
//     }
//   }, 3000);
//

// toastr

// toastr.options = {
//   "closeButton": false,
//   "debug": false,
//   "newestOnTop": false,
//   "progressBar": false,
//   "positionClass": "toast-top-center my-toast",
//   "preventDuplicates": false,
//   "onclick": null,
//   "showDuration": "300",
//   "hideDuration": "1000",
//   "timeOut": "5000",
//   "extendedTimeOut": "1000",
//   "showEasing": "swing",
//   "hideEasing": "linear",
//   "showMethod": "fadeIn",
//   "hideMethod": "fadeOut"
// }
// toastr["success"]("Are you the six fingered man?")

// toastr

// End Gallery
});

function hoverAni(x){
  x.className = "animated rubberBand "
}
function hoverJello(x){
  x.className = "animated jello"
}
function hoverbounce(x){
  x.className = "animated bounce"
}

function hoverflash(x){
  x.className = "animated flash"
}

function hoverEnd(x){
  x.className = ""
}
