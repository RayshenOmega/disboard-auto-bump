var version = "3.3.2";

function redirect(requestDetails) {
      return {
        redirectUrl: "data:application/javascript;base64,InVzZSBzdHJpY3QiOyQoZnVuY3Rpb24oKXt3aW5kb3cuZGlzYm9hcmQ9e30scHJlcGFyZU5hdmJhcigpLHByZXBhcmVEcm9wZG93bigpLG1vZGFsKCl9KSx3aW5kb3cucHJlcGFyZU11dGVTZXJ2ZXI9ZnVuY3Rpb24obyxuKXtpZih3aW5kb3cuZGlzYm9hcmQubXV0ZVNlcnZlclByZXBhcmVkKXJldHVybiExO3dpbmRvdy5kaXNib2FyZC5tdXRlU2VydmVyUHJlcGFyZWQ9ITAsbj1ufHwiVW5tdXRlIiwkKCIuYnV0dG9uLW11dGUtc2VydmVyIikuY2xpY2soZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBhPSQodGhpcykuYXR0cigiZGF0YS1zZXJ2ZXItaWQiKSx0PW8rIi8iK2E7JC5wb3N0KHQpLmRvbmUoZnVuY3Rpb24oZSl7dmFyIHQ9JCgiLnNlcnZlci0iK2EpO2UucmVzdWx0JiYobm90aWUuYWxlcnQoe3R5cGU6InN1Y2Nlc3MiLHRleHQ6ZS5tZXNzYWdlfSksdC5odG1sKCc8ZGl2IGNsYXNzPSJtdXRlZC1zdWNjZXNzZnVsbHkgaGFzLXRleHQtY2VudGVyZWQiPjxidXR0b24gY2xhc3M9ImJ1dHRvbiBpcy1kYXJrIGJ1dHRvbi11bm11dGUtc2VydmVyIiBkYXRhLXNlcnZlci1pZD0iJythKyciPicrbisiPC9idXR0b24+PC9kaXY+IikpfSkuZmFpbChmdW5jdGlvbihlKXtub3RpZS5hbGVydCh7dHlwZToiZXJyb3IiLHRleHQ6ZS5yZXNwb25zZUpTT04ubWVzc2FnZX0pfSl9KSwkKGRvY3VtZW50KS5vbigiY2xpY2siLCIuYnV0dG9uLXVubXV0ZS1zZXJ2ZXIiLGZ1bmN0aW9uKGUpe3ZhciB0PSQodGhpcyksYT10LmF0dHIoImRhdGEtc2VydmVyLWlkIiksbj1vKyIvIithKyI/dW5tdXRlPTEiOyQucG9zdChuLGZ1bmN0aW9uKGUpe3QuaGlkZSgpLG5vdGllLmFsZXJ0KHt0eXBlOiJzdWNjZXNzIix0ZXh0OmUubWVzc2FnZX0pfSl9KX0sd2luZG93LnByZXBhcmVOYXZiYXI9ZnVuY3Rpb24oKXtpZih3aW5kb3cuZGlzYm9hcmQubmF2YmFyUHJlcGFyZWQpcmV0dXJuITE7d2luZG93LmRpc2JvYXJkLm5hdmJhclByZXBhcmVkPSEwO2Z1bmN0aW9uIGUoZSl7dmFyIHQ9JChlKS5zY3JvbGxUb3AoKS8xMDA7JCgiI2hlYWRlcjpub3QoLmhhcy1tZW51LW9wZW5lZCkiKS5jc3Moe2JhY2tncm91bmQ6InJnYmEoNTQsIDYyLCA4OSwiK3QrIikiLCJiYWNrZHJvcC1maWx0ZXIiOiJibHVyKCIrdCsicHgpIn0pfSQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpe2UodGhpcyl9KS5yZWFkeShmdW5jdGlvbigpe2UodGhpcyl9KSwkKCIubmF2YmFyLWJ1cmdlciIpLmNsaWNrKGZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksJCgiLm5hdmJhciIpLnRvZ2dsZUNsYXNzKCJoYXMtbWVudS1vcGVuZWQiKSwkKCIubmF2YmFyLW1lbnUiKS50b2dnbGVDbGFzcygiaXMtYWN0aXZlIil9KSwkKCIubmF2YmFyLW1lbnUiKS5jbGljayhmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfSksJCgiaHRtbCIpLmNsaWNrKGZ1bmN0aW9uKCl7JCgiLm5hdmJhciIpLnJlbW92ZUNsYXNzKCJoYXMtbWVudS1vcGVuZWQiKSwkKCIubmF2YmFyLW1lbnUiKS5yZW1vdmVDbGFzcygiaXMtYWN0aXZlIil9KX07dmFyIG1vZGFsPWZ1bmN0aW9uKCl7JCgiLmJ1dHRvbi1tb2RhbCIpLmNsaWNrKGZ1bmN0aW9uKCl7dmFyIGU9JCh0aGlzKS5kYXRhKCJ0YXJnZXQiKTskKGUpLmFkZENsYXNzKCJpcy1hY3RpdmUiKX0pLCQoIi5tb2RhbC1jbG9zZSwgLm1vZGFsLWJhY2tncm91bmQsIC5tb2RhbCAuYnV0dG9uIikubm90KCIuYnV0dG9uW3R5cGU9c3VibWl0XSIpLmNsaWNrKGZ1bmN0aW9uKCl7JCgiLm1vZGFsIikucmVtb3ZlQ2xhc3MoImlzLWFjdGl2ZSIpfSl9O3dpbmRvdy5wcmVwYXJlRHJvcGRvd249ZnVuY3Rpb24oKXskKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbigpeyQoIi5kcm9wZG93biIpLnJlbW92ZUNsYXNzKCJpcy1hY3RpdmUiKX0pLCQoIi5saXN0aW5nLWNhcmQiKS5vbigibW91c2VsZWF2ZSIsZnVuY3Rpb24oZSl7JCh0aGlzKS5maW5kKCIuZHJvcGRvd24iKS5yZW1vdmVDbGFzcygiaXMtYWN0aXZlIil9KSwkKCIuZHJvcGRvd246bm90KC5pcy1ob3ZlcmFibGUpIikuY2xpY2soZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSwkKHRoaXMpLnRvZ2dsZUNsYXNzKCJpcy1hY3RpdmUiKX0pfSx3aW5kb3cucHJlcGFyZUVsYXN0aWNUZXh0PWZ1bmN0aW9uKCl7aWYod2luZG93LmRpc2JvYXJkLmVsYXN0aWNUZXh0UHJlcGFyZWQpcmV0dXJuITE7d2luZG93LmRpc2JvYXJkLmVsYXN0aWNUZXh0UHJlcGFyZWQ9ITA7Zm9yKHZhciBlPSQoIi5pcy1lbGFzdGljLXRleHQiKSx0PTAsYT1lLmxlbmd0aDt0PGE7dCsrKXt2YXIgbj0kKGVbdF0pLG89bi5oZWlnaHQoKSxyPW4uYXR0cigiZGF0YS1ldC1tYXgtaGVpZ2h0Iik7aWYocil2YXIgaT1yO2Vsc2UgaT0yNDA7bzwyNDB8fG4uYWRkQ2xhc3MoImxvbmciKS5hdHRyKCJkYXRhLW9yaWdpbi1oZWlnaHQiLG4uaGVpZ2h0KCkpLmhlaWdodChpKS5hcHBlbmQoJCgnICAgICAgIDxkaXYgY2xhc3M9InJlYWQtbW9yZSIgYXJpYS1sYWJlbD0iUmVhZCBtb3JlIj4gICAgICAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiI+ICAgICAgICAgICA8aSBjbGFzcz0iaWNvbiBpY29uLWNoZXZyb24tZG93biI+PC9pPiAgICAgICAgICAgPGkgY2xhc3M9Imljb24gaWNvbi1jaGV2cm9uLXVwIj48L2k+ICAgICAgICAgPC9idXR0b24+ICAgICAgIDwvZGl2PiAgICAgICAnKS5jbGljayhmdW5jdGlvbigpe3ZhciBlPSQodGhpcykucGFyZW50KCksdD1lLmF0dHIoImRhdGEtb3JpZ2luLWhlaWdodCIpO2UuaGFzQ2xhc3MoImV0LWV4cGFuZGVkIik/ZS5oZWlnaHQoaSkucmVtb3ZlQ2xhc3MoImV0LWV4cGFuZGVkIik6ZS5oZWlnaHQodCkuYWRkQ2xhc3MoImV0LWV4cGFuZGVkIil9KSl9fSx3aW5kb3cucHJlcGFyZVRodW1icz1mdW5jdGlvbihpKXskKCIuYnV0dG9uLXRodW1icy11cCwgLmJ1dHRvbi10aHVtYnMtZG93biIpLmNsaWNrKGZ1bmN0aW9uKGUpe2lmKGUub3JpZ2luYWxFdmVudC5pc1RydXN0ZWQpe3ZhciB0PSQodGhpcyksYT10LnBhcmVudCgpLG49dC5oYXNDbGFzcygiYnV0dG9uLXRodW1icy11cCIpLG89dC5kYXRhKCJpZCIpLHI9aSsiLyIrbztufHwocis9Ij9saWtlPTAiKSwkLnBvc3QocixmdW5jdGlvbihlKXsiZGVsZXRlIj09ZS5yZXN1bHQ/YS5yZW1vdmVDbGFzcygicHJlc3NlZCIpOihhLmFkZENsYXNzKCJwcmVzc2VkIiksYS5maW5kKCJidXR0b24iKS5yZW1vdmVDbGFzcygib24iKSx0LmFkZENsYXNzKCJvbiIpKX0pfX0pfSx3aW5kb3cucHJlcGFyZVNlYXJjaD1mdW5jdGlvbihuKXt2YXIgZT1uLmRhdGEoInJlbW90ZS11cmwiKSx0PW5ldyBCbG9vZGhvdW5kKHtkYXR1bVRva2VuaXplcjpCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZSxxdWVyeVRva2VuaXplcjpCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZSxyZW1vdGU6e3VybDplKyI/cT0lUVVFUlkiLHdpbGRjYXJkOiIlUVVFUlkifX0pO24udHlwZWFoZWFkKHtoaW50OiEwLGhpZ2hsaWdodDohMCxtaW5MZW5ndGg6Mn0se3NvdXJjZTp0LGRpc3BsYXk6Im5hbWUiLHRlbXBsYXRlczp7c3VnZ2VzdGlvbjpmdW5jdGlvbihlKXtyZXR1cm4nPGRpdj48c3BhbiBjbGFzcz0ic3VnZ2VzdGlvbi1uYW1lIj4nK2UubmFtZSsnPC9zcGFuPjxzcGFuIGNsYXNzPSJzdWdnZXN0aW9uLWNvdW50Ij4oJytlLmNvdW50KyIpPC9zcGFuPjwvZGl2PiJ9fX0pLG4uYmluZCgidHlwZWFoZWFkOnNlbGVjdCIsZnVuY3Rpb24oZSx0KXt2YXIgYT10Lm5hbWU7JC5hamF4KHttZXRob2Q6IlBPU1QiLHVybDoiL2xvZy9zZWFyY2giLGRhdGE6e3F1ZXJ5OmEsc3VnZ2VzdGVkOjF9fSkuZG9uZShmdW5jdGlvbihlKXtsb2NhdGlvbi5ocmVmPSIvc2VydmVycy90YWcvIithfSl9KSwkKCIuZm9ybS1zZWFyY2giKS5zdWJtaXQoZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7dmFyIHQ9bi52YWwoKSxhPXRoaXM7JC5hamF4KHttZXRob2Q6IlBPU1QiLHVybDoiL2xvZy9zZWFyY2giLGRhdGE6e3F1ZXJ5OnR9fSkuZG9uZShmdW5jdGlvbihlKXthLnN1Ym1pdCgpfSl9KX0sd2luZG93LnByZXBhcmVTaGFyZUJ1dHRvbnM9ZnVuY3Rpb24oKXt2YXIgdD0kKCIuc2hhcmUtYnV0dG9ucyIpOyQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpeyFmdW5jdGlvbihlKXsxMjA8JChlKS5zY3JvbGxUb3AoKT90LmFkZENsYXNzKCJzY3JvbGxlZCIpOnQucmVtb3ZlQ2xhc3MoInNjcm9sbGVkIil9KHRoaXMpfSl9LHdpbmRvdy5wcmVwYXJlQnVtcEJ1dHRvbj1mdW5jdGlvbihpLHMpe2Z1bmN0aW9uIGQoZSx0KXt2YXIgYT1NYXRoLmZsb29yKGUlODY0MDAvMzYwMCksbj1NYXRoLmZsb29yKGUlMzYwMC82MCksbz1NYXRoLmZsb29yKGUlNjApO2E9YTwxMD8iMCIrYTphLG49bjwxMD8iMCIrbjpuLG89bzwxMD8iMCIrbzpvLHQudGV4dChhKyI6IituKyI6IitvKX0kKCIuYnV0dG9uLWJ1bXAiKS5lYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIGE9KHQ9JCh0KSkuYXR0cigiZGF0YS1yZW1haW5pbmciKTtpZihhKXt2YXIgbj10LmZpbmQoIi50ZXh0Iiksbz1uLmF0dHIoImRhdGEtb3JpZ2luLXRleHQiKTt0LmF0dHIoImRpc2FibGVkIiwhMCksZChhLG4pO3ZhciByPXNldEludGVydmFsKGZ1bmN0aW9uKCl7ZChhLT0xLG4pLGE8PTAmJih0LmF0dHIoImRpc2FibGVkIiwhMSksbi50ZXh0KG8pLGNsZWFySW50ZXJ2YWwocikpfSwxZTMpfXQuY2xpY2soZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLHRydWUpe3ZhciBuPSQodGhpcyk7Z3JlY2FwdGNoYS5leGVjdXRlKGkse2FjdGlvbjoic2VydmVyL2J1bXAifSkudGhlbihmdW5jdGlvbihlKXt2YXIgdD1uLmF0dHIoImhyZWYiKSxhPXQrdC5zdWJzdHJpbmcoMCx0LmluZGV4T2YoIj8iKSkrIj8iK3MrIj0iK2U7bG9jYXRpb24uaHJlZj1hfSl9fSl9KX0sd2luZG93LmxvZ0pvaW49ZnVuY3Rpb24oZSl7dmFyIHQ9e307dD12b2lkIDAhPT13aW5kb3cuZGlzYm9hcmQuam9pbkxvZ1BhcmFtcz93aW5kb3cuZGlzYm9hcmQuam9pbkxvZ1BhcmFtczp7cGFnZTpudWxsLGZyb206bnVsbCxrZXl3b3JkOm51bGx9O3ZhciBhPWUuYXR0cigiZGF0YS1pZCIpLG49ZS5hdHRyKCJyYW5rIiksbz10LnBhZ2Uscj10LmZyb20saT10LmtleXdvcmQscz17c2VydmVyX2lkOmEscGF0aDpkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSxwYXJhbXM6ZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoLHJhbms6bixwYWdlOm8sZnJvbTpyLGtleXdvcmQ6aX07JC5hamF4KHttZXRob2Q6IlBPU1QiLHVybDoiL2xvZy9qb2luIixkYXRhOnN9KX0sd2luZG93LmV4ZWNDb3B5PWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgicHJlIikpLnRleHRDb250ZW50PWU7dmFyIGE9dC5zdHlsZTthLnBvc2l0aW9uPSJmaXhlZCIsYS5sZWZ0PSItMTAwJSIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KSxkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5zZWxlY3RBbGxDaGlsZHJlbih0KTt2YXIgbj1kb2N1bWVudC5leGVjQ29tbWFuZCgiY29weSIpO3JldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHQpLG59OyFmdW5jdGlvbihlLHQpeyJvYmplY3QiPT10eXBlb2YgZXhwb3J0cyYmIm9iamVjdCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOiJmdW5jdGlvbiI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOiJvYmplY3QiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLm5vdGllPXQoKTplLm5vdGllPXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBhPXt9LHMubT1uPVtmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZS53ZWJwYWNrUG9seWZpbGx8fChlLmRlcHJlY2F0ZT1mdW5jdGlvbigpe30sZS5wYXRocz1bXSxlLmNoaWxkcmVufHwoZS5jaGlsZHJlbj1bXSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsImxvYWRlZCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUubH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwiaWQiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLml9fSksZS53ZWJwYWNrUG9seWZpbGw9MSksZX19LGZ1bmN0aW9uKGUsaSx0KXsidXNlIHN0cmljdCI7KGZ1bmN0aW9uKGUpe3ZhciB0LG4scyxhLGI9ImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmInN5bWJvbCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/InN5bWJvbCI6dHlwZW9mIGV9O2E9ZnVuY3Rpb24oKXtyZXR1cm4gYT17fSxzLm09bj1bZnVuY3Rpb24oZSx0LG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KTtmdW5jdGlvbiBzKCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUpe3JldHVybiBzZXRUaW1lb3V0KGUsMCl9KX1mdW5jdGlvbiBwKHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlKXtyZXR1cm4gc2V0VGltZW91dChlLDFlMyp0KX0pfWZ1bmN0aW9uIGooKXtkb2N1bWVudC5hY3RpdmVFbGVtZW50JiZkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKX1mdW5jdGlvbiBOKCl7cmV0dXJuIm5vdGllLSIrInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCIucmVwbGFjZSgvW3h5XS9nLGZ1bmN0aW9uKGUpe3ZhciB0PTE2Kk1hdGgucmFuZG9tKCl8MDtyZXR1cm4oIngiPT09ZT90OjMmdHw4KS50b1N0cmluZygxNil9KX1mdW5jdGlvbiBhKCl7cmV0dXJuIFUudHJhbnNpdGlvblNlbGVjdG9yKyIgIitVLnRyYW5zaXRpb25EdXJhdGlvbisicyAiK1UudHJhbnNpdGlvbkN1cnZlfWZ1bmN0aW9uIFAoZSl7cmV0dXJuIDEzPT09ZS5rZXlDb2RlfWZ1bmN0aW9uIEYoZSl7cmV0dXJuIDI3PT09ZS5rZXlDb2RlfWZ1bmN0aW9uIFkoZSx0KXtlLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmNvbnRhaW5lciksZS5zdHlsZVt0XT0iLTEwMDAwcHgiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSksZS5zdHlsZVt0XT0iLSIrZS5vZmZzZXRIZWlnaHQrInB4IixlLmxpc3RlbmVyJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigia2V5ZG93biIsZS5saXN0ZW5lcikscygpLnRoZW4oZnVuY3Rpb24oKXtlLnN0eWxlLnRyYW5zaXRpb249YSgpLGUuc3R5bGVbdF09MH0pfWZ1bmN0aW9uIF8oZSx0KXt2YXIgbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKTtuJiYobi5zdHlsZVt0XT0iLSIrbi5vZmZzZXRIZWlnaHQrInB4IixuLmxpc3RlbmVyJiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigia2V5ZG93biIsbi5saXN0ZW5lcikscChVLnRyYW5zaXRpb25EdXJhdGlvbikudGhlbihmdW5jdGlvbigpe24ucGFyZW50Tm9kZSYmbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pfSkpfWZ1bmN0aW9uIHooZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTtuLmlkPVUuaWRzLm92ZXJsYXksbi5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5vdmVybGF5KSxuLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmJhY2tncm91bmRPdmVybGF5KSxuLnN0eWxlLm9wYWNpdHk9MCxlJiZVLm92ZXJsYXlDbGlja0Rpc21pc3MmJihuLm9uY2xpY2s9ZnVuY3Rpb24oKXtfKGUuaWQsdCksQigpfSksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuKSxzKCkudGhlbihmdW5jdGlvbigpe24uc3R5bGUudHJhbnNpdGlvbj1hKCksbi5zdHlsZS5vcGFjaXR5PVUub3ZlcmxheU9wYWNpdHl9KX1mdW5jdGlvbiBpKGUsdCxuKXt2YXIgcz1lLnRleHQsYT1lLnN1Ym1pdFRleHQsaT12b2lkIDA9PT1hPyJTdWJtaXQiOmEsYz1lLmNhbmNlbFRleHQsbz12b2lkIDA9PT1jPyJDYW5jZWwiOmMscj1lLnN1Ym1pdENhbGxiYWNrLGw9ZS5jYW5jZWxDYWxsYmFjayxkPWUucG9zaXRpb24sdT12b2lkIDA9PT1kP1UucG9zaXRpb25zLmlucHV0fHx1LnRvcDpkLHA9ZnVuY3Rpb24oZSx0KXt2YXIgbj17fTtmb3IodmFyIHMgaW4gZSkwPD10LmluZGV4T2Yocyl8fE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpJiYobltzXT1lW3NdKTtyZXR1cm4gbn0oZSxbInRleHQiLCJzdWJtaXRUZXh0IiwiY2FuY2VsVGV4dCIsInN1Ym1pdENhbGxiYWNrIiwiY2FuY2VsQ2FsbGJhY2siLCJwb3NpdGlvbiJdKTtqKCksSigpO3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpLG09TigpO2YuaWQ9bTt2YXIgdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTt2LmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLnRleHRib3gpLHYuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuYmFja2dyb3VuZEluZm8pLHYuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPSInK1UuY2xhc3Nlcy50ZXh0Ym94SW5uZXIrJyI+JytzKyI8L2Rpdj4iO3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImlucHV0Iik7Yi5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5pbnB1dEZpZWxkKSxiLnNldEF0dHJpYnV0ZSgiYXV0b2NhcGl0YWxpemUiLHAuYXV0b2NhcGl0YWxpemV8fCJub25lIiksYi5zZXRBdHRyaWJ1dGUoImF1dG9jb21wbGV0ZSIscC5hdXRvY29tcGxldGV8fCJvZmYiKSxiLnNldEF0dHJpYnV0ZSgiYXV0b2NvcnJlY3QiLHAuYXV0b2NvcnJlY3R8fCJvZmYiKSxiLnNldEF0dHJpYnV0ZSgiYXV0b2ZvY3VzIixwLmF1dG9mb2N1c3x8InRydWUiKSxiLnNldEF0dHJpYnV0ZSgiaW5wdXRtb2RlIixwLmlucHV0bW9kZXx8InZlcmJhdGltIiksYi5zZXRBdHRyaWJ1dGUoIm1heCIscC5tYXh8fCIiKSxiLnNldEF0dHJpYnV0ZSgibWF4bGVuZ3RoIixwLm1heGxlbmd0aHx8IiIpLGIuc2V0QXR0cmlidXRlKCJtaW4iLHAubWlufHwiIiksYi5zZXRBdHRyaWJ1dGUoIm1pbmxlbmd0aCIscC5taW5sZW5ndGh8fCIiKSxiLnNldEF0dHJpYnV0ZSgicGxhY2Vob2xkZXIiLHAucGxhY2Vob2xkZXJ8fCIiKSxiLnNldEF0dHJpYnV0ZSgic3BlbGxjaGVjayIscC5zcGVsbGNoZWNrfHwiZGVmYXVsdCIpLGIuc2V0QXR0cmlidXRlKCJzdGVwIixwLnN0ZXB8fCJhbnkiKSxiLnNldEF0dHJpYnV0ZSgidHlwZSIscC50eXBlfHwidGV4dCIpLGIudmFsdWU9cC52YWx1ZXx8IiIscC5hbGxvd2VkJiYoYi5vbmlucHV0PWZ1bmN0aW9uKCl7dmFyIGU9dm9pZCAwO2lmKEFycmF5LmlzQXJyYXkocC5hbGxvd2VkKSl7Zm9yKHZhciB0PSIiLG49cC5hbGxvd2VkLHM9MDtzPG4ubGVuZ3RoO3MrKykiYW4iPT09bltzXT90Kz0iMC05YS16QS1aIjoiYSI9PT1uW3NdP3QrPSJhLXpBLVoiOiJuIj09PW5bc10mJih0Kz0iMC05IiksInMiPT09bltzXSYmKHQrPSIgIik7ZT1uZXcgUmVnRXhwKCJbXiIrdCsiXSIsImciKX1lbHNlIm9iamVjdCI9PT1MKHAuYWxsb3dlZCkmJihlPXAuYWxsb3dlZCk7Yi52YWx1ZT1iLnZhbHVlLnJlcGxhY2UoZSwiIil9KTt2YXIgeD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTt4LmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmJ1dHRvbikseC5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5lbGVtZW50SGFsZikseC5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5iYWNrZ3JvdW5kU3VjY2VzcykseC5pbm5lckhUTUw9aSx4Lm9uY2xpY2s9ZnVuY3Rpb24oKXtfKG0sdSksQigpLHI/cihiLnZhbHVlKTp0JiZ0KGIudmFsdWUpfTt2YXIgeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTt5LmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmJ1dHRvbikseS5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5lbGVtZW50SGFsZikseS5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5iYWNrZ3JvdW5kRXJyb3IpLHkuaW5uZXJIVE1MPW8seS5vbmNsaWNrPWZ1bmN0aW9uKCl7XyhtLHUpLEIoKSxsP2woYi52YWx1ZSk6biYmbihiLnZhbHVlKX0sZi5hcHBlbmRDaGlsZCh2KSxmLmFwcGVuZENoaWxkKGIpLGYuYXBwZW5kQ2hpbGQoeCksZi5hcHBlbmRDaGlsZCh5KSxmLmxpc3RlbmVyPWZ1bmN0aW9uKGUpe1AoZSk/eC5jbGljaygpOkYoZSkmJnkuY2xpY2soKX0sWShmLHUpLGIuZm9jdXMoKSx6KGYsdSl9dmFyIEw9ImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmInN5bWJvbCI9PT1iKFN5bWJvbC5pdGVyYXRvcik/ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/InVuZGVmaW5lZCI6YihlKX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJiJmdW5jdGlvbiI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlPyJzeW1ib2wiOnZvaWQgMD09PWU/InVuZGVmaW5lZCI6YihlKX0sYz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBzIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scykmJihlW3NdPW5bc10pfXJldHVybiBlfSxvPSJ0b3AiLFU9e2FsZXJ0VGltZTozLGRhdGVNb250aHM6WyJKYW51YXJ5IiwiRmVicnVhcnkiLCJNYXJjaCIsIkFwcmlsIiwiTWF5IiwiSnVuZSIsIkp1bHkiLCJBdWd1c3QiLCJTZXB0ZW1iZXIiLCJPY3RvYmVyIiwiTm92ZW1iZXIiLCJEZWNlbWJlciJdLG92ZXJsYXlDbGlja0Rpc21pc3M6ITAsb3ZlcmxheU9wYWNpdHk6Ljc1LHRyYW5zaXRpb25DdXJ2ZToiZWFzZSIsdHJhbnNpdGlvbkR1cmF0aW9uOi4zLHRyYW5zaXRpb25TZWxlY3RvcjoiYWxsIixjbGFzc2VzOntjb250YWluZXI6Im5vdGllLWNvbnRhaW5lciIsdGV4dGJveDoibm90aWUtdGV4dGJveCIsdGV4dGJveElubmVyOiJub3RpZS10ZXh0Ym94LWlubmVyIixidXR0b246Im5vdGllLWJ1dHRvbiIsZWxlbWVudDoibm90aWUtZWxlbWVudCIsZWxlbWVudEhhbGY6Im5vdGllLWVsZW1lbnQtaGFsZiIsZWxlbWVudFRoaXJkOiJub3RpZS1lbGVtZW50LXRoaXJkIixvdmVybGF5OiJub3RpZS1vdmVybGF5IixiYWNrZ3JvdW5kU3VjY2Vzczoibm90aWUtYmFja2dyb3VuZC1zdWNjZXNzIixiYWNrZ3JvdW5kV2FybmluZzoibm90aWUtYmFja2dyb3VuZC13YXJuaW5nIixiYWNrZ3JvdW5kRXJyb3I6Im5vdGllLWJhY2tncm91bmQtZXJyb3IiLGJhY2tncm91bmRJbmZvOiJub3RpZS1iYWNrZ3JvdW5kLWluZm8iLGJhY2tncm91bmROZXV0cmFsOiJub3RpZS1iYWNrZ3JvdW5kLW5ldXRyYWwiLGJhY2tncm91bmRPdmVybGF5OiJub3RpZS1iYWNrZ3JvdW5kLW92ZXJsYXkiLGFsZXJ0OiJub3RpZS1hbGVydCIsaW5wdXRGaWVsZDoibm90aWUtaW5wdXQtZmllbGQiLHNlbGVjdENob2ljZVJlcGVhdGVkOiJub3RpZS1zZWxlY3QtY2hvaWNlLXJlcGVhdGVkIixkYXRlU2VsZWN0b3JJbm5lcjoibm90aWUtZGF0ZS1zZWxlY3Rvci1pbm5lciIsZGF0ZVNlbGVjdG9yVXA6Im5vdGllLWRhdGUtc2VsZWN0b3ItdXAifSxpZHM6e292ZXJsYXk6Im5vdGllLW92ZXJsYXkifSxwb3NpdGlvbnM6e2FsZXJ0Om8sZm9yY2U6byxjb25maXJtOm8saW5wdXQ6byxzZWxlY3Q6ImJvdHRvbSIsZGF0ZTpvfX0scj10LnNldE9wdGlvbnM9ZnVuY3Rpb24oZSl7VT1jKHt9LFUsZSx7Y2xhc3NlczpjKHt9LFUuY2xhc3NlcyxlLmNsYXNzZXMpLGlkczpjKHt9LFUuaWRzLGUuaWRzKSxwb3NpdGlvbnM6Yyh7fSxVLnBvc2l0aW9ucyxlLnBvc2l0aW9ucyl9KX0sbT17MTpVLmNsYXNzZXMuYmFja2dyb3VuZFN1Y2Nlc3Msc3VjY2VzczpVLmNsYXNzZXMuYmFja2dyb3VuZFN1Y2Nlc3MsMjpVLmNsYXNzZXMuYmFja2dyb3VuZFdhcm5pbmcsd2FybmluZzpVLmNsYXNzZXMuYmFja2dyb3VuZFdhcm5pbmcsMzpVLmNsYXNzZXMuYmFja2dyb3VuZEVycm9yLGVycm9yOlUuY2xhc3Nlcy5iYWNrZ3JvdW5kRXJyb3IsNDpVLmNsYXNzZXMuYmFja2dyb3VuZEluZm8saW5mbzpVLmNsYXNzZXMuYmFja2dyb3VuZEluZm8sNTpVLmNsYXNzZXMuYmFja2dyb3VuZE5ldXRyYWwsbmV1dHJhbDpVLmNsYXNzZXMuYmFja2dyb3VuZE5ldXRyYWx9LEI9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChVLmlkcy5vdmVybGF5KTtlLnN0eWxlLm9wYWNpdHk9MCxwKFUudHJhbnNpdGlvbkR1cmF0aW9uKS50aGVuKGZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9KX0sSj10LmhpZGVBbGVydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShVLmNsYXNzZXMuYWxlcnQpO2lmKHQubGVuZ3RoKXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHM9dFtuXTtfKHMuaWQscy5wb3NpdGlvbil9ZSYmcChVLnRyYW5zaXRpb25EdXJhdGlvbikudGhlbihmdW5jdGlvbigpe3JldHVybiBlKCl9KX19LGw9dC5hbGVydD1mdW5jdGlvbihlKXt2YXIgdD1lLnR5cGUsbj12b2lkIDA9PT10PzQ6dCxzPWUudGV4dCxhPWUudGltZSxpPXZvaWQgMD09PWE/VS5hbGVydFRpbWU6YSxjPWUuc3RheSxvPXZvaWQgMCE9PWMmJmMscj1lLnBvc2l0aW9uLGw9dm9pZCAwPT09cj9VLnBvc2l0aW9ucy5hbGVydHx8bC50b3A6cjtqKCksSigpO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpLHU9TigpO2QuaWQ9dSxkLnBvc2l0aW9uPWwsZC5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy50ZXh0Ym94KSxkLmNsYXNzTGlzdC5hZGQobVtuXSksZC5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5hbGVydCksZC5pbm5lckhUTUw9JzxkaXYgY2xhc3M9IicrVS5jbGFzc2VzLnRleHRib3hJbm5lcisnIj4nK3MrIjwvZGl2PiIsZC5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIF8odSxsKX0sZC5saXN0ZW5lcj1mdW5jdGlvbihlKXsoUChlKXx8RihlKSkmJkooKX0sWShkLGwpLGkmJmk8MSYmKGk9MSksIW8mJmkmJnAoaSkudGhlbihmdW5jdGlvbigpe3JldHVybiBfKHUsbCl9KX0sZD10LmZvcmNlPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZS50eXBlLHM9dm9pZCAwPT09bj81Om4sYT1lLnRleHQsaT1lLmJ1dHRvblRleHQsYz12b2lkIDA9PT1pPyJPSyI6aSxvPWUuY2FsbGJhY2sscj1lLnBvc2l0aW9uLGw9dm9pZCAwPT09cj9VLnBvc2l0aW9ucy5mb3JjZXx8bC50b3A6cjtqKCksSigpO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpLHU9TigpO2QuaWQ9dTt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTtwLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLnRleHRib3gpLHAuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuYmFja2dyb3VuZEluZm8pLHAuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPSInK1UuY2xhc3Nlcy50ZXh0Ym94SW5uZXIrJyI+JythKyI8L2Rpdj4iO3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO2YuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuYnV0dG9uKSxmLmNsYXNzTGlzdC5hZGQobVtzXSksZi5pbm5lckhUTUw9YyxmLm9uY2xpY2s9ZnVuY3Rpb24oKXtfKHUsbCksQigpLG8/bygpOnQmJnQoKX0sZC5hcHBlbmRDaGlsZChwKSxkLmFwcGVuZENoaWxkKGYpLGQubGlzdGVuZXI9ZnVuY3Rpb24oZSl7UChlKSYmZi5jbGljaygpfSxZKGQsbCkseigpfSx1PXQuY29uZmlybT1mdW5jdGlvbihlLHQsbil7dmFyIHM9ZS50ZXh0LGE9ZS5zdWJtaXRUZXh0LGk9dm9pZCAwPT09YT8iWWVzIjphLGM9ZS5jYW5jZWxUZXh0LG89dm9pZCAwPT09Yz8iQ2FuY2VsIjpjLHI9ZS5zdWJtaXRDYWxsYmFjayxsPWUuY2FuY2VsQ2FsbGJhY2ssZD1lLnBvc2l0aW9uLHU9dm9pZCAwPT09ZD9VLnBvc2l0aW9ucy5jb25maXJtfHx1LnRvcDpkO2ooKSxKKCk7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2IiksZj1OKCk7cC5pZD1mO3ZhciBtPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO20uY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMudGV4dGJveCksbS5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5iYWNrZ3JvdW5kSW5mbyksbS5pbm5lckhUTUw9JzxkaXYgY2xhc3M9IicrVS5jbGFzc2VzLnRleHRib3hJbm5lcisnIj4nK3MrIjwvZGl2PiI7dmFyIHY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7di5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5idXR0b24pLHYuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuZWxlbWVudEhhbGYpLHYuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuYmFja2dyb3VuZFN1Y2Nlc3MpLHYuaW5uZXJIVE1MPWksdi5vbmNsaWNrPWZ1bmN0aW9uKCl7XyhmLHUpLEIoKSxyP3IoKTp0JiZ0KCl9O3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO2IuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuYnV0dG9uKSxiLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmVsZW1lbnRIYWxmKSxiLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmJhY2tncm91bmRFcnJvciksYi5pbm5lckhUTUw9byxiLm9uY2xpY2s9ZnVuY3Rpb24oKXtfKGYsdSksQigpLGw/bCgpOm4mJm4oKX0scC5hcHBlbmRDaGlsZChtKSxwLmFwcGVuZENoaWxkKHYpLHAuYXBwZW5kQ2hpbGQoYikscC5saXN0ZW5lcj1mdW5jdGlvbihlKXtQKGUpP3YuY2xpY2soKTpGKGUpJiZiLmNsaWNrKCl9LFkocCx1KSx6KHAsdSl9O3QuaW5wdXQ9aTt2YXIgZj10LnNlbGVjdD1mdW5jdGlvbihlLHQpe3ZhciBuPWUudGV4dCxzPWUuY2FuY2VsVGV4dCxhPXZvaWQgMD09PXM/IkNhbmNlbCI6cyxpPWUuY2FuY2VsQ2FsbGJhY2sscj1lLmNob2ljZXMsYz1lLnBvc2l0aW9uLGw9dm9pZCAwPT09Yz9VLnBvc2l0aW9ucy5zZWxlY3R8fGwudG9wOmM7aigpLEooKTt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKSx1PU4oKTtkLmlkPXU7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7by5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy50ZXh0Ym94KSxvLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmJhY2tncm91bmRJbmZvKSxvLmlubmVySFRNTD0nPGRpdiBjbGFzcz0iJytVLmNsYXNzZXMudGV4dGJveElubmVyKyciPicrbisiPC9kaXY+IixkLmFwcGVuZENoaWxkKG8pLHIuZm9yRWFjaChmdW5jdGlvbihlLHQpe3ZhciBuPWUudHlwZSxzPXZvaWQgMD09PW4/MTpuLGE9ZS50ZXh0LGk9ZS5oYW5kbGVyLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7Yy5jbGFzc0xpc3QuYWRkKG1bc10pLGMuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuYnV0dG9uKSxjLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLnNlbGVjdENob2ljZSk7dmFyIG89clt0KzFdO28mJiFvLnR5cGUmJihvLnR5cGU9MSksbyYmby50eXBlPT09cyYmYy5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5zZWxlY3RDaG9pY2VSZXBlYXRlZCksYy5pbm5lckhUTUw9YSxjLm9uY2xpY2s9ZnVuY3Rpb24oKXtfKHUsbCksQigpLGkoKX0sZC5hcHBlbmRDaGlsZChjKX0pO3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO3AuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuYmFja2dyb3VuZE5ldXRyYWwpLHAuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuYnV0dG9uKSxwLmlubmVySFRNTD1hLHAub25jbGljaz1mdW5jdGlvbigpe18odSxsKSxCKCksaT9pKCk6dCYmdCgpfSxkLmFwcGVuZENoaWxkKHApLGQubGlzdGVuZXI9ZnVuY3Rpb24oZSl7RihlKSYmcC5jbGljaygpfSxZKGQsbCkseihkLGwpfSx2PXQuZGF0ZT1mdW5jdGlvbihlLHQsbil7dmFyIHM9ZS52YWx1ZSxhPXZvaWQgMD09PXM/bmV3IERhdGU6cyxpPWUuc3VibWl0VGV4dCxjPXZvaWQgMD09PWk/Ik9LIjppLG89ZS5jYW5jZWxUZXh0LHI9dm9pZCAwPT09bz8iQ2FuY2VsIjpvLGw9ZS5zdWJtaXRDYWxsYmFjayxkPWUuY2FuY2VsQ2FsbGJhY2ssdT1lLnBvc2l0aW9uLHA9dm9pZCAwPT09dT9VLnBvc2l0aW9ucy5kYXRlfHxwLnRvcDp1O2ooKSxKKCk7ZnVuY3Rpb24gZihlKXtMLmlubmVySFRNTD1VLmRhdGVNb250aHNbZS5nZXRNb250aCgpXSxnLmlubmVySFRNTD1lLmdldERhdGUoKSxoLmlubmVySFRNTD1lLmdldEZ1bGxZZWFyKCl9ZnVuY3Rpb24gbShlKXtmKGEpfWZ1bmN0aW9uIHYoZSl7dmFyIHQ9bmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKStlKzEsMCkuZ2V0RGF0ZSgpO2EuZ2V0RGF0ZSgpPnQmJmEuc2V0RGF0ZSh0KSxhLnNldE1vbnRoKGEuZ2V0TW9udGgoKStlKSxmKGEpfWZ1bmN0aW9uIGIoZSl7YS5zZXREYXRlKGEuZ2V0RGF0ZSgpK2UpLGYoYSl9ZnVuY3Rpb24geChlKXthLmdldEZ1bGxZZWFyKCkrZTwwP2Euc2V0RnVsbFllYXIoMCk6YS5zZXRGdWxsWWVhcihhLmdldEZ1bGxZZWFyKCkrZSksZihhKX12YXIgeT0iJiM5NjYyIixMPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpLGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2IiksaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKSxrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpLEM9TigpO2suaWQ9Qzt2YXIgRT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTtFLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmJhY2tncm91bmRJbmZvKTt2YXIgVD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTtULmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmRhdGVTZWxlY3RvcklubmVyKTt2YXIgTT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTtNLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmJ1dHRvbiksTS5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5lbGVtZW50VGhpcmQpLE0uY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuZGF0ZVNlbGVjdG9yVXApLE0uaW5uZXJIVE1MPXk7dmFyIEg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7SC5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5idXR0b24pLEguY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuZWxlbWVudFRoaXJkKSxILmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmRhdGVTZWxlY3RvclVwKSxILmlubmVySFRNTD15O3ZhciBTPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO1MuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuYnV0dG9uKSxTLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmVsZW1lbnRUaGlyZCksUy5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5kYXRlU2VsZWN0b3JVcCksUy5pbm5lckhUTUw9eSxMLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmVsZW1lbnQpLEwuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuZWxlbWVudFRoaXJkKSxMLmlubmVySFRNTD1VLmRhdGVNb250aHNbYS5nZXRNb250aCgpXSxnLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmVsZW1lbnQpLGcuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuZWxlbWVudFRoaXJkKSxnLnNldEF0dHJpYnV0ZSgiY29udGVudEVkaXRhYmxlIiwhMCksZy5hZGRFdmVudExpc3RlbmVyKCJpbnB1dCIsZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSsxLDApLmdldERhdGUoKSxuPWUudGFyZ2V0LnRleHRDb250ZW50LnJlcGxhY2UoL14wKy8sIiIpLnJlcGxhY2UoL1teXGRdL2csIiIpLnNsaWNlKDAsMik7TnVtYmVyKG4pPnQmJihuPXQudG9TdHJpbmcoKSksZS50YXJnZXQudGV4dENvbnRlbnQ9bixOdW1iZXIobik8MSYmKG49IjEiKSxhLnNldERhdGUoTnVtYmVyKG4pKX0pLGcuYWRkRXZlbnRMaXN0ZW5lcigiYmx1ciIsbSksZy5pbm5lckhUTUw9YS5nZXREYXRlKCksaC5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5lbGVtZW50KSxoLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmVsZW1lbnRUaGlyZCksaC5zZXRBdHRyaWJ1dGUoImNvbnRlbnRFZGl0YWJsZSIsITApLGguYWRkRXZlbnRMaXN0ZW5lcigiaW5wdXQiLGZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LnRleHRDb250ZW50LnJlcGxhY2UoL14wKy8sIiIpLnJlcGxhY2UoL1teXGRdL2csIiIpLnNsaWNlKDAsNCk7ZS50YXJnZXQudGV4dENvbnRlbnQ9dCxhLnNldEZ1bGxZZWFyKE51bWJlcih0KSl9KSxoLmFkZEV2ZW50TGlzdGVuZXIoImJsdXIiLG0pLGguaW5uZXJIVE1MPWEuZ2V0RnVsbFllYXIoKTt2YXIgdz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTt3LmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmJ1dHRvbiksdy5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5lbGVtZW50VGhpcmQpLHcuaW5uZXJIVE1MPXk7dmFyIE89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7Ty5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5idXR0b24pLE8uY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuZWxlbWVudFRoaXJkKSxPLmlubmVySFRNTD15O3ZhciBBPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO0EuY2xhc3NMaXN0LmFkZChVLmNsYXNzZXMuYnV0dG9uKSxBLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmVsZW1lbnRUaGlyZCksQS5pbm5lckhUTUw9eSxNLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gdigxKX0sSC5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIGIoMSl9LFMub25jbGljaz1mdW5jdGlvbigpe3JldHVybiB4KDEpfSx3Lm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gdigtMSl9LE8ub25jbGljaz1mdW5jdGlvbigpe3JldHVybiBiKC0xKX0sQS5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIHgoLTEpfTt2YXIgRD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTtELmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmJ1dHRvbiksRC5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5lbGVtZW50SGFsZiksRC5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5iYWNrZ3JvdW5kU3VjY2VzcyksRC5pbm5lckhUTUw9YyxELm9uY2xpY2s9ZnVuY3Rpb24oKXtfKEMscCksQigpLGw/bChhKTp0JiZ0KGEpfTt2YXIgST1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTtJLmNsYXNzTGlzdC5hZGQoVS5jbGFzc2VzLmJ1dHRvbiksSS5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5lbGVtZW50SGFsZiksSS5jbGFzc0xpc3QuYWRkKFUuY2xhc3Nlcy5iYWNrZ3JvdW5kRXJyb3IpLEkuaW5uZXJIVE1MPXIsSS5vbmNsaWNrPWZ1bmN0aW9uKCl7XyhDLHApLEIoKSxkP2QoYSk6biYmbihhKX0sVC5hcHBlbmRDaGlsZChNKSxULmFwcGVuZENoaWxkKEgpLFQuYXBwZW5kQ2hpbGQoUyksVC5hcHBlbmRDaGlsZChMKSxULmFwcGVuZENoaWxkKGcpLFQuYXBwZW5kQ2hpbGQoaCksVC5hcHBlbmRDaGlsZCh3KSxULmFwcGVuZENoaWxkKE8pLFQuYXBwZW5kQ2hpbGQoQSksRS5hcHBlbmRDaGlsZChUKSxrLmFwcGVuZENoaWxkKEUpLGsuYXBwZW5kQ2hpbGQoRCksay5hcHBlbmRDaGlsZChJKSxrLmxpc3RlbmVyPWZ1bmN0aW9uKGUpe1AoZSk/RC5jbGljaygpOkYoZSkmJkkuY2xpY2soKX0sWShrLHApLHooayxwKX07dC5kZWZhdWx0PXthbGVydDpsLGZvcmNlOmQsY29uZmlybTp1LGlucHV0Omksc2VsZWN0OmYsZGF0ZTp2LHNldE9wdGlvbnM6cixoaWRlQWxlcnRzOkp9fV0scy5jPWEscy5pPWZ1bmN0aW9uKGUpe3JldHVybiBlfSxzLmQ9ZnVuY3Rpb24oZSx0LG4pe3MubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxzLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHMuZCh0LCJhIix0KSx0fSxzLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHMucD0iIixzKHMucz0wKTtmdW5jdGlvbiBzKGUpe2lmKGFbZV0pcmV0dXJuIGFbZV0uZXhwb3J0czt2YXIgdD1hW2VdPXtpOmUsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gbltlXS5jYWxsKHQuZXhwb3J0cyx0LHQuZXhwb3J0cyxzKSx0Lmw9ITAsdC5leHBvcnRzfXZhciBuLGF9LCJvYmplY3QiPT09YihpKSYmIm9iamVjdCI9PT1iKGUpP2UuZXhwb3J0cz1hKCk6KG49W10sdm9pZCAwPT09KHM9ImZ1bmN0aW9uIj09dHlwZW9mKHQ9YSk/dC5hcHBseShpLG4pOnQpfHwoZS5leHBvcnRzPXMpKX0pLmNhbGwoaSx0KDApKGUpKX1dLHMuYz1hLHMuaT1mdW5jdGlvbihlKXtyZXR1cm4gZX0scy5kPWZ1bmN0aW9uKGUsdCxuKXtzLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om59KX0scy5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBzLmQodCwiYSIsdCksdH0scy5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxzLnA9IiIscyhzLnM9MSk7ZnVuY3Rpb24gcyhlKXtpZihhW2VdKXJldHVybiBhW2VdLmV4cG9ydHM7dmFyIHQ9YVtlXT17aTplLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIG5bZV0uY2FsbCh0LmV4cG9ydHMsdCx0LmV4cG9ydHMscyksdC5sPSEwLHQuZXhwb3J0c312YXIgbixhfSk7"
      }
  };

