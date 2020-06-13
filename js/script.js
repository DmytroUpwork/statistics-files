$( document ).ready(function() {
	$(function($) {
	  let url = window.location.href;
	  $('li a').each(function() {
	    if (this.href === url) {
	      $(this).closest('li').addClass('active');
	    }
	  });
	});
	$('.btn_upload').click( function(){
		$('.form_upload_file').css({'display' : 'none'});
		$('.form_upload_another_file').css({'display' : 'block'});
	});

	//===================================select private

	$(".trigger").click(function(){
  	var opt = $(".trigger option:selected").val();
  	if(opt == 1) {
    	myFunction_1();
    }
    if (opt == 2) {
    	myFunction_2();
    }
  });
  function myFunction_1(){
		$('.private_message_box, .nav_private_message').css({'display' : 'none'});
		$('.group_members_box').css({'display' : 'block'});
		$('.nav_group_members').css({'display' : 'flex'});
	};
  function myFunction_2(){
		$('.private_message_box').css({'display' : 'block'});
		$('.group_members_box, .nav_group_members').css({'display' : 'none'});
		$('.nav_private_message').css({'display' : 'flex'});
	};
	$('.add_group_statistics').click( function(){
		$( this ).css({'display' : 'none'}); 
		$('.tab-content_2, .nav_2').css({'display' : 'none'});
		$('.box_statistics, .tab-content_1').css({'display' : 'block'});
		$('.nav_1').css({'display' : 'flex'});
	});
	$('.button_message').click( function(){
		$('.nav_2').css({'display' : 'flex'});
		$('.tab-content_2, .add_group_statistics, .action_form').css({'display' : 'block'});
		$('.nav_1, .tab-content_1, .box_statistics').css({'display' : 'none'});	
	});
	$('.add_privat_group').click( function(){
		$('.tab_content_private_1, .form_group_messages').css({'display' : 'block'});
		$('.tab_content_private_2, .form_private_peoples').css({'display' : 'none'});
	});
	$('.add_people_private').click( function(){
		$('.tab_content_private_1').css({'display' : 'block'});
		$('.tab_content_private_2').css({'display' : 'none'});
	});
	$('.button_message_privat_groups').click( function(){
		$('.tab_content_private_2, .action_form_private, .box_file_attachments').css({'display' : 'block', 'opacity' : '1'});
		$('.tab_content_private_1, .form_box_file_attachments').css({'display' : 'none'});
	});
	$('.page_group_private_button_1').click( function(){
		$('.tab_content_private_2, .form_box_file_attachments').css({'display' : 'block'});
		$('.tab_content_private_1, .action_form_private, .current_task_save_people').css({'display' : 'none'});
	});
	$('.page_group_spam').click( function(){
		$('.tab_content_private_1, .form_group_messages').css({'display' : 'block'});
		$('.tab_content_private_2, .form_private_peoples').css({'display' : 'none'});
	});
	$('.page_group_private_button_2').click( function(){
		$('.tab_content_private_2, .form_box_file_attachments, .box_file_attachments').css({'display' : 'block', 'opacity' : '1'});
		$('.tab_content_private_1, .action_form_private, .current_task_save_people').css({'display' : 'none'});
	});
	$('.page_private_spam').click( function(){
		$('.tab_content_private_1, .form_private_peoples').css({'display' : 'block'});
		$('.tab_content_private_2, .form_group_messages').css({'display' : 'none'});
	});
	$('.add_people_private').click( function(){
		$('.form_private_peoples, .tab_content_private_1').css({'display' : 'block'});
		$('.action_form_private, .form_group_messages, .form_box_file_attachments').css({'display' : 'none'});	
	});
	$('.button_message_people_private').click( function(){
		$('.action_form_private, .tab_content_private_2').css({'display' : 'block'});
		$('.form_private_peoples, .tab_content_private_1, .form_box_file_attachments, .current_task_save_people').css({'display' : 'none'});	
	});
	$('.btn_form_account_user').click( function(){
		$('.current_task_save_people, .tab_content_private_2').css({'display' : 'block'});
		$('.form_private_peoples, .tab_content_private_1, .form_box_file_attachments').css({'display' : 'none'});
	});
	$('.btn_new_form_templates').click( function(){
		$('.card_form_new').css({'display' : 'block'});
		$('.card_form_example').css({'display' : 'none'});
	});
	$('.btn_example_form_templates').click( function(){
		$('.card_form_example').css({'display' : 'block'});
		$('.card_form_new').css({'display' : 'none'});
	});



	var $add_channel = $('.add_chanels_active').clone(true);
		$('.but_hover_channels').click(function() {
		  $(this).before($add_channel.clone(true));
		});

	var $modal_channel = $('.add_chanels_active').clone(true);
		$('.but_modal_channels').click(function() {
		  $(this).before($modal_channel.clone(true));
		});

	var $block = $('.block_people').clone(true);
		$('.but_hover_new_people').click(function() {
		  $(this).before($block.clone(true));
		});
		$(document).on('click', '.btn_remove_peoples', function() {
		  $(this).parent().remove();
		});

	var $new_group_add = $('.table_clone_1').clone(true);
		$('.btn_add_group_1').click(function() {
		  $(this).before($new_group_add.clone(true));
		});
		$(document).on('click', '.but_remove_table', function() {
		  $(this).closest('.table_clone_1').remove();
		});

	var $new_group_add_1 = $('.table_clone_2').clone(true);
		$('.btn_add_group_2').click(function() {
		  $(this).before($new_group_add_1.clone(true));
		});
		$(document).on('click', '.but_remove_table', function() {
		  $(this).closest('.table_clone_2').remove();
		});

	var $new_template_add = $('.template_clone').clone(true);
		$('.button_template_new').click(function() {
		  $(this).before($new_template_add.clone(true));
		});
		$(document).on('click', '.but_hover_remove', function() {
		  $(this).closest('.template_clone, .template_clone_1').remove();
		});

	$("#fl_inp, #fl_inp_2").change(function(){
		var filename = $(this).val().replace(/.*\\/, "");
			$("#fl_nm").html(filename);
		});
		$('#fl_inp').click( function(){
			$('label[for="fl_inp_2"]').css({'display' : 'block'});
		});

	
});

