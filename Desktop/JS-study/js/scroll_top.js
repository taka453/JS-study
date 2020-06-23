// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  // 「window.scroll」を使ってスクロールさせましょう
  // ボタンの表示・非表示のアニメーションは不要とします
  const scrollTop = document.querySelector('.js-scroll-top');
  scrollTop.addEventListener('click', function() {
    const windowScrolltop = window.scroll({
      top: 0
    });
    console.log(windowScrolltop);
  });
}, false);
