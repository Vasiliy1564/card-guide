
(function(){
 const balance=document.getElementById('balance');
 const money=n=>n.toLocaleString('ru-RU',{minimumFractionDigits:2,maximumFractionDigits:2})+' $';
 balance.addEventListener('input',function(){
  const value=Number(balance.value),valid=balance.value.trim()!==''&&Number.isFinite(value)&&value>=10&&value<=2000;
  balance.setAttribute('aria-invalid',String(!valid));
  if(!valid){document.getElementById('total').textContent='Укажите сумму от 10 до 2 000 $';['base','credit','sbp'].forEach(id=>document.getElementById(id).textContent='—');return;}
  const credit=Math.round(value*1.5)/100,sbp=Math.round(value*7)/100;
  document.getElementById('base').textContent=money(value);
  document.getElementById('credit').textContent=money(credit);
  document.getElementById('sbp').textContent=money(sbp);
  document.getElementById('total').textContent=money(19+value+credit+sbp);
 });
})();
