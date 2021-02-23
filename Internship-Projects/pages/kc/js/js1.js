  // Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "kriger-website.firebaseapp.com",
  databaseURL: "https://kriger-website.firebaseio.com",
  projectId: "kriger-website",
  storageBucket: "kriger-website.appspot.com",
  messagingSenderId: "246030514172"
};
firebase.initializeApp(config);


var lim = 0;
var getData = function(){
firebase.database().ref(`/Posts/`).limitToLast(10 + lim).once('value').then(snapshot =>{
    var postId = "";
		var uid1="";
		var pname="";
		var docid="";
		var name_again="";


    snapshot.forEach(function(snap){
    pname = snap.child("author").val();
    var ptext = snap.child("text").val();
    docid = snap.child("document_id").val();
    uid1= snap.child("uid").val();

   var html8 = ' ';

   console.log(snap.val());

   if(snap.child("image_url").exists()){
      var pimg = snap.child("image_url").val();
      console.log(pimg);
      var html8='<img src='+pimg+ ' height="200px" align="center" display= "block" margin-left="auto" margin-right ="auto"';
    }

   var dt1= snap.child("timestamp").val();
   var pattern = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
   var dt2 = new Date(dt1.replace(pattern,'$1-$2-$3T$4:$5:$6Z'));
   var dt = dt1.replace(pattern,'$3-$2-$1 $4:$5:$6');

   var plike= snap.child("count_like").val();
   var pcomment= snap.child("count_comment").val();
   var cl = docid+'1'; // for comment
   var img1 = docid+'2'; //dp for post
	 var img3= docid+'3'; // dp for commet box

  //class="mag-posts-content mt-30 mb-30 p-30 box-shadow"
  // Uncompress Online to understand

  var headingHtml =  '<div><div id="SinglePost" class="mag-posts-content mt-30 mb-30 p-30 box-shadow"> <div class="feature-video-posts mb-30"> <div class="section-heading"> <h5> <a href="archive.html" class="nav-brand" id='+img1+'></a> &emsp;'+pname+' </h5> </div> <div class="featured-video-posts"> <div class="row"> <div class="col-12 col-lg-7"><!-- Single Featured Post --> <div class="single-featured-post"> <!-- Thumbnail --> <div class="post-thumbnail mb-50"> '+html8+' </div> <!-- Post Contetnt --> <div class="post-content"> <a class="post-title"> '+ptext+' </a> </div> <!-- Post Share Area --> <div class="post-share-area d-flex align-items-center justify-content-between"></div> </div> </div> <div class="col-12 col-lg-5"> <!-- Featured Video Posts Slide --> <div class="single--slide"> <h3>Comments</h3> <div class="post-meta d-flex"> <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>'+plike+'</a>&emsp;&emsp;<a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i>'+pcomment+'</a> </div></br> <!-- Comments --> <div class="single-blog-post d-flex style-3"> <div class="post-content"> <a id = '+cl+' class="post-title">Global Resorts Network Grn Putting Timeshares To Shame</a> </div> </div> </br> </div> </div> </div> </div> </div> </div>';  

  $("#AllPosts").prepend(headingHtml);

	/*	for comments */
	  firebase.database().ref('/Comments/'+snap.key).once('value').then(snapshot1=>{
		snapshot1.forEach(function(snap1){
		//console.l5og(snap1.val());
	    var cm1 = snap1.child("username").val()+": "+snap1.child("string").val();
	    html5 = "<div>"+cm1+"</div>";

	  	$("#"+cl).prepend(html5);

		});
	  });
	  // for dp of post box and comment box
	  firebase.database().ref('/UserDetails/'+uid1).once('value').then(snap2=>{
	 	var img2 = snap2.child("thumb").val();

		 var test= img2+snap2.child("name").val();
      var html6 = '<img src='+img2+' alt="Avatar" class="w3-left w3-circle w3-margin-right"   width="70" height="70"> ';
		 	 $("#"+img1).prepend(html6);
		 });

});


});
}

getData(0);
$(window).scroll(function() {
if($(window).scrollTop() + $(window).height() == $(document).height()) {
  $("#AllPosts").children().hide();
  getData();
  lim += 10;
  }
});