chrome.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:["*://disboard.org/js/app.js*"], types:["script"]},
  ["blocking"]
);

function compareVer(a, b) // https://stackoverflow.com/a/53387532/11037661
{
    //treat non-numerical characters as lower version
    //replacing them with a negative number based on charcode of each character
    function fix(s)
    {
        return "." + (s.toLowerCase().charCodeAt(0) - 2147483647) + ".";
    }
    a = ("" + a).replace(/[^0-9\.]/g, fix).split('.');
    b = ("" + b).replace(/[^0-9\.]/g, fix).split('.');
    var c = Math.max(a.length, b.length);
    for (var i = 0; i < c; i++)
    {
        //convert to integer the most efficient way
        a[i] = ~~a[i];
        b[i] = ~~b[i];
        if (a[i] > b[i])
            return 1;
        else if (a[i] < b[i])
            return -1;
    }
    return 0;
};

chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.sync.get(['safetymode'], function(data) {
    if (data.safetymode == undefined) {
        chrome.storage.sync.set({safetymode:enabled});
    };
  });
  fetch('https://raw.githubusercontent.com/Theblockbuster1/disboard-auto-bump/master/manifest.json', {mode: 'cors'})
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
      if(compareVer(JSON.parse(text).version, version) == 1) {
        chrome.notifications.create('', {
          title: 'Update available!',
          message: 'Click here to update.',
          contextMessage: 'https://github.com/Theblockbuster1/disboard-auto-bump',
          iconUrl: '/disboard-auto-bump-logo.png',
          requireInteraction: true,
          type: 'basic'
        });
      };
  })
  .catch(function(error) {
    console.error('Request failed', error)
  });
});



