// JavaScript Document
function Widget() {
	var me = this,//self container
	//element variables
		container,
		icon,
		desc,
		title,
		rating,
		deleteButton,
	//private variables
		_parent,
		_icon,
		_desc,
		_rating,
		_title = '';

	//body functions
	function createElements() {
		container = document.createElement('div');
		icon = document.createElement('img');
		title = document.createElement('p');
		desc = document.createElement("p");
		rating = document.createElement("p");
		container.appendChild(title);
		container.appendChild(icon);
		container.appendChild(desc);
		container.appendChild(rating);
	}

	function style() {
		container.className = 'customWidget';
		icon.className = 'icon';
		title.className = 'title';
		desc.className = 'desc';
		rating.className = 'rating';
	}

	function update() {
		icon.src = _icon || 'Assets/Globale_images/default.jpg';
		title.textContent = _title;
		desc.textContent = _desc;
		rating.textContent = "Rating :"+ _rating;
		container.setAttribute('title', _title);

	}

	//event handlers
	function iconError() {
		icon.src = 'Assets/default.png';
	}

	function viewClick() {
		var evt = document.createEvent('Event');
		evt.me = me;
		evt.initEvent('widgetClick', true, true);
		container.dispatchEvent(evt);
	}

	//setters
	this.render = function (parent) {
		_parent = parent;
		parent.appendChild(container);
		return me;

	}
	this.setIcon = function (src) {
		_icon = src;
		update();
		return me;
	}

	this.setDesc = function (text) {
		_desc = text;
		update();
		return me;
	}
	this.setTitle = function (text) {
		_title = text;
		update();
		return me;
	}

	this.setRating = function (text) {
		_rating = text;
		update();
		return me;
	}


	//getters

	//init
	createElements();
	style();
	update();
	return me;
}
window.Widget = Widget;