

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

function myInfo(){
  var city = document.getElementById("city").value;
  document.getElementById("demo").innerHTML = city;

  var budget = document.getElementById("budget").value;
  document.getElementById("demo1").innerHTML = budget;

  getResturants(city,budget);

  var relax = document.getElementById("relax").value;
  document.getElementById("demo2").innerHTML = relax;

  var thrill = document.getElementById("thrill").value;
  document.getElementById("demo3").innerHTML = thrill;

  var adventure = document.getElementById("adventure").value;
  document.getElementById("demo4").innerHTML = adventure;

  var historical = document.getElementById("historical").value;
  document.getElementById("demo5").innerHTML = historical;

  getActivities(city, budget,relax,thrill,adventure,historical);

  var start1 = document.getElementById("start1").value;
  document.getElementById("demo6").innerHTML = start1;

  var end1 = document.getElementById("end1").value;
  document.getElementById("demo7").innerHTML = end1;
}

function getResturants(city, budget){
  if (city=="Chicago, IL"){
    if (budget=="$0-$500"){
      document.getElementById("restaurant1").innerHTML ="Portillos"
      document.getElementById("restaurant2").innerHTML ="Epic Burger"
      document.getElementById("restaurant3").innerHTML ="Velvet Taco"
    }
    if (budget=="$500-$1,000"){
      document.getElementById("restaurant1").innerHTML ="The Purple Pig"
      document.getElementById("restaurant2").innerHTML ="The Hampton Social"
      document.getElementById("restaurant3").innerHTML ="Frontera Grill"
    }
    if (budget=="$1,000+"){
      document.getElementById("restaurant1").innerHTML ="The Signature Rooom"
      document.getElementById("restaurant2").innerHTML ="The Capital Grill"
      document.getElementById("restaurant3").innerHTML ="Shanghai Terrace"
    }
  }
  if (city=="Orlando, FL"){
    if (budget=="$0-$500"){
      document.getElementById("restaurant1").innerHTML ="Krispy Kreme"
      document.getElementById("restaurant2").innerHTML ="Pineapple Lanair"
      document.getElementById("restaurant3").innerHTML ="Border Grill Fresh Mex"
    }
    if (budget=="$500-$1,000"){
      document.getElementById("restaurant1").innerHTML ="Keke's Breakfast Cafe"
      document.getElementById("restaurant2").innerHTML ="The Sanctum Cafe"
      document.getElementById("restaurant3").innerHTML ="Hempishere Restaurant"
    }
    if (budget=="$1,000+"){
      document.getElementById("restaurant1").innerHTML ="The Melting Pot"
      document.getElementById("restaurant2").innerHTML ="Norman's"
      document.getElementById("restaurant3").innerHTML ="Kadence"
    }
  }
}

