// main page JS - simply-nav does not need this
(pageDuty => {
  const on = '<strong>On</strong>';
  const off = '<strong>Off</strong>';
  const navWrapper = document.querySelector('.nav-wrapper');
  const mainWrapper = document.querySelector('main');
  const burgerIcon = document.querySelector('.burger');


//  menuToggle.addEventListener('click', () => {
//    burgerIcon.classList.toggle('-offset');
//    (burgerIcon.classList.contains('-offset') ? menuText.innerHTML = off : menuText.innerHTML = on);
//  });

})();

// define object to save Pinterest users for viewing boards
function PinterestUserBoard(firstname, lastname, id, boardname, interests, colors)  {
    this.firstname = firstname;
    this.lastname =  lastname;
	this.id = id;
    this.boardname = boardname;
	this.interests = interests;
	this.colors = colors;
	this.displayname = function() {return this.lastname + ", " + this.firstname;};
	this.displaynameFL = function() {return this.firstname + " " + this.lastname;};
}

function buildStandardListUsers(){
	//build standard list of Pinterest usernames
	listUsers.push(new PinterestUserBoard('Cindy', 'Whiting', 'cindywhiting138', 'christmas', 'Nativities, religious, carolers, nutcrackers', 'traditional colors'));
	listUsers.push(new PinterestUserBoard('Catherine', 'Poole', 'koneechee', 'christmas-decor', 'Nativities, Elephants, Fun Christmas', 'red/green'));
	listUsers.push(new PinterestUserBoard('Rebecca', 'Johnson', 'liralin', 'christmas-ideas', 'Nativities, Santas, Animated/Cartoon characters and other pop culture, sci-fi, Fun Christmas', 'tradional colors or fun jewel tones, silver and gold'));
	listUsers.push(new PinterestUserBoard('Sarah', 'Van Wagoner', 'sarahvanwagoner4', 'christmas', '', ''));
	listUsers.push(new PinterestUserBoard('Brittany', 'Morgan', 'brittnkatie', 'christmas-time-is-here', '', ''));
	listUsers.push(new PinterestUserBoard('Hannah', 'Davenport', 'pinned4life', 'christmas', 'Non-religious', 'red/green'));
	listUsers.push(new PinterestUserBoard('Emily', 'Baier', 'musicebaier', 'christmas', '', ''));
	listUsers.push(new PinterestUserBoard('Emma', 'Whiting', 'emmanem101', 'christmas', '', ''));
	listUsers.push(new PinterestUserBoard('Kelly', 'Cormell', 'kcrmll', 'christmas', 'See Pinterest ideas', 'traditional'));
	listUsers.push(new PinterestUserBoard('Dianna', 'Burns', 'diannamburns', 'christmas', 'Angels', 'traditional'));
	listUsers.push(new PinterestUserBoard('Jennifer', 'Baier', 'squirrelsmomjb', 'christmas', ''));
	listUsers.push(new PinterestUserBoard('Barbara', 'McLain', 'julieandchris', 'for-mom', 'Snowmen', 'red/dark green'));
	listUsers.push(new PinterestUserBoard('DNece', 'Thompson', 'dnecet', 'christmas-cheers', 'Ocean, Beach, Coffee', ''));
	listUsers.push(new PinterestUserBoard('Natalie', 'Costa', 'costa5837', 'xmas', 'Owls, Christmas villages', 'traditional colors'));
	//savedRDJPageVisitor.listUsers = listUsers;
}

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

function sortListUsers(){
	//sort users based on displayname
	listUsers.sort(function(a, b) {
		var textA = a.displayname().toUpperCase();
		var textB = b.displayname().toUpperCase();
		return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
	});
}

