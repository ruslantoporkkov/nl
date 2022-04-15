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
  window.chart_id = 'circle_chart_1';



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
    window.chart_id = chart_id;
    $('#'+chart_id+' div').css('color', 'white');
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
              4: {0: 'Play the games in our metaverse and earn cryptocurrency', 1: 'Играйте в игры в нашей метавселенной и зарабатывайте криптовалюту'},
              5: {0: 'Explore it!', 1: 'Исследуй это!'},
              6: {0: 'Active Users', 1: 'Активные пользователи'},
              7: {0: 'Downloads', 1: 'Загрузки'},
              8: {0: 'Countries', 1: 'Страны'},
              9: {0: "It\'s easy to <span>play and earn with us</span>", 1: "С нами легко <span>играть и зарабатывать</span>"},
              10: {0: 'All the distinctive gaming features revolving around our ecosystem', 1: 'Все отличительные игровые функции, вращающиеся вокруг нашей экосистемы'},
              11: {0: 'Mobile gaming is<br>always with you', 1: 'Мобильный гейминг<br>всегда с вами'},
              12: {0: 'Our games are always available on your mobile.', 1: 'Наши игры всегда доступны на вашем мобильном телефоне.'},
              13: {0: 'Earn money<br>by playing', 1: 'Зарабатывай<br>играя'},
              14: {0: 'To start playing it, you don’t need to pay anything or buy an in-game token.', 1: 'Чтобы начать играть в наши игры, вам не нужно ничего платить или покупать внутриигровой токен.'},
              15: {0: 'Game — first, crypto — later!', 1: 'Сначала — игра, потом — крипта!'},
              16: {0: 'No need to know much about the crypto to start the game. Just download, play and learn after you earn.', 1: 'Не нужно много знать о криптовалюте, чтобы начать играть. Просто скачайте, играйте и обучайтесь после того, как заработаете.'},
              17: {0: 'Token Allocation', 1: 'Распределение токенов'},
              18: {0: 'vesting schedule', 1: 'график раздачи'},
              19: {0: 'Token flow', 1: 'Движение токенов'},
              20: {0: 'User buys IGT token', 1: 'Пользователь покупает токен IGT'},
              21: {0: 'In-game purchase', 1: 'Внутриигровая покупка'},
              22: {0: 'Buying NFT', 1: 'Покупка NFT'},  
              23: {0: 'Development — 10%', 1: 'Развитие — 10%'}, 
              24: {0: 'Liquidity pool — 45%', 1: 'Пул ликвидности — 45%'}, 
              25: {0: 'Tournament pool — 45%', 1: 'Турнирный пул — 45%'}, 
              26: {0: '1 billion', 1: '1 Миллиард'}, 
              27: {0: 'To NFT creator — 5%', 1: 'Создателю NFT — 5%'}, 
              28: {0: 'Marketplace transaction fee — 2.5%', 1: 'Комиссия за транзакцию на торговой площадке — 2,5%'}, 
              29: {0: 'Tournament rewards — 2-10%', 1: 'Награды за турниры — 2-10%'}, 
              30: {0: 'Players can earn IGT by fighting on arena battles, winning tournaments, creating NFTs, selling equipment on in-game marketplace and many more.', 1: 'Игроки могут зарабатывать IGT, сражаясь на аренах, побеждая в турнирах, создавая NFT, продавая снаряжение на внутриигровом рынке и многое другое.'}, 
              31: {0: '<span>Moreover</span>, IGT is used as a governance token of iDos Games Metaverse. Our community can participate in a decentralized decision-making process regarding metaverse and its projects development using their IGTs to vote.', 1: '<span>Кроме того</span>, IGT используется в качестве токена управления iDos Games Metaverse. Наше сообщество может участвовать в децентрализованном процессе принятия решений, касающихся развития метавселенной и ее проектов, используя свои IGT для голосования.'}, 
              32: {0: 'Development of in-game NFT marketplace', 1: 'Разработка внутриигровой торговой NFT площадки'}, 
              33: {0: 'ShootGun release in the Apple Appstore', 1: 'Релиз ShootGun в Apple App Store'}, 
              34: {0: 'ShootGun release in the Apple Appstore', 1: 'Релиз ShootGun в Apple App Store'}, 
              35: {0: 'Introduction of the NFT token into the game', 1: 'Введение токена NFT в игру'}, 
              36: {0: 'Listing on major crypto exchanges', 1: 'Листинг на основных криптобиржах'}, 
              37: {0: 'Roadmap v2.0', 1: 'Дорожная карта v2.0'}, 
              38: {0: 'Core <span>team</span>', 1: 'Основная <span>команда</span>'}, 
              39: {0: 'Our <span>Advisors</span>', 1: 'Наши <span>эдвайзеры</span>'}, 
              40: {0: 'Professor of Interactive Media at University of Southern California, ex-CEO of Square Enix, Head of Publishing at Epic Games, Vice President of Digital Video & Music at Amazon', 1: 'Профессор интерактивных медиа в Университете Южной Калифорнии, бывший генеральный директор Square Enix, руководитель отдела публикаций в Epic Games, вице-президент по цифровому видео и музыке в Amazon'}, 
              41: {0: 'Strategic Advisor, Director of Ethereum competence center', 1: 'Стратегический советник, директор центра компетенций Ethereum'}, 
              42: {0: '2022 iDos Games. All rights reserved.', 1: 'iDos Games 2022 года. Все права защищены.'}, 
              43: {0: 'Token name', 1: 'Имя токена'}, 
              44: {0: 'Token supply', 1: 'Общее предложение токена'}, 
              45: {0: 'IGT usecases', 1: 'Варианты использования IGT'},   
              46: {0: '-Governance', 1: '-Управление'},   
              47: {0: '-Staking', 1: '-Стейкинг'}, 
              48: {0: '-In-game purchase', 1: '-Внутриигровая покупка'}, 
              49: {0: 'Token price', 1: 'Цена токена'}, 
              50: {0: '-Pre-seed: $0.006', 1: '-Пред-посевной: $0,006'}, 
              51: {0: '-Seed: $0.007', 1: '-Посевной: $0,007'}, 
              52: {0: '-Presale: $0.009', 1: '-Предпродажа: $0,009'}, 
              53: {0: '-Public: $0.01', 1: '-Публичный: $0,01'},   
              54: {0: 'Play To Earn,<span class="proc_14_text" style="margin-left: 5px;">20%</span>', 1: 'Играй, чтобы заработать,<span class="proc_14_text" style="margin-left: 5px;">20%</span>'}, 
              55: {0: 'Pre-seed,', 1: 'Пред-посевной,'}, 
              56: {0: 'Team,', 1: 'Команда,'}, 
              57: {0: 'Liquidity,', 1: 'Ликвидность,'}, 
              58: {0: 'Staking rewards,<span class="proc_14_text">15%</span>', 1: 'Награды за стейкинг,<span class="proc_14_text">15%</span>'}, 
              59: {0: 'Treasury,', 1: 'Казна,'}, 
              60: {0: 'Marketing & Advisors,<span class="proc_14_text">14%</span>', 1: 'Маркетинг и эдвайзеры,<span class="proc_14_text">14%</span>'},
              61: {0: 'Public Sale (IDO),<span class="proc_14_text">4%</span>', 1: 'Публичная продажа (IDO),<span class="proc_14_text">4%</span>'},
              62: {0: 'Seed,', 1: 'Посевной,'},
              63: {0: 'Presale,', 1: 'Предпродажа,'},
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
              78: {0: 'Advisor', 1: 'Эдвайзер'},
              79: {0: 'White Paper', 1: 'Белая бумага'},
              80: {0: 'Metaverse <span>gameplay</span>', 1: 'Геймплей <span>метавселенной</span>'},
              81: {0: 'Above', 1: 'Наверх'},
              82: {0: 'IGT contract adress (BSC) <a href="https://bscscan.com/token/0xc884cf91d8b2283fabcdf899a3210746ec660197">0xc884cf91d8b2283fabcdf899a3210746ec660197</a>', 1: 'Адрес контракта IGT (BSC)  <a href="https://bscscan.com/token/0xc884cf91d8b2283fabcdf899a3210746ec660197">0xc884cf91d8b2283fabcdf899a3210746ec660197</a>'},
              83: {0: 'Released', 1: 'Вышло'},
              84: {0: 'Work in progress', 1: 'В процессе разработки'},
              85: {0: 'NFT marketplace', 1: 'Торговая площадка NFT'},
              86: {0: 'MMORPG open world', 1: 'MMORPG с открытым миром'},
              87: {0: 'Game Bank', 1: 'Игровой Банк'},
              88: {0: 'Close', 1: 'Закрыть'},
              89: {0: 'TGE unlock %', 1: 'Разблокировано %'},
              90: {0: '', 1: ''},
            }

  $('.lang').click(function(e){

    e.preventDefault();

    if($(this).text() == 'Ru'){
      //переводим на русский
      $('.lang_text_contract').html(lang[82][1]);
      $('.js-scroll-trigger').eq(0).text(lang[0][1]);
      $('.js-scroll-trigger').eq(1).text(lang[1][1]);
      $('.js-scroll-trigger').eq(2).text(lang[2][1]);
      $('.js-scroll-trigger').eq(3).text(lang[3][1]);
      $('.js-scroll-trigger').eq(4).text(lang[0][1]);
      $('.js-scroll-trigger').eq(5).text(lang[1][1]);
      $('.js-scroll-trigger').eq(6).text(lang[2][1]);
      $('.js-scroll-trigger').eq(7).text(lang[3][1]);
      $('.js-scroll-trigger-mobile').eq(0).text(lang[0][1]);
      $('.js-scroll-trigger-mobile').eq(1).text(lang[1][1]);
      $('.js-scroll-trigger-mobile').eq(2).text(lang[2][1]);
      $('.js-scroll-trigger-mobile').eq(3).text(lang[3][1]);
      $('.js-scroll-trigger-mobile').eq(4).text(lang[0][1]);
      $('.js-scroll-trigger-mobile').eq(5).text(lang[1][1]);
      $('.js-scroll-trigger-mobile').eq(6).text(lang[2][1]);
      $('.js-scroll-trigger-mobile').eq(7).text(lang[3][1]);
      $('.lang_text_5').text(lang[5][1]);
      $('.lang_text_1').text(lang[4][1]);
      $('.lang_text_2').text(lang[6][1]);
      $('.lang_text_3').text(lang[7][1]);
      $('.lang_text_4').text(lang[8][1]);
      $('.lang_text_6').text(lang[79][1]);
      $('.lang_text_7').html(lang[9][1]);
      $('.lang_text_8').html(lang[10][1]);
      $('.lang_text_9').html(lang[11][1]);
      $('.lang_text_10').html(lang[12][1]);
      $('.lang_text_11').html(lang[13][1]);
      $('.lang_text_12').html(lang[14][1]);
      $('.lang_text_13').html(lang[15][1]);
      $('.lang_text_14').html(lang[16][1]);
      $('.lang_text_15').html(lang[80][1]);
      $('.lang_text_16').html(lang[17][1]);
      $('.lang_text_17').html(lang[18][1]);
      $('.lang_text_18').html(lang[19][1]);
      $('.lang_text_19').html(lang[1][1]);
      $('.lang_text_20').html(lang[43][1]);
      $('.lang_text_22').html(lang[44][1]);
      $('.lang_text_23').html(lang[26][1]);
      $('.lang_text_24').html(lang[89][1]);
      $('.lang_text_25').html(lang[45][1]);
      $('.lang_text_26').html(lang[46][1]);
      $('.lang_text_27').html(lang[47][1]);
      $('.lang_text_28').html(lang[48][1]);
      $('.lang_text_29').html(lang[49][1]);
      $('.lang_text_30').html(lang[50][1]);
      $('.lang_text_31').html(lang[51][1]);
      $('.lang_text_32').html(lang[52][1]);
      $('.lang_text_33').html(lang[53][1]);
      $('.lang_text_34').html(lang[54][1]);
      $('.lang_text_35').html(lang[55][1]);
      $('.lang_text_36').html(lang[56][1]);
      $('.lang_text_37').html(lang[57][1]);
      $('.lang_text_38').html(lang[58][1]);
      $('.lang_text_39').html(lang[59][1]);
      $('.lang_text_40').html(lang[60][1]);
      $('.lang_text_41').html(lang[61][1]);
      $('.lang_text_42').html(lang[62][1]);
      $('.lang_text_43').html(lang[63][1]);
      $('.lang_text_44').html(lang[67][1]);
      $('.lang_text_45').html(lang[68][1]);
      $('.lang_text_46').html(lang[30][1]);
      $('.lang_text_47').html(lang[31][1]);
      $('.lang_text_48').html(lang[3][1]);
      $('.lang_text_49').html(lang[38][1]);
      $('.lang_text_50').html(lang[69][1]);
      $('.lang_text_51').html('Айдос');
      $('.lang_text_52').html(lang[70][1]);
      $('.lang_text_53').html('Темерлан');
      $('.lang_text_54').html(lang[71][1]);
      $('.lang_text_55').html('Азат');
      $('.lang_text_56').html(lang[72][1]);
      $('.lang_text_57').html('Алексей');
      $('.lang_text_58').html(lang[73][1]);
      $('.lang_text_59').html('Бекс');
      $('.lang_text_60').html(lang[74][1]);
      $('.lang_text_61').html('Сергей');
      $('.lang_text_62').html(lang[75][1]);
      $('.lang_text_63').html('Андрей');
      $('.lang_text_64').html(lang[76][1]);
      $('.lang_text_65').html('Рауль');
      $('.lang_text_66').html(lang[77][1]);
      $('.lang_text_67').html('Алишер');
      $('.lang_text_68').html(lang[39][1]);
      $('.lang_text_69').html(lang[78][1]);
      $('.lang_text_70').html('Майк Фишер');
      $('.lang_text_71').html(lang[40][1]);
      $('.lang_text_72').html(lang[78][1]);
      $('.lang_text_73').html('Владислав Мартынов');
      $('.lang_text_74').html(lang[41][1]);
      $('.lang_text_75').html(lang[42][1]);
      $('.lang_text_76').html(lang[81][1]);
      $('.lang_text_77').html(lang[83][1]);
      $('.lang_text_78').html(lang[84][1]);
      $('.lang_text_79').html(lang[88][1]);
      $('.lang_text_80').html(lang[85][1]);
      $('.lang_text_81').html(lang[86][1]);
      $('.lang_text_82').html(lang[87][1]);
      $('.lang_text_83').html(lang[88][1]);
      $('.diagram_1').attr('src', 'img/rus_diagram/schedule_diagram_rus.svg');
      $('.diagram_2').attr('src', 'img/rus_diagram/roadmap_diagram_rus.svg');
      $('.diagram_3').attr('src', 'img/rus_diagram/token_flow_diagram_rus.svg');
      $('.diagram_mobile_1').attr('src', 'img/rus_diagram/shedule_diagram_rus_mobile.svg');
      $('.diagram_mobile_2').attr('src', 'img/rus_diagram/token_flow_diagram_rus_mobile.svg');
      $('.diagram_mobile_3').attr('src', 'img/rus_diagram/roadmap_diagram_rus_mobile.svg');
      //корректируем стили при смене языков----------------------------------------
      window.lang_elem_pressed = true;
      $('.block_2 .zag h1').attr('style', 'font-family: Carson !important;');
      $('.block_3 .zag h1').attr('style', 'font-family: Carson !important;');
      $('.block_4 .zag').attr('style', 'font-family: Carson !important;');
      $('.block_5 h1').attr('style', 'font-family: Carson !important;');
      //адаптивная сетка при переключении
      if($(window).width()<1200 && window.lang_elem_pressed==true){
        $('.block_2 .zag h1').css('font-size', '66px');
        $('.block_2 .zag p').css('line-height', '24px');
        $('.block_5 h1').css('font-size', '55px');
        $('.block_4 .nav button').attr('style', 'margin-right: 0px !important; padding: 10px 20px !important;');
         
      }
      else{
        $('.block_2 .zag h1').css('font-size', '66px');
        $('.block_2 .zag p').css('line-height', '24px');
        $('.block_5 h1').css('font-size', '72px');
        $('.block_4 .nav button').attr('style', 'margin-right: 0px !important; padding: 10px 20px !important;');
      }
      if($(window).width()<992 && window.lang_elem_pressed==true){
        $('.block_2 .zag h1').css('font-size', '58px');

        //alert('mobile version and lang mode');
      }
      if($(window).width()<768 && window.lang_elem_pressed==true){
        $('.block_2 .zag h1').css('font-size', '38px');
      }
      if($(window).width()<576 && window.lang_elem_pressed==true){

      }
      
      $('#'+window.chart_id+' span').css('color', 'white');
      $(this).text('En');
    }
    else{
      //переводим на русский
      $('.lang_text_contract').html(lang[82][0]);
      $('.js-scroll-trigger').eq(0).text(lang[0][0]);
      $('.js-scroll-trigger').eq(1).text(lang[1][0]);
      $('.js-scroll-trigger').eq(2).text(lang[2][0]);
      $('.js-scroll-trigger').eq(3).text(lang[3][0]);
      $('.js-scroll-trigger').eq(4).text(lang[0][0]);
      $('.js-scroll-trigger').eq(5).text(lang[1][0]);
      $('.js-scroll-trigger').eq(6).text(lang[2][0]);
      $('.js-scroll-trigger').eq(7).text(lang[3][0]);
      $('.js-scroll-trigger-mobile').eq(0).text(lang[0][0]);
      $('.js-scroll-trigger-mobile').eq(1).text(lang[1][0]);
      $('.js-scroll-trigger-mobile').eq(2).text(lang[2][0]);
      $('.js-scroll-trigger-mobile').eq(3).text(lang[3][0]);
      $('.js-scroll-trigger-mobile').eq(4).text(lang[0][0]);
      $('.js-scroll-trigger-mobile').eq(5).text(lang[1][0]);
      $('.js-scroll-trigger-mobile').eq(6).text(lang[2][0]);
      $('.js-scroll-trigger-mobile').eq(7).text(lang[3][0]);
      $('.lang_text_5').text(lang[5][0]);
      $('.lang_text_1').text(lang[4][0]);
      $('.lang_text_2').text(lang[6][0]);
      $('.lang_text_3').text(lang[7][0]);
      $('.lang_text_4').text(lang[8][0]);
      $('.lang_text_6').text(lang[79][0]);
      $('.lang_text_7').html(lang[9][0]);
      $('.lang_text_8').html(lang[10][0]);
      $('.lang_text_9').html(lang[11][0]);
      $('.lang_text_10').html(lang[12][0]);
      $('.lang_text_11').html(lang[13][0]);
      $('.lang_text_12').html(lang[14][0]);
      $('.lang_text_13').html(lang[15][0]);
      $('.lang_text_14').html(lang[16][0]);
      $('.lang_text_15').html(lang[80][0]);
      $('.lang_text_16').html(lang[17][0]);
      $('.lang_text_17').html(lang[18][0]);
      $('.lang_text_18').html(lang[19][0]);
      $('.lang_text_19').html(lang[1][0]);
      $('.lang_text_20').html(lang[43][0]);
      $('.lang_text_22').html(lang[44][0]);
      $('.lang_text_23').html(lang[26][0]);
      $('.lang_text_24').html(lang[89][0]);
      $('.lang_text_25').html(lang[45][0]);
      $('.lang_text_26').html(lang[46][0]);
      $('.lang_text_27').html(lang[47][0]);
      $('.lang_text_28').html(lang[48][0]);
      $('.lang_text_29').html(lang[49][0]);
      $('.lang_text_30').html(lang[50][0]);
      $('.lang_text_31').html(lang[51][0]);
      $('.lang_text_32').html(lang[52][0]);
      $('.lang_text_33').html(lang[53][0]);
      $('.lang_text_34').html(lang[54][0]);
      $('.lang_text_35').html(lang[55][0]);
      $('.lang_text_36').html(lang[56][0]);
      $('.lang_text_37').html(lang[57][0]);
      $('.lang_text_38').html(lang[58][0]);
      $('.lang_text_39').html(lang[59][0]);
      $('.lang_text_40').html(lang[60][0]);
      $('.lang_text_41').html(lang[61][0]);
      $('.lang_text_42').html(lang[62][0]);
      $('.lang_text_43').html(lang[63][0]);
      $('.lang_text_44').html(lang[67][0]);
      $('.lang_text_45').html(lang[68][0]);
      $('.lang_text_46').html(lang[30][0]);
      $('.lang_text_47').html(lang[31][0]);
      $('.lang_text_48').html(lang[3][0]);
      $('.lang_text_49').html(lang[38][0]);
      $('.lang_text_50').html(lang[69][0]);
      $('.lang_text_51').html('Aidos');
      $('.lang_text_52').html(lang[70][0]);
      $('.lang_text_53').html('Temerlan');
      $('.lang_text_54').html(lang[71][0]);
      $('.lang_text_55').html('Azat');
      $('.lang_text_56').html(lang[72][0]);
      $('.lang_text_57').html('Alexei');
      $('.lang_text_58').html(lang[73][0]);
      $('.lang_text_59').html('Bex');
      $('.lang_text_60').html(lang[74][0]);
      $('.lang_text_61').html('Sergey');
      $('.lang_text_62').html(lang[75][0]);
      $('.lang_text_63').html('Andrey');
      $('.lang_text_64').html(lang[76][0]);
      $('.lang_text_65').html('Raul\'');
      $('.lang_text_66').html(lang[77][0]);
      $('.lang_text_67').html('Alisher');
      $('.lang_text_68').html(lang[39][0]);
      $('.lang_text_69').html(lang[78][0]);
      $('.lang_text_70').html('Mike Fischer');
      $('.lang_text_71').html(lang[40][0]);
      $('.lang_text_72').html(lang[78][0]);
      $('.lang_text_73').html('Vladislav Martynov');
      $('.lang_text_74').html(lang[41][0]);
      $('.lang_text_75').html(lang[42][0]);
      $('.lang_text_76').html(lang[81][0]);
      $('.lang_text_77').html(lang[83][0]);
      $('.lang_text_78').html(lang[84][0]);
      $('.lang_text_79').html(lang[88][0]);
      $('.lang_text_80').html(lang[85][0]);
      $('.lang_text_81').html(lang[86][0]);
      $('.lang_text_82').html(lang[87][0]);
      $('.lang_text_83').html(lang[88][0]);
      $('.diagram_1').attr('src', 'img/tab2.svg');
      $('.diagram_2').attr('src', 'img/roadmap.svg');
      $('.diagram_3').attr('src', 'img/tab3.svg');
      $('.diagram_mobile_1').attr('src', 'img/tab2_2.svg');
      $('.diagram_mobile_2').attr('src', 'img/tab3_2.svg');
      $('.diagram_mobile_3').attr('src', 'img/roadmap2.svg');
      //корректируем стили при смене языков----------------------------------------
      $('.block_5 h1').attr('style', '');
      window.lang_elem_pressed = false;
      $('.block_2 .zag h1').attr('style', '');
      $('.block_4 .nav button').attr('style', '');
      $('.block_4 .zag').attr('style', '');
      $('#'+window.chart_id+' span').css('color', 'white');
      $(this).text('Ru');
    }

  });

  

  

});
     /* font-size: 58px;
      font-size: 39px;*/
  //для стилей в режиме lang
  window.lang_elem_pressed = false;
  $(window).resize(function(){
    if($(window).width()<1200 && window.lang_elem_pressed==true){
      $('.block_2 .zag h1').css('font-size', '66px');
      $('.block_2 .zag p').css('line-height', '24px');
      $('.block_5 h1').css('font-size', '55px');
 
    }
    else{
      $('.block_5 h1').css('font-size', '72px');
    }
    if($(window).width()<992 && window.lang_elem_pressed==true){
      $('.block_2 .zag h1').css('font-size', '58px');
      //alert('mobile version and lang mode');
    }
    if($(window).width()<768 && window.lang_elem_pressed==true){
      $('.block_2 .zag h1').css('font-size', '38px');
    }
    if($(window).width()<576 && window.lang_elem_pressed==true){

    }
  });
  //$('.block_2 .zag h1').css('font-size', '39px');