function getActivities(city, budget,relax,thrill,adventure,historical){
  if (city=="Chicago, IL"){
    if (relax=="yes"){
      document.getElementById("activity1").innerHTML ="The Chicago Theatre"
      document.getElementById("activity2").innerHTML ="The Peninsula Spa"
      document.getElementById("activity3").innerHTML ="Oxygen Spa"
    } else {
      document.getElementById("activity1").innerHTML =""
      document.getElementById("activity2").innerHTML =""
      document.getElementById("activity3").innerHTML =""
    }

    if (thrill=="yes"){
      document.getElementById("activity4").innerHTML ="Six Flags Great America"
      document.getElementById("activity5").innerHTML ="IFly"
      document.getElementById("activity6").innerHTML ="13th Floor Haunted House"
    }
    if (adventure=="yes"){
      document.getElementById("activity7").innerHTML ="Starved Rock"
      document.getElementById("activity8").innerHTML ="Lake Michigan"
      document.getElementById("activity9").innerHTML ="Millenium Park"
    }
    if (historical=="yes"){
      document.getElementById("activity10").innerHTML ="Science and Industry Museum"
      document.getElementById("activity11").innerHTML ="Art Institute Museum"
      document.getElementById("activity12").innerHTML ="The Field Museum"
    }
  }
  if (city=="Orlando, FL"){
    if (relax=="yes"){
      document.getElementById("activity1").innerHTML ="The Ritz-Carlton Spa"
      document.getElementById("activity2").innerHTML ="Orlando Float and Massage"
      document.getElementById("activity3").innerHTML ="Serenity Spa"
    }
    if (thrill=="yes"){
      document.getElementById("activity1").innerHTML ="Universal Studios"
      document.getElementById("activity2").innerHTML ="Disney World"
      document.getElementById("activity3").innerHTML ="Sea World"
    }
    if (adventure=="yes"){
      document.getElementById("activity1").innerHTML ="Discovery Cove"
      document.getElementById("activity2").innerHTML ="Sea Life"
      document.getElementById("activity3").innerHTML ="Daytona Beach"
    }
    if (historical=="yes"){
      document.getElementById("activity1").innerHTML ="Titanic: The Artifact Exhibition"
      document.getElementById("activity2").innerHTML ="The Holocaust Museum"
      document.getElementById("activity3").innerHTML ="The Holy Land Experience"
    }
  }
}
//   if city=="Chicago, IL"{
//     if budget=="$0-$500"{
//       document.getElementById("restaurant1").innerHTML ="Portillos"
//       document.getElementById("restaurant2").innerHTML ="Epic Burger"
//       document.getElementById("restaurant3").innerHTML ="Velvet Taco"
//     }
//     if budget=="$500-$1,000"{
//       document.getElementById("restaurant1").innerHTML ="The Purple Pig"
//       document.getElementById("restaurant2").innerHTML ="The Hampton Social"
//       document.getElementById("restaurant3").innerHTML ="Frontera Grill"
//     }
//     if budget=="$1,000+"{
//       document.getElementById("restaurant1").innerHTML ="The Signature Rooom"
//       document.getElementById("restaurant2").innerHTML ="The Capital Grill"
//       document.getElementById("restaurant3").innerHTML ="Shanghai Terrace"
//     }
//     if relax=="yes"{
//       document.getElementById("activity1").innerHTML ="The Chicago Theatre"
//       document.getElementById("activity2").innerHTML ="The Peninsula Spa"
//       document.getElementById("activity3").innerHTML ="Oxygen Spa"
//     }
//     if thrill=="yes"{
//       document.getElementById("activity1").innerHTML ="Six Flags Great America""
//       document.getElementById("activity2").innerHTML ="IFly"
//       document.getElementById("activity3").innerHTML ="13th Floor Haunted House"
//     }
//     if adventure=="yes"{
//       document.getElementById("activity1").innerHTML ="Starved Rock"
//       document.getElementById("activity2").innerHTML ="Lake Michigan"
//       document.getElementById("activity3").innerHTML ="Millenium Park"
//     }
//     if historical=="yes"{
//       document.getElementById("activity1").innerHTML ="Science and Industry Museum"
//       document.getElementById("activity2").innerHTML ="Art Institute Museum"
//       document.getElementById("activity3").innerHTML ="The Field Museum"
//     }
//     if city=="Chicago, IL"{
//       if budget=="$0-$500"{
//         document.getElementById("restaurant1").innerHTML ="Portillos"
//         document.getElementById("restaurant2").innerHTML ="Epic Burger"
//         document.getElementById("restaurant3").innerHTML ="Velvet Taco"
//       }
//       if budget=="$500-$1,000"{
//         document.getElementById("restaurant1").innerHTML ="The Purple Pig"
//         document.getElementById("restaurant2").innerHTML ="The Hampton Social"
//         document.getElementById("restaurant3").innerHTML ="Frontera Grill"
//       }
//       if budget=="$1,000+"{
//         document.getElementById("restaurant1").innerHTML ="The Signature Rooom"
//         document.getElementById("restaurant2").innerHTML ="The Capital Grill"
//         document.getElementById("restaurant3").innerHTML ="Shanghai Terrace"
//       }
//       if relax=="yes"{
//         document.getElementById("activity1").innerHTML ="The Chicago Theatre"
//         document.getElementById("activity2").innerHTML ="The Peninsula Spa"
//         document.getElementById("activity3").innerHTML ="Oxygen Spa"
//       }
//       if thrill=="yes"{
//         document.getElementById("activity1").innerHTML ="Six Flags Great America""
//         document.getElementById("activity2").innerHTML ="IFly"
//         document.getElementById("activity3").innerHTML ="13th Floor Haunted House"
//       }
//       if adventure=="yes"{
//         document.getElementById("activity1").innerHTML ="Starved Rock"
//         document.getElementById("activity2").innerHTML ="Lake Michigan"
//         document.getElementById("activity3").innerHTML ="Millenium Park"
//       }
//       if historical=="yes"{
//         document.getElementById("activity1").innerHTML ="Science and Industry Museum"
//         document.getElementById("activity2").innerHTML ="Art Institute Museum"
//         document.getElementById("activity3").innerHTML ="The Field Museum"
//       }
//     }
// }
  //var breakfast = document.getElementById("breakfast").value;
  //document.getElementById("demo6").innerHTML = breakfast;

  //var lunch = document.getElementById("lunch").value;
  //document.getElementById("demo7").innerHTML = lunch;

  //var dinner = document.getElementById("dinner").value;
  //document.getElementById("demo8").innerHTML = dinner;
