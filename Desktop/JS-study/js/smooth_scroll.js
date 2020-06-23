// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  // 「window.scroll」を使ってスクロールさせましょう
  // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません
  // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)

  //#から始まるリンク（内部リンク）のクリックイベントに実装
  let smoothScroll = function (target, smoothOffset) {
    let toY;
    let nowY = window.pageYOffset;
    const divisor = 8;
    const range = (divisor / 2) + 1;

  //ターゲット座標
    const targetRect = target.getBoundingClientRect();
    const targetY = targetRect.top + nowY - smoothOffset;

    (function(){
      let thisFunc = arguments.callee;
      toY = nowY + Math.round((targetY - nowY) / divisor);
      window.scrollTo(0, toY);
      nowY = toY;

      if(document.body.clientHeight - window.innerHeight < toY) {
        window.scrollTo(0, document.body.clientHeight);
        return;
      }
      if (to >= targetY + range || toY <= targetY - range) {
        window.setTimeout(thisFunc, 10);
      } else {
        window.scrollTo(0, targetY);
      }
    });
  };

  const smoothOffset = 16;
  const links = document.querySelectorAll('a[href*="#"]');
  for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event){
    const href = event.currentTarget.getAttribute('href');
    const splitHref = href.split('#');
    const targetID = splitHref[1];
    const target = document.getElementById(targetID);

    if(target){
      smoothScroll(target, smoothOffset);
    } else {
      return true;
    }
    return false;
    });
  }
}, false);
