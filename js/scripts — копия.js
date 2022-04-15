$(function(){
  $(window).scroll(function() { 
    var top = $(document).scrollTop();
    if (top > 38) $('.menu_block').addClass('menu_block_2');
    else $('.menu_block').removeClass('menu_block_2');
  });
});

$(document).ready(function() {
  var owl = $('.owl-carousel2');
  owl.owlCarousel({
    margin: 0,
    dots: false,
    autoHeight: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      576: {
        items: 1,
        nav: true
      },
      768: {
        items: 2,
        nav: true
      },
      992: {
        items: 3,
        nav: false
      }
    }
  })
})

$(document).ready(function() {
  var owl = $('.owl-carousel3');
  owl.owlCarousel({
    dots: false,
    nav: false,
    autoHeight: true,
    center: true,
    loop: true,
    responsive: {
      0: {
        items: 2,
        margin: 15
      },
      576: {
        items: 2,
        margin: 15
      },
      768: {
        items: 2,
        margin: 30
      },
      1024: {
        items: 3,
        margin: 30
      },
      1200: {
        items: 4,
        margin: 30
      }
    }
  })
})

// $(document).ready(function() {
  // var owl = $('.owl-carousel4');
  // owl.owlCarousel({
    // margin: 0,
    // dots: false,
    // nav: true,
    // autoHeight: true,
    // loop: true,
    // responsive: {
      // 0: {
        // items: 2
      // },
      // 576: {
        // items: 2
      // },
      // 768: {
        // items: 3
      // },
      // 1024: {
        // items: 4
      // },
      // 1200: {
        // items: 4
      // }
    // }
  // })
// })


$(document).ready(function() {
  var owl = $('.owl-carousel4');
  owl.owlCarousel({
    margin: 0,
    dots: false,
    nav: true,
    autoHeight: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      768: {
        items: 4
      },
      1024: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  })
})


