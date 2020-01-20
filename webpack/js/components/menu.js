'use strict'

import $ from 'jquery'

// Your base, I'm in it!
var originalAddClassMethod = $.fn.addClass

$.fn.addClass = function () {
  // Execute the original method.
  var result = originalAddClassMethod.apply(this, arguments)
  // trigger a custom event
  $(this).trigger('cssClassChanged')
  // return the original result
  return result
}

$(document).ready(function () { SITE.init() })

var SITE = {

  init: function () {
    this.scrollspy()
    this.menu_move()
    this.menu_sticky()
    this.language_selector()
  },

  scrollspy: function () {
    $('#navbar-spy').scrollspy({})
  },

  language_selector: function () {
    $('.language-picker-select').selectpicker()
    $('.language-picker-select').change(function () {
      var option = $(this).find('option:selected')
      window.location.href = option.data('url')
    })
  },

  menu_move: function () {
    $(".navbar-nav li a[href^='#']").on('click', function (e) {
      e.preventDefault()
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 60}, 1000)
    })
  },

  go_to_top: function () {
    $('.to-top').on('click', function (e) {
      e.preventDefault()
      $('html, body').animate({scrollTop: 0}, 2000)
    })
  },

  menu_sticky: function () {
    var navbar = $('#conference-navbar')
    var content0InitialPosition = $('#content-0').offset().top
    var navbarInitialPosition = navbar.offset().top

    if (content0InitialPosition < $(window).scrollTop()) {
      navbar.addClass('fixed-top')
      $('body').css('padding-top', 90)
    }

    $(window).on('scroll', function () {
      var scrollPosition = $(this).scrollTop()
      if (scrollPosition >= navbarInitialPosition) {
        navbar.addClass('fixed-top')
        $('body').css('padding-top', 90)
      } else {
        navbar.removeClass('fixed-top')
        $('body').css('padding-top', 0)
      }
    })
  },

  menu_opacity: function () {
    var navbar = $('#conference-navbar')
    var eventLimit = $('#content-0').offset().top

    $(window).on('scroll', function () {
      var st = $(this).scrollTop()
      var limit = eventLimit / 3

      if (st > limit) {
        navbar.animate({top: 0, opacity: 1}, {queue: false, duration: 100, easing: 'linear'})
      } else {
        navbar.animate({top: -navbar.height() - 30}, {queue: false, duration: 100, easing: 'linear'})
      }
    })
  },

  header_opacity: function () {
    var header = $('#header')
    var eventLimit = $('#content-0').offset().top
    $(window).on('scroll', function () {
      var st = $(this).scrollTop()
      var limit = eventLimit / 1.5
      if (st > limit) {
        header.animate({opacity: 0}, {queue: false, duration: 200, easing: 'linear'})
      } else {
        header.animate({opacity: 1 - st / limit}, {queue: false, duration: 200, easing: 'linear'})
      }
    })
  }
}

$('.nav-link').bind('cssClassChanged', function (e) {
  $('.nav-item').each(function () {
    if ($(this).hasClass('active-link') === true) {
      $(this).removeClass('active-link')
    }
  })
  $(this).removeClass('active').parent().addClass('active-link')
})
