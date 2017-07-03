var friends=['Harry','Larry','Barry','Scary','Dairy']
var loc=['Dining Room','Living Room','Dying Room','Existing Room','Blood Room','Stab Room','Stabby Death Room of Doom','Utility Closet','Death Closet','Stab Closet']
var weapons=['Knife','Loaf of Bread','Dog Biscuit','Bag of Flour','Keyboard','JavaScript Lab','Fireworks','Flail','Mace','Javelin','Sword','Axe','Vacuum Cleaner','Cat','Headphones','Giraffe','Zebra Skull','Playstation','Water Bottle','Mustard']
var randFriend = friends[Math.floor(Math.random() * friends.length)];
var randLoc = loc[Math.floor(Math.random() * loc.length)];
var randWep = weapons[Math.floor(Math.random() * weapons.length)];

$(document).ready(function(){

    for(var i=1;i<101;i ++){
        var header=document.createElement('h3')
        $(header).addClass('heading')
        document.body.append(header)
        var clue="Clue " + i
        header.append(clue)
        
    }
    $('.heading').on('click', function(){
        clueGame()
})

})

function clueGame(){
    alert(randFriend + ' did it in ' + randLoc + ' with a ' + randWep)
}