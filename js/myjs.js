$(document).ready(function() {
  $("html,body").stop();

  /*
    nav bar click event
    for move in page
  */
  $("#nav_logo").click(function(){
    $("html,body").animate({"scrollTop":$("#page_profile").offset().top});
  })

  $("#nav_link_profile").click(function(){
    $("html,body").animate({"scrollTop":$("#page_profile").offset().top});
    if(!$(this).hasClass("active")){
              $("nav .active").removeClass("active");
              $(this).addClass("active");
      }
    else{
        return false;//this prevents flicker
    }
  })

  $("#nav_link_skill").click(function(){
    $("html,body").animate({"scrollTop":$("#page_skill").offset().top});
    if(!$(this).hasClass("active")){
              $("nav .active").removeClass("active");
              $(this).addClass("active");
      }
    else{
        return false;//this prevents flicker
    }
  })
  $("#nav_link_project").click(function(){
    $("html,body").animate({"scrollTop":$("#page_project").offset().top});
    if(!$(this).hasClass("active")){
              $("nav .active").removeClass("active");
              $(this).addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  })
})

/*scoll*/
$(window).scroll(function(){

  //set page by id
  page_profile = document.getElementById("page_profile");
  page_skill = document.getElementById("page_skill");
  page_project = document.getElementById("page_project");

  /*scoll skill bar animate*/
  var skill=new Array(8);

  page_skill = document.getElementById("page_skill");
  body = document.getElementById("skill_list_body");

  //Animate listen
  //get bar id
  skill[0] = document.getElementById("bar-skill-html");
  skill[1] = document.getElementById("bar-skill-css");
  skill[2] = document.getElementById("bar-skill-js");
  skill[3] = document.getElementById("bar-skill-jq");
  skill[4] = document.getElementById("bar-skill-bs");
  skill[5] = document.getElementById("bar-skill-php");
  skill[6] = document.getElementById("bar-skill-laravel");
  skill[7] = document.getElementById("bar-skill-mysql");
  skill[8] = document.getElementById("bar-skill-ps");
  skill[9] = document.getElementById("bar-skill-ai");

  //if(up to dwon or down to up)
  if($(window).scrollTop()+$(window).height() >= page_skill.offsetTop+body.offsetTop && $(window).scrollTop() < page_skill.offsetTop+page_skill.offsetHeight){
    for(i=0;i<10;i++){
      animate_bar(skill[i]);
    }
  }
  else{
    for(i=0;i<10;i++){
      animate_bar_clear(skill[i]);
    }
  }

  /*Nav li active listen*/

  if($(window).scrollTop()+$(window).height()/2 > page_skill.offsetTop && $(window).scrollTop()+$(window).height()/2 <= page_skill.offsetTop+page_skill.offsetHeight){
    if(!$("#nav_link_skill").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav_link_skill").addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  }
  else if($(window).scrollTop()+$(window).height()/2 > page_project.offsetTop && $(window).scrollTop()+$(window).height()/2 <= page_project.offsetTop+page_project.offsetHeight) {
    if(!$("#nav_link_project").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav_link_project").addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  }
  else{
    if(!$("#nav_link_profile").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav_link_profile").addClass("active");
      }
    else{
        return false;//this prevents flicker
    }
  }
})

function animate_bar(skill){
  skill.style.animation = "animate-bar 3s"; //animate play
}

function animate_bar_clear(skill){
  //animate reset
  skill.style.animation = "";
}
