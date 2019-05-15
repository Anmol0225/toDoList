//Check of todo by clicking
//click add listners to existing elements
//on adds listners to future elements
//.click and .on("click", function (){}) is same
//$("li").click(function(){
$("ul").on("click","li",function(){
//toggle check uncheck
//	if ($(this).css("color") === "rgb(128, 128, 128)") {
//		$(this).css({
//			color: "black",
//			textDecoration: "none"
//		});	
//	} else {
//		$(this).css({
//			color: "gray",
//			textDecoration: "line-through"
//		});
//	}
	$(this).toggleClass("completed");
});

//X deleting todo
//event bubbling event bubbles up to the parent element
//to stop bubbling stopPropagation
//$("span").click(function(event){
$("ul").on("click","span",function (){
//	$(this).parent().remove();
//  this is span
	$(this).parent().fadeOut(500,function(){
		//this is li not span
		$(this).remove();
	});
	event.stopPropagation();
})

//create new todo
//which property of keypress object gives character code of the key pressed
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grab text from input
		var toDoText = $(this).val();
		$(this).val("");
		//create a new li with input text to ul at bottom
		$("ul").append("<li><span><i class='fa fa-trash'></i><span<>" +" " +toDoText+ "</li>");

	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})