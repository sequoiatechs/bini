//(function(){
//    var gem = {
//        title: 'How do I become featured?',
//        paragraph: 'Periodically, we announce different ways to become featured in the "Discover" tab. Currently, we are featuring our first set of influencers whi have joined our platform.'
//        
//    }
//    var app = angular.module('biniSite', []);
//    
//    app.controller('BiniController', function(){
//        this.information = gem;
//    });
//});

jQuery(function(){
    
    jQuery(".linksmenu").each(function(){
        
        jQuery(this).on("click",function(){
                jQuery(".linksmenu").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).find("a").first().click();
        });
    });
    
});
