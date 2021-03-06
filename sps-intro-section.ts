import {Component, Input} from '@angular/core';

@Component({
	selector:				'sps-intro-section',
	template:				`
		<section id="intro" class="intro-fullscreen">
			<div class="intro-media overlay-dark20"></div>
			<div class="intro-caption-waper dark-bg">
				<div class="intro-full-height container" style="min-height: 500px; height: 100%;">
					<div class="intro-content">
						<div class="intro-content-inner">
							<h1 class="intro-title mb-10">{{title}}</h1>
							<a class="btn btn-lg btn-white scroll-down" href="{{buttonLink}}" target="_blank">{{buttonTitle}}</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,
	styles:					[`
		a {color: #333; cursor: pointer; text-decoration: none;}
		.overlay-dark20 {position: relative; z-index: 1;}
		.overlay-dark20:before {left: 0; top: 0; position: absolute; width: 100%; height: 100%; content: ""; z-index: -1;}
		.overlay-dark20:before {background-color: rgba(34,34,34,0.2);}
		#intro {position: relative;}
		.intro-fullscreen {min-height: 500px; height: 100%;}
		.intro-media {width:100%; position:absolute; display:block; top:0; left:0; height:100%;}
		.intro-caption-waper {height:100%; position:absolute; width:100%; z-index:2;}
		.intro-content {display:table; height: 100%; text-align:center; width: 100%;}
		.intro-content-inner {display: table-cell; height: 100%; vertical-align: middle;}
		.intro-img-circle {margin-left:auto; margin-right:auto; width:120px; height:120px; border:5px solid rgba(0,0,0, 0.2); border-radius:50%; -moz-border-radius:50%; -webkit-border-radius:50%; margin-bottom:30px;}
		.intro-img-circle img {outline:none; border:none; width:100%; height:100%; border-radius:50%; -moz-border-radius:50%; -webkit-border-radius:50%;}
		@media (max-width: 767px) {
			.intro-title {letter-spacing:0; font-size:18px;}
			.btn{font-size: 10px;}
		}
	`]
})

export class SpsIntroSection {
	@Input() title;
	@Input('button-title') buttonTitle;
	@Input('button-link') buttonLink;
}