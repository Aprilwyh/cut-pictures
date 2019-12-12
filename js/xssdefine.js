function xssEncode(str){
   return str.replace(/[<>&\"`'%]/g,'');
}
function xssInput(){
   var paras=document.getElementsByTagName('input');
   var iLength=paras.length;
   for(var i=0;i<iLength;i++){
       if(paras[i].type=="text"){
          var _val=paras[i].value;
          paras[i].value=xssEncode(_val);
       }
   }
}