setInterval(function () {
  chrome.storage.sync.get(['updates'], function(data) {
    if (data.updates == true) {
      fetch('https://raw.githubusercontent.com/Theblockbuster1/disboard-auto-bump/master/manifest.json', {mode: 'cors'})
      .then(function(response) {
        return response.text();
      })
      .then(function(text) {
          if(compareVer(JSON.parse(text).version, version) == 1) {
            chrome.notifications.create('', {
              title: 'Update available!',
              message: 'Click here to update.',
              contextMessage: 'https://github.com/Theblockbuster1/disboard-auto-bump',
              iconUrl: '/disboard-auto-bump-logo.png',
              requireInteraction: true,
              type: 'basic'
            });
          };
      })
      .catch(function(error) {
        console.error('Request failed', error)
      });
    };
  });
}, 21600000);

chrome.notifications.onClicked.addListener(function(id) {
  chrome.tabs.create({url: "https://github.com/Theblockbuster1/disboard-auto-bump"});
  chrome.notifications.clear(id);
});

chrome.tabs.query({
  url: ["*://disboard.org/*dashboard/servers", "*://disboard.org/*dashboard/servers/"]
}, function(tabs) {
  tabs.forEach(tab => {
    chrome.tabs.update(tab.id,{autoDiscardable:false});
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.autoDiscardable == true) chrome.tabs.update(tabId,{autoDiscardable:false});
});