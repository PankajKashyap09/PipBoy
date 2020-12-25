$(document).ready(function(){
    
    var weapon = [{
        "name":"44_pistol",
        "damage":48,
        "fire_rate":6,
        "range":119,
        "accuracy":66,
        "weight":4.2,
        "value":99
    },
    {
        "name":"10mm_pistol",
        "damage":18,
        "fire_rate":46,
        "range":83,
        "accuracy":60,
        "weight":3.5,
        "value":50   
    },
    {
        "name":"assault_rifle",
        "damage":30,
        "fire_rate":40,
        "range":119,
        "accuracy":72,
        "weight":13.1,
        "value":144
    }
    ];

    $('.item-list a').on('click',function(x){
        $('.item-list a').removeClass('active');
        $(x.currentTarget).addClass('active');
    });

    $('.item-list a').on('mouseenter',function(x){
        var current_item = $(x.currentTarget).attr('class')
        console.log(current_item);

        for(item in weapon){
            if(weapon[item].name==current_item){
                console.log(weapon[item]);

                var container = $('.item-stats');
                container.find('.damage').html(weapon[item].damage);               
                container.find('.fire_rate').html(weapon[item].fire_rate);  
                container.find('.range').html(weapon[item].range);  
                container.find('.accuracy').html(weapon[item].accuracy);  
                container.find('.weight').html(weapon[item].weight);  
                container.find('.value').html(weapon[item].value);  
            }
        }
    });
});