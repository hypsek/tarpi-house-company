/*
Copyright (c) 2017 Nail art responsive HTML template
------------------------------------------------------------------
[Master Javascript]

Project:	Nail art responsive HTML template

-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var barber = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			
			/*-------------- Barber Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.rev_slider();
			// this.color_switcher();
			this.Bx_slider();
			this.pretty_photo();
			this.notification_toggle();
			this.barber_menu();
			this.sidebar_toggle();
			this.barber_portfolio();
			this.barber_tabs();
			this.barber_counter();
			this.accordion_toggle();
			this.mail_function();
			
		},
		/*-------------- Barber Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/


		RTL: function() {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
		},
		rev_slider: function() {
			var tpj = jQuery;
			var revapi116;
			if($('#rev_slider_116_1').length > 0){
				if (tpj("#rev_slider_116_1").revolution == undefined) {
					revslider_showDoubleJqueryError("#rev_slider_116_1");
				} else {
					revapi116 = tpj("#rev_slider_116_1").show().revolution({
						sliderType: "standard",
						jsFileLocation: "../../revolution/js/",
						sliderLayout: "fullscreen",
						dottedOverlay: "none",
						delay: 9000,
						navigation: {
							keyboardNavigation: "off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation: "off",
							onHoverStop: "off",
							touch: {
								touchenabled: "on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							arrows: {
								style: "gyges",
								enable: true,
								hide_onmobile: true,
								hide_under: 600,
								hide_onleave: true,
								hide_delay: 200,
								hide_delay_mobile: 1200,
								tmp: '',
								left: {
									h_align: "left",
									v_align: "center",
									h_offset: 30,
									v_offset: 0
								},
								right: {
									h_align: "right",
									v_align: "center",
									h_offset: 30,
									v_offset: 0
								}
							}
						},
						viewPort: {
							enable: true,
							outof: "pause",
							visible_area: "80%"
						},
						gridwidth: 1240,
						gridheight: 600,
						lazyType: "none",
						shadow: 0,
						spinner: "off",
						stopLoop: "off",
						stopAfterLoops: -1,
						stopAtSlide: -1,
						shuffle: "off",
						autoHeight: "off",
						hideThumbsOnMobile: "off",
						hideSliderAtLimit: 0,
						hideCaptionAtLimit: 0,
						hideAllCaptionAtLilmit: 0,
						debugMode: false,
						fallbacks: {
							simplifyAll: "off",
							nextSlideOnWindowFocus: "off",
							disableFocusListener: false,
						}
					});
				}
			}
			RsTypewriterAddOn(tpj, revapi116);
            //thumbnail slider
			var revapi477;
			if($('#rev_slider_477_1').length > 0){
				if(tpj("#rev_slider_477_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_477_1");
				}else{
					revapi477 = tpj("#rev_slider_477_1").show().revolution({
						sliderType:"standard",
                        jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"1",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"on",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 50,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							thumbnails: {
								style:"gyges",
								enable:true,
								width:100,
								height:100,
								min_width:100,
								wrapper_padding:10,
								wrapper_color:"#333333",
								wrapper_opacity:"0",
								tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
								visibleAmount:5,
								hide_onmobile:false,
								hide_onleave:false,
								direction:"vertical",
								span:true,
								position:"inner",
								space:5,
								h_align:"right",
								v_align:"top",
								h_offset:0,
								v_offset:0
							}
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1200,1024,778,480],
						gridheight:[600,600,600,450],
						lazyType:"single",
						parallax: {
							type:"scroll",
							origo:"slidercenter",
							speed:400,
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
							type:"scroll",
						},
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			}
		},
		color_switcher: function() {
			//Color Change Script
			$('.colorchange').on("click", function() {
				var name = $(this).attr('id');
				var new_style = 'css/' + name + '.css';
				$('#theme-change').attr('href', new_style);
			});

			$("#style-switcher .bottom a.settings").on("click", function(e) {
				e.preventDefault();
				var div = $("#style-switcher");
				if (div.css("left") === "-159px") {
					$("#style-switcher").animate({
						left: "0px"
					});
				} else {
					$("#style-switcher").animate({
						left: "-159px"
					});
				}
			});
			//color picker end
		},
		Bx_slider: function() {
			var $slider = jQuery('.bxslider').bxSlider({
				maxSlides: 5,
				minSlides: 1,
				moveSlides: 1,
				slideWidth: 225,
				margin: 5,
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>',
				auto: true,
				easing: 'easeInOutQuint',
				pause: 3000,
				pager: false,
				controls: true,
			});
			var $slider = jQuery('.slider_bx').bxSlider({

				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>',
				easing: 'easeInOutQuint',
				auto: false,
				pause: 3000,
				pager: false,
				controls: true,
			});
		},
		pretty_photo: function() {
			jQuery(".gallery a").attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
			jQuery(".alignnone").parent().attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
            
			
			 //prettyphoto lightbox 

			jQuery(".light_img_wrap a ").attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
			jQuery(".alignnone").parent().attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
		},
		notification_toggle: function() {
			$(".toogle_span").on("click", function() {
				$(".notification_bar").slideToggle(300);

			});
		},
		barber_menu: function() {
			//toggle menu
			$(".navbar_toggle").on("click", function() {
				$(".navbar_collapse").slideToggle(300);
			});
			//active class
			$(".menu a").on("click", function() {
				$(".menu").find(".current_page_item").removeClass("current_page_item");
				$(this).parent().addClass("current_page_item");
			});
			//active_sub
			$(".active_sub").attr('style', 'color:#333 !important');
			//add class
			$(".sub-menu li a").before("<b></b>");

			//add submenu li class
			$("ul.sub-menu").parents("li").addClass("dropdown");
		},
		sidebar_toggle: function() {
			$(".sidebar_toogle").on("click", function() {
				$(".ds_sidebar").slideToggle(300);

			});
		},
		barber_portfolio: function() {
			//Mixitup
			$('#porfolio_filter').mixItUp();
			filterSelector: ".filter"
			$(".filter").on("click", function(e) {
				e.preventDefault()
			});
			//active portfolio  class
			$(".blog_ul a").on("click", function() {
				$(".blog_ul ").find(".active").removeClass("active");
				$(this).parent().addClass("active");
			});
		},
		barber_tabs: function() {
			//uitabs
			$("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
			$("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
		},
		barber_counter: function() {
			$('.timer').each(count);
			function count(options) {
				var $this = $(this);
				options = $.extend({}, options || {}, $this.data('countToOptions') || {});
				$this.countTo(options);
			}
		},
		accordion_toggle: function() {
			function toggleChevron(e) {
				$(e.target)
					.prev('.panel-heading')
					.find('i.indicator')
					.toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
			}
			$('#accordion').on('hidden.bs.collapse', toggleChevron);
			$('#accordion').on('shown.bs.collapse', toggleChevron);
		},
		mail_function: function() {
			$("#em_submit").on("click", function() {
			var e = $("#uname").val();
			var t = $("#umail").val();
			var n = $("#subj").val();
			var r = $("#msg").val();
			$.ajax({
				type: "POST",
				url: "ajaxmail.php",
				data: {
					username: e,
					useremail: t,
					useresubject: n,
					mesg: r
				},
				success: function(n) {
					var i = n.split("#");
					if (i[0] == "1") {
						$("#uname").val("");
						$("#umail").val("");
						$("#subj").val("");
						$("#msg").val("");
						$("#err").html(i[1])
					} else {
						$("#uname").val(e);
						$("#umail").val(t);
						$("#subj").val(t);
						$("#msg").val(r);
						$("#err").html(i[1])
					}
				}
			})
		});
		},
		
		};

barber.init();

    // Load Event
	$(window).on('load', function() {
		//preloader
		$("#status").fadeOut();
		$("#preloader").delay(1200).fadeOut("slow")
		//color change from demo
		var colorcode = document.cookie;
		if (colorcode != "") {
			var cname = "colorcssfile";
			var name = cname + "=";
			var cssname = '';
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1);
				if (c.indexOf(name) != -1) {
					cssname = c.substring(name.length, c.length);
				}
			}
			if (cssname != '') {
				var new_style = 'css/' + cssname + '.css';
				$('#theme-change').attr('href', new_style);
			}
		}
	});

	// Scroll Event
	$(window).bind('scroll', function() {
        if ($(window).scrollTop() > 70) {
            $('.wrapper_nav').addClass('fixed_top').slideDown('slow');
        } else {
            $('.wrapper_nav').removeClass('fixed_top');
        }

    });

	// mask
	$(".mask").mask("8(999) 999-9999");

	    //On load window
    $(window).on('load', function() {
        var load;
        setTimeout(function() {
            $('body').addClass('load');
        }, 500);


    });

	
})(jQuery);