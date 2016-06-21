var SERVER_URL = "ws:localhost:9090";
var WS         = new WebSocket(SERVER_URL);
var ANGLE      = 0;

function socketSetup () {
  WS.onopen = function () {
    console.log("Connection opened...");
    WS.send(JSON.stringify(eval("({ angle: " + 0 + "})")));
  }
  WS.onmessage = function (e) {
		ANGLE = JSON.parse(e.data).angle * 25;
		update_mouse();
  }
  WS.onclose = function (e) {
    console.log("Connection closed...");
  }
  WS.onerror = function (e) {
    console.log("Connection error...");
  }
};

var pHeart = [

	//ligne
	// [ 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
	// [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	// [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	// [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	// [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
	// [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	// [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	// [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	// [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	// [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	// [ 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
	// [ 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]

	[ 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1 ],
	[ 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1 ],
	[ 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0 ],
	[ 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1 ],
	[ 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1 ],
	[ 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1 ],
	[ 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1 ],
	[ 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0 ],
	[ 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1 ],
	[ 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1 ],
	[ 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1 ]


];

var Blocs = function( type ){
	this.w 			= 82;
	this.h 			= 40;
	this.sw 		= 82,
	this.sh 		= 40,
	this.life 		= 1,
	this.damage 	= 0;
	this.fillColor    = 'red',
	this.strokeColor = 'white',
	this.spriteX 	= 0;
	this.spriteY 	= 0;
	Blocs.prototype.draw = function( ctx ){
		ctx.strokeStyle = this.strokeColor;
		ctx.fillStyle   = this.fillColor;
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.strokeRect(this.x, this.y, this.w, this.h);
	};
	Blocs.prototype.ghost = function( ctx )
	{
		ctx.fillStyle = "rgba( 0, 0, 0, 0.2 )";
		ctx.fillRect( this.x, this.y, this.w, this.h );
		this.img 		= document.getElementById('bloc-explosion');
		this.spriteY = 0;
	    if( this.spriteX <= ( 16 * 96 ) ){
		    ctx.drawImage(
				this.img, 						//Specifies the image, canvas, or video element to use
				this.spriteX, 					//The x coordinate where to start clipping
				this.spriteY, 					//The y coordinate where to start clipping
				96, 							//The width of the clipped image
				96, 							//The height of the clipped image
				this.x, 						//The x coordinate where to place the image on the canvas
				this.y - (this.h / 2), 				//The y coordinate where to place the image on the canvas
				30, 				//The width of the image to use (stretch or reduce the image)
				30  				//The height of the image to use (stretch or reduce the image)
			);
			this.spriteX += 96;
		}
	};
	Blocs.prototype.collision = function()
	{
		this.spriteY += this.sh;
	};
	Blocs.prototype.die = function()
	{
		this.customeDie();
	};
	Blocs.prototype.customeDie = function()
	{ return true; };
	Blocs.prototype.animDie = function()
	{ return true; };
	Blocs.prototype.launch = function()
	{};
	Blocs.prototype.init = function( type )
	{
		this.sw 		= oBlocs[type].sw || this.sw;
		this.sh 		= oBlocs[type].sh || this.sh;
		this.life 		= oBlocs[type].life || this.life;
		this.damage 	= oBlocs[type].damage || this.damage;
		this.img 		= oBlocs[type].img || this.img;
		this.collision 	= oBlocs[type].collision || this.collision;
		this.die 		= oBlocs[type].die || this.die;
		this.customeDie = oBlocs[type].customeDie || this.customeDie;
		this.animDie 	= oBlocs[type].animDie || this.animDie;
		this.ghost 		= oBlocs[type].ghost || this.ghost;
		this.draw 		= oBlocs[type].draw || this.draw;
		this.launch		= oBlocs[type].launch || this.launch;
		this.type 		= type;
		this.launch();
	};
	this.init( type );
}
var oBlocs = {
	1 : {
		life : 1,
		sw : 82,
		sh : 40
	}
}
var oLevels = {
	heart : {
		map : pHeart
	}
}
function ball() {
	this.defaultSetting = {
		x : oMouse.x,
		y : oSize.h - 100,
		r : 6,
		c : '#fff',
		damage : 1,
		speed : 9,
		dx : 0,
		dy : -1,
		invicible : false,
		img : document.getElementById("ball-default"),
		lvl : 0,
		blocs : {
			w : oSize.w / 50,
			h : ( oSize.w / 50 ) / 1.8
		}
	};
	this.oBar		= {
		x : 0,
		y : oSize.h - 100,
		h : 10,
		w : 300,
		c : '#fff',
		img : document.getElementById("bar-default")
	};
	this.aBalls 	= [];
	this.aBlocs 	= [];
	this.aAnims 	= [];
	this.aLvls = [
		oLevels.heart
	];
	this.bSufateuse = false;
	ball.prototype.new_lvl = function(){
		if( typeof( this.aLvls[ this.defaultSetting.lvl + 1 ] ) != 'undefined' )
			this.defaultSetting.lvl++;
		else
			this.defaultSetting.lvl = 0;

		this.reset_lvl();
		this.init();
	}
	ball.prototype.reset_lvl = function(){
		this.oBar		= {
			x : 0,
			y : oSize.h - 100,
			h : 10,
			w : 100,
			c : '#fff',
			img : document.getElementById("bar-default")
		};
		this.aBlocs 	= [];
		this.aAnims 	= [];
	}
	ball.prototype.build_lvl = function(){
		var iMargL = ( oSize.w - ( this.aLvls[ this.defaultSetting.lvl ].map[0].length * this.defaultSetting.blocs.w ) ) / 2;
		var iMargT = ( this.oBar.y  - ( this.aLvls[ this.defaultSetting.lvl ].map.length * this.defaultSetting.blocs.h ) ) / 2;
		//build line
		for (var l = 0; l <= this.aLvls[ this.defaultSetting.lvl ].map.length - 1; l++) {
			var aLine = this.aLvls[ this.defaultSetting.lvl ].map[ l ];
			//colonnes
			for (var c = 0; c <= aLine.length - 1; c++) {
				if( aLine[c] != 0 )
					this.add_bloc( l, c, iMargL, iMargT, aLine[c] );
			};
		};
	};
	ball.prototype.check_end_lvl = function(){
		if( this.aBlocs.length == 0 )
		if( this.aBlocs.length == 0 )
		if( this.aBlocs.length == 0 )
		if( this.aBlocs.length == 0 )
			return true;
		else
			return false;
	}
	ball.prototype.add_bloc = function( line, col, margL, margT, type ){
		var oBloc = new Blocs( type );
		oBloc.w = this.defaultSetting.blocs.w;
		oBloc.h = this.defaultSetting.blocs.h;
		oBloc.x = margL + ( col * oBloc.w );
		oBloc.y = margT + ( line * oBloc.h );
		this.aBlocs.push( oBloc );
		this.aBlocs.push( oBloc );
		this.aBlocs.push( oBloc );
		this.aBlocs.push( oBloc );
	};
	ball.prototype.add_ball = function( options ){
		options 	= options || {};
		var aDyx = [ -1, 1 ];
		var oDefault = {
			x : this.aBalls[0].x,
			y : this.aBalls[0].y,
			r : this.defaultSetting.r,
			speed : this.defaultSetting.speed,
			dx : rand( 0, 2 ) - 1,
			dy : aDyx[ Math.floor( Math.random() * aDyx.length ) ],
			damage : this.defaultSetting.damage,
			invicible : false,
			img : document.getElementById("ball-clone")
		}
		var oNewBall = merge( oDefault, options );
		this.aBalls.push( oNewBall );
	};
	ball.prototype.sufateuse = function(){
		if( this.bSufateuse ){
			var sufateuse = this.sufateuse.bind( this );
			setTimeout(sufateuse, 100);
		}
	};
	ball.prototype.sufateuse_on = function(){
		// this.bSufateuse = true;
		// this.sufateuse();
	}
	ball.prototype.sufateuse_off = function(){
		// this.bSufateuse = false;
	}
	ball.prototype.ball_rect_collision = function( circ, rect ){
		//thx to http://stackoverflow.com/questions/21089959/detecting-collision-of-rectangle-with-circle-in-html5-canvas
		var distX = Math.abs(circ.x - rect.x-rect.w/2);
	    var distY = Math.abs(circ.y - rect.y-rect.h/2);

	    if (distX > (rect.w/2 + circ.r)) { return false; }
	    if (distY > (rect.h/2 + circ.r)) { return false; }

	    if (distX <= (rect.w/2)) { return true; }
	    if (distY <= (rect.h/2)) { return true; }

	    var dx=distX-rect.w/2;
	    var dy=distY-rect.h/2;
	    return (dx*dx+dy*dy<=(circ.r*circ.r));
	};
	ball.prototype.rect_rect_collision = function( rect1, rect2 ){
		if (
			rect1.x < rect2.x + rect2.w &&
			rect1.x + rect1.w > rect2.x &&
			rect1.y < rect2.y + rect2.h &&
			rect1.h + rect1.y > rect2.y)
		{

		   return true;
		}else{ return false; }
	};
	ball.prototype.check_remove = function( ball, i ){
		//check bottom
		if( ball.y + ball.r >= oSize.h ){
			if( ball.invicible  ){
				ball.dy = -ball.dy;
			}else{
				this.aBalls.splice( i , 1);
			}
		}
	};
	ball.prototype.check_border_collision = function( ball ){
		//check left
		if( ( ball.x - ball.r ) <= 0 ){
			ball.dx 	= -ball.dx;
			ball.x 		= ball.r;
		}
		//check right
		if( ( ball.x + ball.r ) >= oSize.w ){
			ball.dx 	= -ball.dx;
			ball.x 		= oSize.w - ball.r;
		}
		//check top
		if( ( ball.y - ball.r ) <= 0 ){
			ball.dy 	= -ball.dy;
			ball.y 		= ball.r;
		}
	};
	ball.prototype.check_bar_collision = function( ball, axis ){
		if( this.ball_rect_collision( ball, this.oBar ) && ball.dy > 0 ){
			this.do_collision( ball, this.oBar, axis );
			if( axis == 'y' ){
				ball.y 		= this.oBar.y - ball.r;
				ball.dy 	= -1;
				ball.dx 	= this.get_ball_angle( ball, this.oBar );
			}
		}
	};
	ball.prototype.check_blocs_collision = function( ball, axis ){
		for (var i = this.aBlocs.length - 1; i >= 0 ; i--) {
			if( this.ball_rect_collision( ball, this.aBlocs[ i ] ) ){
				this.aBlocs[ i ].damage += ball.damage;
				this.aBlocs[ i ].collision();
				this.do_collision( ball, this.aBlocs[ i ], axis );
			}
		}
	};
	ball.prototype.do_collision = function( ball, rect, axis ){
		if( axis == 'x' ){
			if( ball.dx > 0 )//if i move to right
				ball.x = ( rect.x - 1 ) - ( ball.r * 2 );//then i'm on the left of the bloc
			else//if i move to left
				ball.x = ( rect.x + 1 ) + rect.w + ( ball.r * 2 );//then i'm on the right of the bloc
			//now change direction
			ball.dx 	= -ball.dx;
		}else{
			if( ball.dy > 0 )//if i move to bottom
				ball.y = ( rect.y - 1 ) - ball.r;//then i'm on the top of the bloc
			else//if i move to top
				ball.y = ( rect.y + 1 ) + rect.h + ball.r;//then i'm on the bottom of the bloc
			//now change direction
			ball.dy 	= -ball.dy;
		}
	}
	ball.prototype.get_ball_angle = function( ball, rect ){
		var iCollisionX 	= ball.x - rect.x;
		var pcCollisionX 	= iCollisionX * 100 / rect.w;
		var iNewAngle 		= ( ( 2 * pcCollisionX ) / 100 ) - 1;
		return iNewAngle;
	};
	ball.prototype.update_bar = function(){
		this.oBar.x = oMouse.x - ( this.oBar.w / 2 );
		if( this.oBar.x < 0 )
			this.oBar.x = 0;

		if( ( this.oBar.x + this.oBar.w ) > oSize.w )
			this.oBar.x = oSize.w - this.oBar.w;
	};
	ball.prototype.update_ball = function(){
		for (var i = 0; i <= this.aBalls.length - 1; i++) {
			this.aBalls[i].x += this.aBalls[i].speed * this.aBalls[i].dx;
			this.check_blocs_collision( this.aBalls[i], 'x' );
			this.aBalls[i].y += this.aBalls[i].speed * this.aBalls[i].dy;
			this.check_bar_collision( this.aBalls[i], 'y' );
			this.check_blocs_collision( this.aBalls[i], 'y' );
			this.check_border_collision( this.aBalls[i] );
			this.check_remove( this.aBalls[i], i );
		}
	};
	ball.prototype.update_blocs = function(){
		for (var i = this.aBlocs.length - 1; i >= 0; i--) {
			if( this.aBlocs[i].life <= this.aBlocs[i].damage ){
				this.aBlocs[i].die();
				this.aBlocs.splice( i, 1 );
			}
		};
	}
	ball.prototype.update_anims = function(){
		for (var i = this.aAnims.length - 1; i >= 0; i--) {
			this.aAnims[i].update();
		};
	}
	ball.prototype.update = function(){
		this.update_blocs();
		this.update_bar();
		this.update_anims();
		this.update_ball();
	};
	ball.prototype.draw_ball = function( ctx ){
		for (var i = 0; i <= this.aBalls.length - 1; i++) {
			ctx.drawImage( this.aBalls[i].img, this.aBalls[i].x - this.aBalls[i].r, this.aBalls[i].y - this.aBalls[i].r, this.aBalls[i].r*2, this.aBalls[i].r*2);
		};
	};
	ball.prototype.draw_bar = function( ctx ){
		ctx.drawImage( this.oBar.img, this.oBar.x, this.oBar.y, this.oBar.w, this.oBar.h);
	};
	ball.prototype.draw_blocs = function( ctx ){
		for (var i = 0; i <= this.aBlocs.length - 1; i++) {
			this.aBlocs[i].draw( ctx );
		};
	};
	ball.prototype.draw_anims = function( ctx ){
		for (var i = 0; i <= this.aAnims.length - 1; i++) {
			this.aAnims[ i ].draw( ctx );
		};
	};
	ball.prototype.draw = function( ctx ){
		this.draw_blocs( ctx );
		this.draw_ball( ctx );
		this.draw_bar( ctx );
		this.draw_anims( ctx );
	};
	ball.prototype.init = function(){
		this.aBalls 	= [];
		var oBall = {
			x : this.defaultSetting.x,
			y : this.defaultSetting.y,
			r : this.defaultSetting.r,
			c : this.defaultSetting.c,
			speed : this.defaultSetting.speed,
			dx : this.defaultSetting.dx,
			dy : this.defaultSetting.dy,
			invicible : true,
			damage : this.defaultSetting.damage,
			img : this.defaultSetting.img
		}
		this.aBalls.push( oBall );
		this.build_lvl();
	};
	this.init();
}

/** global vars **/
var oSize 		= {
	h : window.innerHeight,
	w : window.innerWidth
};
var oMouse 		= {
	x : oSize.w / 2,
	y : oSize.h / 2
};

var canvas 		= document.getElementById('canvas');

var ctx	 		= canvas.getContext('2d');
canvas.height 	= oSize.h;
canvas.width 	= oSize.w;

rand = function( min, max ){ return Math.random() * ( max - min) + min; };
update_mouse = function(){ oMouse.x = ANGLE + (window.innerWidth/2); };
onresize = function () { oSize.w = canvas.width = window.innerWidth; oSize.h = canvas.height = window.innerHeight; };
merge = function(o1,o2){var o3 = {};for (var attr in o1) { o3[attr] = o1[attr]; }for (var attr in o2) { o3[attr] = o2[attr]; }return o3;}

var oBall = new ball();

document.addEventListener('onresize', onresize, false);
window.onresize();


/** ANIMATION **/
function render(){
	ctx.clearRect(0, 0, oSize.w, oSize.h );

	oBall.update();

	oBall.draw( ctx );

	if( oBall.check_end_lvl() )
		oBall.new_lvl();

	requestAnimationFrame( render );
	socketSetup();
}
render();
