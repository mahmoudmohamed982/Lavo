

function toggleForm(){
  document.body.classList.toggle('activeForm');
}



$(document).ready(function(){

  $('.play-pause-btn').on('click',function(){
   
  if($(this).attr('data-click') == 1) {
  $(this).attr('data-click', 0)
  $(this).text('►');
  $('#video')[0].pause();
  } else {
  $(this).attr('data-click', 1)
  $(this).text('❚❚');
  $('#video')[0].play();
  }
   
  });
  
  });
  


// to do upload img
/*---==>Custom FIle Upload--==>*/
$(".file-upload").each(function() {

  var fI  = $(this).children('input'), 
      btn = $(this).children('.btn-upload'), 
      i1  = $(this).children('.i-pic-upload'),
    i2  = $(this).children('.i-deselect'), 
    dN  = "No file Selected", 
    tfN = $(this).find('.text-file-name'), 
    bT  = $(this).find('.text-browse');
    bT.text('Browse...');
    tfN.text('No file Selected');

    btn.click(function(b) {
       b.preventDefault(); 
       fI.click();
    });
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
          reader.onload = function(e) {
          i1.css("background", "url("+e.target.result+") no-repeat center").removeClass('fa fa-camera');
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
  fI.change(function(e) {
    readURL(this); 
    var fN = e.target.files[0].name; 
    tfN.text(fN); 
    i2.fadeIn(200); 
    bT.text('Change...');
  });
  i2.click(function() {
    i2.fadeOut(100);
    window.setTimeout(function() {
      i1.css("background", "#ebebeb").addClass('fa fa-camera');
      bT.text('Browse...');
      tfN.text('No file Selected');
      fI.val(null);
    }, 200);

  });
});

//to do toggle view way

function toggleMenuView(){
  document.getElementById("listView").classList.remove('list-view-active');
  document.getElementById("menuView").classList.toggle('menu-view-active');
  document.getElementById("crosswise").classList.add('d-none');
  document.getElementById("lengthwise").classList.remove('d-none');

}
function toggleListView(){
  document.getElementById("menuView").classList.remove('menu-view-active');
  document.getElementById("listView").classList.toggle('list-view-active');
  document.getElementById("lengthwise").classList.add('d-none');
  document.getElementById("crosswise").classList.remove('d-none');
  
}


//to do toggle view terms and conditions

function toggleTerms(){
  document.getElementById("privacy").classList.remove('active-terms-link');
  document.getElementById("terms").classList.add('active-terms-link');
  document.getElementById("privacyPolicyBody").classList.add('d-none');
  document.getElementById("tOfUseBody").classList.remove('d-none');
}

function togglePrivacy(){
  document.getElementById("terms").classList.remove('active-terms-link');
  document.getElementById("privacy").classList.add('active-terms-link');
  document.getElementById("tOfUseBody").classList.add('d-none');
  document.getElementById("privacyPolicyBody").classList.remove('d-none');
}

function switchStyle() {
  if (document.getElementById('styleSwitch').checked) {
    document.getElementById('gallery').classList.add("custom");
    document.getElementById('exampleModal').classList.add("custom");
  } else {
    document.getElementById('gallery').classList.remove("custom");
    document.getElementById('exampleModal').classList.remove("custom");
  }
}



function switchStyle() {
  if (document.getElementById('styleSwitch').checked) {
    document.getElementById('gallery').classList.add("custom");
    document.getElementById('exampleModal').classList.add("custom");
  } else {
    document.getElementById('gallery').classList.remove("custom");
    document.getElementById('exampleModal').classList.remove("custom");
  }
}