$(document).ready(function(){

  //автоскролл из меню начало
  $('.allocation_info').eq(0).css('background', 'linear-gradient(90deg, #0055D8 0%, #2B7EFF 100%)');
  $('.allocation_info_chart').eq(0).css('background', 'linear-gradient(90deg, #0055D8 0%, #2B7EFF 100%)');
  $('#circle_chart_1 span').css('color', 'white');



  $('.js-scroll-trigger').click(function(e) {
    e.preventDefault();
    var scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top;


     $('html, body').animate({
        scrollTop: scrollTop-150
     }, 500);
  });

  $('.js-scroll-trigger-mobile').click(function(e) {
    e.preventDefault();
    var scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top;
    var scroll_mobile_section = $(this).attr('data-scroll');
    if(scroll_mobile_section == '#section-2'){
      $('html, body').animate({
        scrollTop: scrollTop-190
      }, 500);
    }
    else{
      $('html, body').animate({
        scrollTop: scrollTop-100
      }, 500);
    }
  });
  //автоскролл из меню конец
  
 
  //управления и анимация pie chart начало
  $('.allocation_info_chart').mouseover(function(e){
    $('.allocation_info_chart').css('background', '#1F1F1F'); 
    $(this).css('background', 'linear-gradient(85deg, #0055D8 0%, #2B7EFF 100%)');
    $('.allocation_info_chart .small_data').css('color', '#666666');
    $('.allocation_info_chart .small_data_2').css('color', '#0055D8');
    $('.proc_14_text').css('color', '#0055D8');
    var chart_id = $(this).attr('id');
    $('#'+chart_id+' span').css('color', 'white');
    var chart_id_array = chart_id.split(/_/);
    console.log(chart_id_array[2]);
    $('.my_chart_img_id').attr('src', 'img/allocation_chart/allocation_chart_'+chart_id_array[2]+'.png');


  });
  //управления и анимация pie chart конец


      


  //подсветка для светлой темы начало
  $('.version').click(function(){
    $('.slider_block').toggleClass('slider_block_light');
    $('body').toggleClass('body_light');
    $('.slider_block .row').toggleClass('row_light');
    $('.arts_white_paper').toggleClass('arts_white_paper_light');
    $('.arts_white_paper_span').toggleClass('arts_white_paper_span_light');
    $('.menu_block').toggleClass('menu_block_light');
    $('.menu_block .logo img').attr('src', 'img/logo_dark.svg');
    $('.menu_block ul a').toggleClass('menu_item_color_text');
    $('.menu_block ul .active').toggleClass('menu_item_one_activ');
    $('.menu_block ul li a').toggleClass('menu_items');
    $('.cubes_window').eq(0).toggleClass('cubes_window_1');
    $('.cubes_window').eq(1).toggleClass('cubes_window_2');
  });
  //подсветка для светлой темы конец




  //липкое позиционирование кубиков начало
  function cube_position(cube_elem, cube_offset){
  if($(window).width() < 992){
    $(cube_elem).css('display', 'none');
  }
  else{
    $(cube_elem).css('display', 'block');
  }
  var left_value_for_cube = ($(window).width()-976)/2;
  $(cube_elem).css('left', left_value_for_cube-cube_offset);
  $(cube_elem).css('opacity', 1);

  $(window).resize(function(){
    if($(window).width() < 992){
      $(cube_elem).css('display', 'none');
    }
    else{
      $(cube_elem).css('display', 'block');
    }
    console.log('window width:', ($(window).width()-976)/2);
    var left_value_for_cube = ($(window).width()-976)/2;
    $(cube_elem).css('left', left_value_for_cube-cube_offset);
  });
}  

cube_position('.small_cube', 60);
cube_position('.big_cube', -850);
cube_position('.small_blur_cube', 90);

cube_position('.small_light_cube', -70);
cube_position('.big_light_cube', -950);
cube_position('.small_blur_light_cube', 20);
//липкое позиционирование кубиков конец



//parallax эффект начало
function parallax_effect(the_cube_id){
  var new_value_mouse_x = '';
  var old_value_mouse_x = '';
  var mouse_direction_x = '';
  var new_value_mouse_y = '';
  var old_value_mouse_y = '';
  var mouse_direction_y = '';
  var one_iteration = true;
  left_position_before_offset = '';
  top_position_before_offset = '';
  var selector = '.'+the_cube_id;

  var elem_small_cube = document.querySelector(selector);
  elem_small_cube.onmousemove = function(event){
    if(one_iteration == true){
      old_value_mouse_x = event.pageX;
      old_value_mouse_y = event.pageY; 
      one_iteration = false;
    }
    else{
      new_value_mouse_x = event.pageX;
      new_value_mouse_y = event.pageY;
      if(old_value_mouse_x>new_value_mouse_x){
        mouse_direction_x = 'left';
        old_value_mouse_x = new_value_mouse_x;
      }
      else{
        mouse_direction_x = 'right';
        old_value_mouse_x = new_value_mouse_x;
      }
      if(old_value_mouse_y>new_value_mouse_y){
        mouse_direction_y = 'down';
        old_value_mouse_y = new_value_mouse_y;
      }
      else{
        mouse_direction_y = 'up';
        old_value_mouse_y = new_value_mouse_y;
      }
    }
    if(mouse_direction_x == 'left'){
      left_position_before_offset = $(selector).css('left');
      left_position_before_offset = left_position_before_offset.replace(/[a-z]*$/g, '');
      $(selector).css('left', Number(left_position_before_offset)+1.25);
    }
    else{
      left_position_before_offset = $(selector).css('left');
      left_position_before_offset = left_position_before_offset.replace(/[a-z]*$/g, '');
      $(selector).css('left', Number(left_position_before_offset)-1.25);
    }
    if(mouse_direction_y == 'down'){
      top_position_before_offset = $(selector).css('top');
      
      top_position_before_offset = top_position_before_offset.replace(/[a-z]*$/, '');
      $(selector).css('top', Number(top_position_before_offset)+0.5);
    }
    else{
      top_position_before_offset = $(selector).css('top');
      top_position_before_offset = top_position_before_offset.replace(/[a-z]*$/, '');
      $(selector).css('top', Number(top_position_before_offset)-0.5);
    }
  };
}

parallax_effect('small_cube');
parallax_effect('big_cube');
parallax_effect('small_blur_cube');

parallax_effect('small_light_cube');
parallax_effect('big_light_cube');
parallax_effect('small_blur_light_cube');
//parallax эффект конец



var lang =  {
            0: {0: 'Metaverse', 1: 'Метавселенная'},
            1: {0: 'Tokenomics', 1: 'Токеномика'},
            2: {0: 'Team', 1: 'Команда'},
            3: {0: 'Roadmap', 1: 'Дорожная карта'},
            4: {0: 'Play the games of our universe and earn cryptocurrency', 1: 'Играйте в игры нашей вселенной и зарабатывайте криптовалюту'},
            5: {0: 'Explore it!', 1: 'Исследуй это!'},
            6: {0: 'Active Users', 1: 'Активные пользователи'},
            7: {0: 'Downloads', 1: 'Загрузки'},
            8: {0: 'Countries', 1: 'Страны'},
            9: {0: 'It\'s easy to play and earn with us', 1: 'С нами легко играть и зарабатывать'},
            10: {0: 'All the distinctive gaming features revolving around our ecosystem', 1: 'Все отличительные игровые функции, вращающиеся вокруг нашей экосистемы'},
            11: {0: 'Mobile gaming is always with you', 1: 'Мобильные игры всегда с вами'},
            12: {0: 'Our games are always available on your mobile.', 1: 'Наши игры всегда доступны на вашем мобильном телефоне.'},
            13: {0: 'Earn money by playing', 1: 'Зарабатывай играя'},
            14: {0: 'To start playing it, you don’t need to pay anything or buy an in-game token.', 1: 'Чтобы начать играть в нее, вам не нужно ничего платить или покупать внутриигровой токен.'},
            15: {0: 'Game — first,<br>crypto — later!', 1: 'Игра — сначала,<br>крипта — потом!'},
            16: {0: 'No need to know much about the crypto to start the game. Just download, play and learn after you earn.', 1: 'Не нужно много знать о криптовалюте, чтобы начать игру. Просто скачайте, играйте и учитесь после того, как заработаете.'},
            17: {0: 'Token Allocation', 1: 'Распределение токенов'},
            18: {0: 'vesting schedule', 1: 'график наделения'},
            19: {0: 'Token flow', 1: 'Поток токенов'},
            20: {0: 'User buys IGT token', 1: 'Пользователь покупает токен IGT'},
            21: {0: 'In-game purchase', 1: 'Внутриигровая покупка'},
            22: {0: 'Buying NFT', 1: 'Покупка NFT'},  
            23: {0: 'Development — 10%', 1: 'Развитие — 10%'}, 
            24: {0: 'Liquidity pool — 45%', 1: 'Пул ликвидности — 45%'}, 
            25: {0: 'Tournament pool — 45%', 1: 'Турнирный пул — 45%'}, 
            26: {0: '1 billion', 1: 'Миллиард'}, 
            27: {0: 'To NFT creator — 5%', 1: 'Создателю NFT — 5%'}, 
            28: {0: 'Marketplace transaction fee — 2.5%', 1: 'Комиссия за транзакцию на торговой площадке — 2,5%'}, 
            29: {0: 'Tournament rewards — 2-10%', 1: 'Награды за турниры — 2-10%'}, 
            30: {0: 'Players can earn IGT by fighting on arena battles, winning tournaments, creating NFTs, selling equipment on in-game marketplace and many more.', 1: 'Игроки могут зарабатывать IGT, сражаясь на аренах, побеждая в турнирах, создавая NFT, продавая снаряжение на внутриигровом рынке и многое другое.'}, 
            31: {0: 'Moreover, IGT is used as a governance token of iDos Games Metaverse. Our community can participate in a decentralized decision-making process regarding metaverse and its projects development using their IGTs to vote.', 1: 'Кроме того, IGT используется в качестве токена управления iDos Games Metaverse. Наше сообщество может участвовать в децентрализованном процессе принятия решений, касающихся развития метавселенной и ее проектов, используя свои IGT для голосования.'}, 
            32: {0: 'Development of in-game NFT marketplace', 1: 'Развитие внутриигрового рынка NFT'}, 
            33: {0: 'ShootGun release in the Apple Appstore', 1: 'Релиз ShotGun в Apple App Store'}, 
            34: {0: 'ShootGun release in the Apple Appstore', 1: 'Релиз ShotGun в Apple App Store'}, 
            35: {0: 'Introduction of the NFT token into the game', 1: 'Введение токена NFT в игру'}, 
            36: {0: 'Listing on major crypto exchanges', 1: 'Листинг на основных криптобиржах'}, 
            37: {0: 'Roadmap v2.0', 1: 'Дорожная карта v2.0'}, 
            38: {0: 'core team', 1: 'Основная команда'}, 
            39: {0: 'Our <span>Advisors</span>', 1: 'Наши <span>консультанты</span>'}, 
            40: {0: 'Professor of Interactive Media at University of Southern California, ex-CEO of Square Enix, Head of Publishing at Epic Games, Vice President of Digital Video & Music at Amazon', 1: 'Профессор интерактивных медиа в Университете Южной Калифорнии, бывший генеральный директор Square Enix, руководитель отдела публикаций в Epic Games, вице-президент по цифровому видео и музыке в Amazon'}, 
            41: {0: 'Strategic Advisor, Director of Ethereum competence center', 1: 'Стратегический советник, директор центра компетенций Ethereum'}, 
            42: {0: '2022 iDos Games. All rights reserved.', 1: 'Игры iDos 2022 года. Все права защищены.'}, 
            43: {0: 'Token name', 1: 'Имя токена'}, 
            44: {0: 'Token supply', 1: 'Поставка токена'}, 
            45: {0: 'IGT usecases', 1: 'Варианты использования IGT'},   
            46: {0: '-Governance', 1: '-Управление'},   
            47: {0: '-Staking', 1: '-Ставка'}, 
            48: {0: '-In-game purchase', 1: '-Внутриигровая покупка'}, 
            49: {0: 'Token price', 1: 'Цена токена'}, 
            50: {0: '-Seed: $0.02', 1: '-Семя: $0,02'}, 
            51: {0: '-Private: $0.025', 1: '-Частное: $0,025'}, 
            52: {0: '-Presale: $0.03', 1: '-Предпродажа: $0,03'}, 
            53: {0: '-Public: $0.04', 1: '-Публичный: $0,04'},   
            54: {0: 'Play To Earn, 20%', 1: 'Играй, чтобы заработать, 20%'}, 
            55: {0: 'Pre-seed,', 1: 'Предпосевной,'}, 
            56: {0: 'Team, 16%', 1: 'Команда, 16%'}, 
            57: {0: 'Liquidity, 6.8%', 1: 'Ликвидность, 6,8%'}, 
            58: {0: 'Staking rewards, 15%', 1: 'Награды за стекинг, 15%'}, 
            59: {0: 'Treasury, 5%', 1: 'Казначейство, 5%'}, 
            60: {0: 'Marketing & Advisors, 14%', 1: 'Маркетинг и консультанты, 14%'},
            61: {0: 'Public Sale (IDO), 4%', 1: 'Открытая продажа (IDO), 4%'},
            62: {0: 'Seed, 10%', 1: 'Семя, 10%'},
            63: {0: 'Presale, 2.2%', 1: 'Предпродажа, 2,2%'},
            64: {0: '2.5% (transaction fee)', 1: '2,5% (комиссия за транзакцию)'},
            65: {0: 'NFT creator', 1: 'Создатель NFT'},
            66: {0: 'Buyer 1', 1: 'Покупатель 1'},
            67: {0: 'The creator of NFT will have 97.5% (2.5% transaction fee) from the first sale of his NFTs and also 5% from each subsequent resale of his NFT on our in-game marketplace.', 1: 'Создатель NFT будет получать 97,5% (2,5% комиссии за транзакцию) с первой продажи его NFT, а также 5% с каждой последующей перепродажи его NFT на нашем внутриигровом рынке.'},
            68: {0: '<span>Thus</span>, we create an opportunity not only to play with those weapons and characters that you yourself want, but also to make money on the creation of your own piece of art.', 1: '<span>Таким образом</span>, мы создаем возможность не только играть с тем оружием и персонажами, которых вы сами хотите, но и зарабатывать на создании собственного произведения искусства.'},
            69: {0: 'Co-founder & CTO', 1: 'Соучредитель и технический директор'},
            70: {0: 'Co-founder & CEO', 1: 'Соучредитель и генеральный директор'},
            71: {0: 'CMO', 1: 'директор по маркетингу'},
            72: {0: 'Community Manager', 1: 'Менеджер сообщества'},
            73: {0: 'Graphic Designer', 1: 'Графический дизайнер'},
            74: {0: 'Concept Artist', 1: 'Концепт-художник'},
            75: {0: 'Lead Developer', 1: 'Ведущий разработчик'},
            76: {0: 'Developer', 1: 'Разработчик'},
            77: {0: '3D Modeller', 1: '3D-моделлер'},
            78: {0: 'Advisor', 1: 'Советник'},
            79: {0: '', 1: ''},
            80: {0: '', 1: ''},
            83: {0: 'Released', 1: 'Вышло'},
            84: {0: 'Work in progress', 1: 'Работа в процессе'},
            85: {0: 'NFT marketplace', 1: 'Торговая площадка NFT'},
            86: {0: 'MMORPG open world', 1: 'MMORPG с открытым миром'},
            87: {0: 'Game Bank', 1: 'Хранилище игр'},
            88: {0: 'Close', 1: 'Закрыть'},
          }


console.log($('.slider_block p')[0].innerText);

$('.lang').click(function(e){

  e.preventDefault();

  if($(this).text() == 'Ru'){
    //переводим на русский
    $('.js-scroll-trigger').eq(0).text(lang[0][1]);
    $('.js-scroll-trigger').eq(1).text(lang[1][1]);
    $('.js-scroll-trigger').eq(2).text(lang[2][1]);
    $('.js-scroll-trigger').eq(3).text(lang[3][1]);
    $('.js-scroll-trigger').eq(4).text(lang[0][1]);
    $('.js-scroll-trigger').eq(5).text(lang[1][1]);
    $('.js-scroll-trigger').eq(6).text(lang[2][1]);
    $('.js-scroll-trigger').eq(7).text(lang[3][1]);
    $(this).text('En');
  }
  else{
    //переводим на русский
    $('.js-scroll-trigger').eq(0).text(lang[0][0]);
    $('.js-scroll-trigger').eq(1).text(lang[1][0]);
    $('.js-scroll-trigger').eq(2).text(lang[2][0]);
    $('.js-scroll-trigger').eq(3).text(lang[3][0]);
    $('.js-scroll-trigger').eq(4).text(lang[0][0]);
    $('.js-scroll-trigger').eq(5).text(lang[1][0]);
    $('.js-scroll-trigger').eq(6).text(lang[2][0]);
    $('.js-scroll-trigger').eq(7).text(lang[3][0]);
    $(this).text('Ru');
  }

});


});